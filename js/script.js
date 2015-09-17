$(document).ready(function(){

		/*  ==========================================================================
			General Variable
			========================================================================== */

			var $win = $(window),
				$doc = $(document),
				$body = $('body');

			var winWidth = $win.width(),
				winHeight = $win.height();

			var $aboutSection = $(".js-about"),
				$aboutBtn = $(".js-about_button"),
				$aboutCloseBtn = $(".js-about--close"),
				$grabText = $(".grab"),
				$grabBtn_cvs = $(".js-icon-button-cvs"),
				$grabBtn_starbucks = $(".js-icon-button-starbucks"),
				$downloadApp = $("#download--app"),
				$downloadSection = $(".js-download"),
				$downloadCloseSection = $(".js-download--close");

		/*  ==========================================================================
			General Actions
			========================================================================== */
			$grabBtn_cvs.on("click", function(event){
				event.preventDefault();
				$grabText.text("CVS");

			})

			$grabBtn_starbucks.on("click", function(event){
				event.preventDefault();
				$grabText.text("Starbucks")

			})

			// Download App
			$downloadApp.on("click", function(event){
				event.preventDefault();
				$downloadSection.addClass("is-in");
			});

			$downloadCloseSection.on("click", function(event) {
				event.preventDefault();
				$downloadSection.removeClass("is-in");
			});

			// About

			$aboutBtn.on("click", function(event) {
				event.preventDefault();
				$aboutSection.addClass("is-in");
			});

			$aboutCloseBtn.on("click", function(event) {
				event.preventDefault();
				$aboutSection.removeClass("is-in");
			});



		});