$(document).ready(function() {
    $(window).on("scroll", function() {
        var height = $(window).scrollTop();
        if (height >= 200) {
            $("img#bigWatch").css('zoom', 1+(height-200)/2000);
        }
        if (height >= 60) {
            $("nav").css('padding-top', '0');
            $("nav").css('background', 'rgba(255,255,255,0.975)', 'box-shadow', '0 0 2px rgba(200,200,200,0.5)');
        } else {
            $("nav").css('padding-top', '15px');
            $("nav").css('background', 'transparent', 'box-shadow', '0', 'padding-top', '15px');
        }
        var h2 = $("img.two").offset().top - height;
        if(h2 < 300) {
            $("img.one").css({
                "transform": "scale(0.65) translateY(250px)"
            });
        }
    });
    $('.option').click(function() {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });
});

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
