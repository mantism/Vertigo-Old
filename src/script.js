var homeBottom = $('#home').offset().top + $('#home').outerHeight()
var navButtons = ['#home-button', '#gathering-button', '#about-button', '#media-button', '#merch-button', '#contact-button']
var instaLinks = ['https://www.instagram.com/p/BsrNSRolF0u/', 
                  'https://www.instagram.com/p/BjvgD8yHBpP/', 
                  'https://www.instagram.com/p/BjaMnpDH8A6/',
                  'https://www.instagram.com/p/BjGI0g9nKcX/',
                  'https://www.instagram.com/p/BjDRhHDna1G/',
                  'https://www.instagram.com/p/Bi6OLcLnCK5/',
                  'https://www.instagram.com/p/Bi5iaadnWML/',
                  'https://www.instagram.com/p/Bi3Aw7rnX6-/',
                  'https://www.instagram.com/p/BizhFognIWC/'
                ];
var atTop;
        

function isInView(element) {
  var elementTop = element.offset().top;
  var elementBot = elementTop + element.outerHeight();
  var screenBot = $(window).scrollTop() + $(window).height();
  return (screenBot > elementTop) && (screenBot <  elementBot);
}

function toggleActive(element) {
  for (var i = 0; i < navButtons.length; i++) {
    if (element === navButtons[i]) {
      $(navButtons[i]).addClass('active');
    } else {
      $(navButtons[i]).removeClass('active');
    }
  }
}

function loadInstaPosts() {
  var images = []
  var posts = []
  for (var i = 0; i < instaLinks.length; i++) {
    var url = 'https://api.instagram.com/oembed?url=' + instaLinks[i];
    posts.push(document.getElementById('post-' + (i + 1)));
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var img = document.createElement('img');
        img.src = data.thumbnail_url;
        if (img.height > img.width) {
          img.height = 'auto';
          img.width = 'auto';
        }
        images.push(img)
      }).then(() => {
        if (images.length === 9) {
          for (var j = 0; j < images.length; j++) {
            posts[j].appendChild(images[j])
          }
        }
      })
  }
}


function yearButtonClick(div) {
  if (div.id === 'button-2018') {
    $('#button-2018').addClass('selected')
    $('#button-2019').removeClass('selected')
    $('#v1').addClass('active')
    $('#v2').removeClass('active')
  } else {
    $('#button-2019').addClass('selected')
    $('#button-2018').removeClass('selected')
    $('#v2').addClass('active')
    $('#v1').removeClass('active')
  }
}

$(window).scroll(function() {
  if ($(window).scrollTop() < homeBottom) {
    toggleActive('#home-button');
    $('header').css('background-color', '');
    atTop = true;
  } else {
    $('header').css('background-color', '#1c1c1c');
    atTop = false;
  }

  if (isInView($('#gathering')) && !atTop) {
    toggleActive('#gathering-button');
  } else if (isInView($('#about'))) {
    toggleActive('#about-button');
  } else if (isInView($('#media'))) {
    toggleActive('#media-button');
  } else if (isInView($('#merch'))) {
    toggleActive('#merch-button')
  } else if (isInView($('#contact'))) {
    toggleActive('#contact-button')
  }
});

$(document).ready( function() {
  loadInstaPosts();
  atTop = true;

  $('#home-button').click(function() {
    toggleActive('#home-button');
  });

  $('#gathering-button').click(function() {
    toggleActive('#gathering-button');
  });

  $('#about-button').click(function() {
    toggleActive('#about-button');
  });

  $('#media-button').click(function() {
    toggleActive('#media-button');
  });

  $('#merch-button').click(function() {
    toggleActive('#merch-button');
  })

  $('#contact-button').click(function() {
    toggleActive('#contact-button')
  })

  /*$("a[href^='#']").click(function(e) {
    if (this.hash !== ' ') {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 50
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });*/

  $(".topnav").click(function(e) {
    var x = document.getElementById("links");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  })
});