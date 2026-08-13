(function($) {
  "use strict";

  $(document).ready(function() {
    // 1. Back to top button
    var $backToTop = $("#top-link");
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 300) {
        $backToTop.addClass("active");
      } else {
        $backToTop.removeClass("active");
      }
    });
    $backToTop.on("click", function(e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 500);
    });

    // 2. Ensure section background images render
    $(".section-bg, .bg-fill").addClass("bg-loaded");

    // 3. Initialize or reload Flickity sliders for category carousels
    if (typeof Flickity !== "undefined") {
      $(".slider, .category-slider .slider").each(function() {
        var sliderElem = this;
        var flkty = Flickity.data(sliderElem);
        if (!flkty) {
          flkty = new Flickity(sliderElem, {
            cellAlign: "left",
            contain: true,
            wrapAround: true,
            autoPlay: false,
            pageDots: false,
            prevNextButtons: true,
            draggable: true,
            freeScroll: false,
            dragThreshold: 5,
            percentPosition: true
          });
        }
        // Force relayout so Flickity positions all cells correctly
        setTimeout(function() {
          if (flkty) {
            flkty.resize();
            flkty.reposition();
          }
        }, 150);
      });
    }
  });
})(jQuery);
