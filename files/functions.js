   var isMobile;

     if( navigator.userAgent.match(/Android/i) ||
         navigator.userAgent.match(/webOS/i) ||
         navigator.userAgent.match(/iPhone/i) ||
         navigator.userAgent.match(/iPod/i) ||
         navigator.userAgent.match(/iPad/i) ||
         navigator.userAgent.match(/BlackBerry/)
     ){
       isMobile = true;
     }

	/* Full screen hero image at the top of the page */
   function heroImage() {
      $.anystretch("http://davidmurray.is/wp-content/themes/davidmurrayis/_/img/intro_bg2.jpg", {speed: 150});
   }
   
   function topsectionPadding() {
      var windowHeight = $(window).height();
      $("#is").css({'marginTop' : windowHeight + 'px'});
   };

   /* Sticky Nav (bottom of window on load, top when scrolling) */
   function positionNav() {
      var nav = $('nav');
      var windowHeight = $(window).height();
      var positionBottom = windowHeight - nav.outerHeight(true);
      var scrollVal = $(window).scrollTop();

      if ( scrollVal > positionBottom ) {
         nav.css({'position':'fixed','top' :'0px'});
      } else {
         nav.css({'position':'absolute','top': positionBottom +'px'});
      }

      $(window).scroll(function() {
         var scrollVal = $(this).scrollTop();
         if ( scrollVal > positionBottom ) {
            nav.css({'position':'fixed','top' :'0px'});
         } else {
            nav.css({'position':'absolute','top': positionBottom +'px'});
         }
      });

   };

   /* Smooth scrolling anchors */
   $('nav a[href*=#]').bind('click', function(){
      var $href = $(this).attr('href')
      $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top - 140}, 1500, 'easeInOutCubic');
      return false;
   });

   /* Position Intro Type */
   function positionIntro() {
      var introType = $('#intro hgroup');
      var introTypeHeight = $(introType).outerHeight(true);
      var windowHeight = $(window).height();
      var introCenter = (windowHeight - 140)/2;
      var introPlacement = (introCenter - (introTypeHeight/2));

      introType.css({'top' : introPlacement + 'px'  });

      /* fade intro */
      $(window).on('scroll', function() {
         var st = $(this).scrollTop();
         introType.css({ 'opacity' : (1 - st/(introCenter*2)), 'top' : (introPlacement-(st/2)) + 'px' });
      });
      
   };
