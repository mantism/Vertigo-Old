var homeBottom = $('#home').offset().top + $('#home').outerHeight()
var navButtons = ['#home-button', '#gathering-button', '#about-button', '#media-button', '#merch-button', '#contact-button']
var atTop;
var logo1 = document.getElementById("nav-logo");
var logo2 = document.getElementById("nav-logo2");    

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

function loadMailChimpForm() {
  var elem = document.getElementById('mailchimp');
  elem.classList.toggle('active');
}

function registerButtonClick() {
  var url = "https://www.eventbrite.com/e/vertigo-tricking-gathering-2-tickets-54831354056?fbclid=IwAR2ZMLz18EcEpFgzNJh3gNeT2QY0qyvcakLRJjE27rizmFxI6qH9yLa4Jms#tickets";
  var win = window.open(url, '_blank');
  win.focus();
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
    logo1.style.opacity = '1.0';
    logo1.style.width = 'auto';
    //logo1.style.display = 'inline-block';
    logo2.style.opacity = '0.0';
    logo2.style.width = '0';
    //logo2.style.display = 'none';
    atTop = true;
  } else {
    $('header').css('background-color', '#1c1c1c');
    atTop = false;
    logo1.style.opacity = '0.0';
    logo1.style.width = '0';
    //logo1.style.display = 'none';
    logo2.style.opacity = '1.0';
    logo2.style.width = 'auto';
    //logo2.style.display = 'inline-block';
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