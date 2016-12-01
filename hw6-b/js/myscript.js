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
    }
  });

  // portrait
  $('#portrait-cont').hover(
    function() {
      $("#portrait").attr("src","assets/me2.jpg");
    }, function () {
      $("#portrait").attr("src","assets/me.jpg");
  });

  var currentContRatio = 0;

  function setWorkRatio () {
    var imgContainer = $(".work-item-pad");
    var contWidth = $(imgContainer).width(); // Max width for the image
    var contHeight = $(imgContainer).height(); // Max height for the image
    var contRatio = contWidth / contHeight; // Used for cont aspect ratio
    if (contRatio != currentContRatio) {
      sizeAll();
      currentContRatio = contRatio;
    }
  }

  function sizeWork(img, scale, anim) {
    var cont = img.parent();
    var contWidth = $(cont).width(); // Max width for the image
    var contWidthScl = contWidth * scale;
    var contHeight = $(cont).height(); // Max height for the image
    var contHeightScl = contHeight * scale;
    var contRatio = contWidthScl / contHeightScl; // Used for cont aspect ratio
    var imgWidth = $(img).width();    // Current image width
    var imgHeight = $(img).height();  // Current image height
    var imgRatio = imgWidth / imgHeight; // Used for img aspect ratio
    var fade = 0;
    if (anim) {fade = 400;}

    // custom image offsets
    var x = 0,
        y = 0;

    if (contRatio > 3) {
      // <= 992
      x = parseInt(img.data('wx'));
      y = parseInt(img.data('wy'));
    } else {
      // > 992
      x = parseInt(img.data('nx'));
      y = parseInt(img.data('ny'));
    }

    if (isNaN(x)) {x = 0;}
    if (isNaN(y)) {y = 0;}

    var overlay = img.parent().find(".work-item-overlay");
    // console.log(overlay);
    overlay.css("width", contWidth);
    overlay.css("height", contHeight);
    overlay.css("top", cont.position().top);
    overlay.css("left", cont.position().left);

    if (contRatio > imgRatio) {
      // image is stouter than container 
      var newWidth = contWidthScl;
      var newHeight = contWidthScl / imgRatio;
      var offsetY = ((newHeight) - contHeight) / 2 - y;
      var offsetX = ((newWidth) - contWidth) / 2 - x;

      $(img).animate({
        width: contWidthScl,
        height: contWidthScl / imgRatio,
        top: -offsetY,
        left: -offsetX
      }, fade);
    } else {
      // image is thinner than container
      var newWidth = contHeightScl * imgRatio;
      var newHeight = contHeightScl;contHeightScl
      var offsetY = ((newHeight) - contHeight) / 2 - y;
      var offsetX = ((newWidth) - contWidth) / 2 - x;

      $(img).animate({
        width: contHeightScl * imgRatio,
        height: contHeightScl,
        top: -offsetY,
        left: -offsetX
      }, fade);
    }
  };

  function sizeAll() {
    $('.work-item-pad img').each(function() {
      sizeWork($(this), 1, false);
      // console.log("size!");
    });
  };

  $(".work-item-pad").hover(function() {
      //mouse in
      sizeWork($(this).find("img"), 1.1, true);
    }, function() {
      //mouse out
      sizeWork($(this).find("img"), 1, true);
  });

  $(window).resize(function() {
    setWorkRatio();
  });

  $(window).ready(function() {
    setWorkRatio();
  })

  // borrowed from bootstrap
  // modal 
  $('#modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var recipient = button.data('whatever');// Extract info from data-* attributes
    var image = button.find('img');
    image.css("width", "");
    image.css("height", "");
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(recipient)
    modal.find('.modal-body #imghere').contents().remove();
    image.clone().prependTo(modal.find('.modal-body #imghere'));
  })
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