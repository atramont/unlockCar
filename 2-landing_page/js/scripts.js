jQuery(document).ready(function($) {
	'use strict';

	// Adicionar classes a navbar na rolagem da janela
	$(window).on('scroll', function(){
		var $navbar = $('.navbar-sticky');
    if ($(window).scrollTop() > 80) {
      $navbar.addClass('stuck');
    } else {
    	$navbar.removeClass('stuck');
    }
	});

	// To Top Button
	var $scrollTop = $('.scroll-to-top-btn');
	if ($scrollTop.length > 0) {
		$(window).on('scroll', function(){
	    if ($(window).scrollTop() > 600) {
	      $scrollTop.addClass('visible');
	    } else {
	      $scrollTop.removeClass('visible');
	    }
		});
		$scrollTop.on('click', function(e){
			e.preventDefault();
			$('html').velocity("scroll", { offset: 0, duration: 1000, easing:'easeOutExpo', mobileHA: false });
		});
	};

	// Scroll para âncora
	var $scrollTo = $('.scroll-to');
	$scrollTo.on('click', function(event){
		var $elemOffsetTop = $(this).data('offset-top');
		$('html').velocity("scroll", { offset:$(this.hash).offset().top-$elemOffsetTop, duration: 1000, easing:'easeOutExpo', mobileHA: false});
		event.preventDefault();
	});


	// Mobile Menu
	var $navToggle = $('.nav-toggle', '.navbar');
	$navToggle.on('click', function(){
		$(this).toggleClass('active').parent().find('.main-navigation').toggleClass('expanded');;
	});


	// Paineis
	var $autoTab = $('.featured-tabs .nav-tabs[data-autoswitch]');
	if($autoTab.length > 0) {
    var $changeInterval = $('.featured-tabs .nav-tabs').data('interval');
		var $tabCarousel = setInterval(function() {
      var $tabs = $('.featured-tabs .nav-tabs > li'),
          $active = $tabs.filter('.active'),
          $next = $active.next('li'),
          $toClick = $next.length ? $next.find('a') : $tabs.eq(0).find('a');

      $toClick.trigger('click');
	  }, $changeInterval);
	}

	// Slider 
	var $phoneCarousel = $( '.celular-carousel .inner' );
	if ( $phoneCarousel.length > 0 ) {
		$phoneCarousel.each( function () {
			var $parent = $(this).parents('.celular-carousel');

			var dataLoop 	 = $parent.data( 'loop' ),
					autoPlay   = $parent.data( 'autoplay' ),
					timeOut    = $parent.data( 'interval' );

			$( this ).owlCarousel( {
				items: 1,
				loop: dataLoop,
				margin: 0,
				nav: false,
				dots: true,
				navText: [ , ],
				autoplay: autoPlay,
				autoplayTimeout: timeOut,
				autoHeight: true
			} );
		} );
	}

	// Image Carousel
	var $imageCarousel = $( '.image-carousel .inner' );
	if ( $imageCarousel.length > 0 ) {
		$imageCarousel.each( function () {

			var dataLoop 	 = $( this ).parent().data( 'loop' ),
					autoPlay   = $( this ).parent().data( 'autoplay' ),
					timeOut    = $( this ).parent().data( 'interval' ),
					autoheight = $( this ).parent().data( 'autoheight' );

			$( this ).owlCarousel( {
				items: 1,
				loop: dataLoop,
				margin: 0,
				nav: true,
				dots: false,
				navText: [ , ],
				autoplay: autoPlay,
				autoplayTimeout: timeOut,
				autoHeight: autoheight
			} );
		} );
	}
});