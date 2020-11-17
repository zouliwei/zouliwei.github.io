$(window).on('load', function() {
  $('.loader .inner').fadeOut(500, function() {
    $('.loader').fadeOut(500);
  });
  
  // Portfolio - Isotope
  $('.items').isotope({
    filter: '*',
    animatiionOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false,
    },
  });
});

$(document).ready(function () {
  // Slides - Superslides
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false,
  })

  // Slides - Typed
  var typed = new Typed(".typed", {
    strings: [
      "Software Engineer.",
      "Web Developer.",
      "Student.",
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });

  // Navigation
  const nav = $('#navigation');
  const navTop = nav.offset().top;

  $(window).on('scroll', function () {
    var body = $('body');
    if ($(window).scrollTop() >= navTop) {
      body.css('padding-top', nav.outerHeight() + 'px');
      body.addClass('fixed-nav');
    } else {
      body.css('padding-top', 0);
      body.removeClass('fixed-nav');
    }
  });

  $('#navigation li a').click(function (event) {
    event.preventDefault();
    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;
    $('html, body').animate({ scrollTop: targetPosition - 50 }, 'slow');
  });

  // Skills - Owl Carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      },
    },
  })

  var skillsTopOffset = $('.skills-section').offset().top;
  var statsTopOffset = $('.stats-section').offset().top;
  var countUpFinished = false;

  $(window).scroll(function () {
    // Skills - Easy Pie Chart
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(function () {
        $('.chart').easyPieChart({
          easing: 'easeInOut',
          barColor: '#fff',
          trackColor: false,
          scaleLength: 0,
          lineWidth: 4,
          size: 152,
          onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          }
        });
      });
    }

    // Stats - Count Up
    if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
      $('.counter').each(function () {
        var element = $(this);
        var endVal = parseInt(element.text());
        element.countup(endVal);
      });
      countUpFinished = true;
    }
  });

  // Portfolio - Isotope
  $('#filters a').click(function () {
    $('#filters .current').removeClass('current');
    $(this).addClass('current');

    var filter = $(this).attr('data-filter');
    $('.items').isotope({
      filter: filter,
      animatiionOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false,
      },
    });
    return false;
  });

  // Portfolio - Fancy Box
  $('[data-fancybox]').fancybox();

});
