$(document).ready(function(){
  // Add smooth scrolling to all links
  // borrowed from http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // $(".work-item-pad").hover(
  //   function(){
  //     var info = $(".work-item-label");
  //     info.css("opacit", "1");
  //     console.log("show!");
  //   },
  //   function(){
  //     info.css("opacity", "0");
  //     console.log("hide!");
  //   });

  // // borrowed from http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling?page=1&tab=votes#tab-top
  // function isScrolledIntoView(elem)
  // { 
  //   var docViewTop = $(window).scrollTop();
  //   var docViewBottom = docViewTop + $(window).height();

  //   var elemTop = $(elem).offset().top;
  //   var elemBottom = elemTop + $(elem).height();

  //   docViewTop = docViewTop + 10;

  //   // return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  //   return (elemTop >= docViewTop);
  // }

  // // scroll
  // $(window).scroll(function(){
  //   console.log(isScrolledIntoView( $('#about') ));
  // });
});

/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

  var docElem = document.documentElement,
    header = document.querySelector( '.navbar-fixed-top' ),
    didScroll = false,
    elemTop = $("#intro-thresh").offset().top;
    changeHeaderOn = elemTop;

  function init() {
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 250 );
      }
    }, false );
  }

  function scrollPage() {
    var sy = scrollY();
    if ( sy >= changeHeaderOn ) {
      console.log("switch!");
      header.classList.remove('navbar-hidden');
    }
    else {
      console.log("back...");
      header.classList.add('navbar-hidden');
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();