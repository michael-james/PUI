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

  // portrait

  $('#portrait-cont').hover(
    function() {
      $("#portrait").attr("src","assets/me2.jpg");
      // $('#portrait').animateCssFade('flipOutY');
      // $('#portrait').animateCss('fadeOut');
    }, function () {
      $("#portrait").attr("src","assets/me.jpg");
      // $('#portrait').animateCss('flipInY')
  });

  // // borrowed from http://stackoverflow.com/questions/14425300/scale-image-properly-but-fit-inside-div
  // $('img').on('bestfit',function(){
  //   var css;
  //   var ratio=$(this).width() / $(this).height();
  //   var pratio=$(this).parent().width() / $(this).parent().height();
  //   if (ratio<pratio) css={width:'auto', height:'100%'};
  //   else css={width:'100%', height:'auto'};
  //   $(this).css(css);
  // }).on('load', function(){
  //     $(this).trigger('bestfit');
  // }).trigger('bestfit');

  // // get image size
  // // borrowed from http://stackoverflow.com/questions/5106243/how-do-i-get-background-image-size-in-jquery
  // var url = $('.work-item-pad').css('background-image').replace('url(', '').replace(')', '').replace("'", '').replace('"', '');
  // var bgImg = $('<img />');
  // bgImg.hide();

  // bgImg.one("load", function() {
  //   var height = bgImg.height();
  //   console.log(url);
  //   console.log(height);
  // }).each(function() {
  //   if(this.complete) $(this).load();
  // });

  // var img = new Image();
  // img.src = $('body').css('background-image').replace(/url\(|\)$/ig, "");

  // $(window).on("resize", function () {
  //   $('body').height($('body').width() * img.height / img.width);
  // }).resize(); 

  // $('#myDiv').append(bgImg);
  // bgImg.attr('src', url);
  
  // label animation from left
  // $(".work-item-pad").hover(
  //   function(){
  //     $(".work-item-label").animate({left: 0});
  //     // console.log("show!");
  //   },
  //   function(){
  //     $(".work-item-label").animate({left: "-60%"});
  //     // console.log("hide...");
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

  // AUTOMATED SCROLL TO ABOUT
  // // borrowed from http://blogs.sitepointstatic.com/examples/tech/animation-api/index.html
  // var anim = document.getElementById("arrow-down"),
  //     pfx = ["webkit", "moz", "MS", "o", ""];

  // // animation listener events
  // // PrefixedEvent(anim, "AnimationStart", AnimationListener);
  // // PrefixedEvent(anim, "AnimationIteration", AnimationListener);
  // PrefixedEvent(anim, "AnimationEnd", AnimationListener);


  // // apply prefixed event handlers
  // function PrefixedEvent(element, type, callback) {
  //   for (var p = 0; p < pfx.length; p++) {
  //     if (!pfx[p]) type = type.toLowerCase();
  //     element.addEventListener(pfx[p]+type, callback, false);
  //   }
  // }

  // var uh = 0;

  // // handle animation events
  // function AnimationListener(e) {
  //   // LogEvent("Animation '"+e.animationName+"' type '"+e.type+"' at "+e.elapsedTime.toFixed(2)+" seconds");
  //   if (e.type.toLowerCase().indexOf("animationend") >= 0) {
  //     // LogEvent("Stopping animation...");

  //     if (uh >= 1) {
  //       console.log("let's go");
  //       var hash = '#about';
  //       $('html, body').animate({
  //         scrollTop: $(hash).offset().top
  //       }, 600, function(){
     
  //         // Add hash (#) to URL when done scrolling (default click behavior)
  //         window.location.hash = hash;
  //       });
  //     }

  //     uh += 1;
  //   }
  // }
});

new WOW().init();

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
      header.classList.remove('navbar-hidden');
    }
    else {
      header.classList.add('navbar-hidden');
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();


// borrowed from 
$.fn.extend({
    animateCss: function (animationName, doOnEnd) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

// borrowed from 
$.fn.extend({
    animateCssFade: function (animationName, doOnEnd) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            $(this).animateCss('fadeOut');
        });
    }
});