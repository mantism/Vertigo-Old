var gulp = require('gulp');
var runSequence = require('run-sequence');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var conventionalChangelog = require('gulp-conventional-changelog');
var minify = require('gulp-minify');
var git = require('gulp-git');
var fs = require('fs');

gulp.task('changelog', () => {
	return gulp.src('CHANGELOG.md', {
		buffer: false
	})
	.pipe(conventionalChangelog({
		preset: 'angular'
	}))
	.pipe(gulp.dest('./'));
});

gulp.task('commit-changes', () => {
	return gulp.src('.')
	  .pipe(git.add())
	  .pipe(git.commit('Updating using gulp: see change log'));
});

gulp.task('push-changes', (callback) => {
	git.push('origin', 'master', callback);
});

gulp.task('minify-css', () => {
  return gulp.src('./src/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./'));
});

gulp.task('minify-html', () => {
  return gulp.src('./src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'));
});

gulp.task('minify-js', () => {
  return gulp.src('./src/script.js')
    .pipe(minify({
      ext: {
				src:'-debug.js',
        min:'.js'
      }
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('move-res', () => {
  return gulp.src('./src/res/**/*')
    .pipe(gulp.dest('./res'));
});

gulp.task('minify', (callback) => {
  runSequence(
    'move-res',
    'minify-css',
    'minify-html',
    'minify-js',
    (error) => {
      if (error) {
        console.log(error.message);
      } else {
        console.log('Minify finished successfully');
      }
      callback(error);
    });
});

gulp.task('deploy', (callback) => {
  runSequence(
    'minify',
    'changelog',
    'commit-changes',
		'push-changes',
    (error) => {
      if (error) {
			  console.log(error.message);
			} else {
				console.log('Successfully deployed');
			}
			callback(error);
		});
});
