"use strict";var atTop,homeBottom=$("#home").offset().top+$("#home").outerHeight(),navButtons=["#home-button","#gathering-button","#about-button","#media-button","#merch-button","#contact-button"];function isInView(t){var o=t.offset().top,e=o+t.outerHeight(),n=$(window).scrollTop()+$(window).height();return n>o&&n<e}function toggleActive(t){for(var o=0;o<navButtons.length;o++)t===navButtons[o]?$(navButtons[o]).addClass("active"):$(navButtons[o]).removeClass("active")}function loadMailChimpForm(){document.getElementById("mailchimp").classList.toggle("active")}function registerButtonClick(){window.open("https://www.eventbrite.com/e/vertigo-tricking-gathering-2-tickets-54831354056?fbclid=IwAR2ZMLz18EcEpFgzNJh3gNeT2QY0qyvcakLRJjE27rizmFxI6qH9yLa4Jms#tickets","_blank").focus()}function yearButtonClick(t){"button-2018"===t.id?($("#button-2018").addClass("selected"),$("#button-2019").removeClass("selected"),$("#v1").addClass("active"),$("#v2").removeClass("active")):($("#button-2019").addClass("selected"),$("#button-2018").removeClass("selected"),$("#v2").addClass("active"),$("#v1").removeClass("active"))}$(window).scroll(function(){$(window).scrollTop()<homeBottom?(toggleActive("#home-button"),$("header").css("background-color",""),atTop=!0):($("header").css("background-color","#1c1c1c"),atTop=!1),isInView($("#gathering"))&&!atTop?toggleActive("#gathering-button"):isInView($("#about"))?toggleActive("#about-button"):isInView($("#media"))?toggleActive("#media-button"):isInView($("#merch"))?toggleActive("#merch-button"):isInView($("#contact"))&&toggleActive("#contact-button")}),$(document).ready(function(){atTop=!0,$("#home-button").click(function(){toggleActive("#home-button")}),$("#gathering-button").click(function(){toggleActive("#gathering-button")}),$("#about-button").click(function(){toggleActive("#about-button")}),$("#media-button").click(function(){toggleActive("#media-button")}),$("#merch-button").click(function(){toggleActive("#merch-button")}),$("#contact-button").click(function(){toggleActive("#contact-button")}),$(".topnav").click(function(t){var o=document.getElementById("links");"topnav"===o.className?o.className+=" responsive":o.className="topnav"})});