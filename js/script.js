/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  "use strict";

  // PRELOADER
  $(window).on("load", function () {
    $("#page-loader").fadeOut("slow", function () {
      $(this).remove();
    });
  });

  // navbarDropdown
  if ($(window).width() < 992) {
    $(".has-dropdown .dropdown-toggle").on("click", function () {
      $(this).siblings(".dropdown-menu").animate(
        {
          height: "toggle",
        },
        300,
      );
    });
  }

  // SCROLL TO TOP
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 70) {
      $(".scroll-to-top").addClass("reveal");
    } else {
      $(".scroll-to-top").removeClass("reveal");
    }
  });

  // Fixed header
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 70) {
      $(".site-navigation,.trans-navigation").addClass("header-white");
    } else {
      $(".site-navigation,.trans-navigation").removeClass("header-white");
    }
  });

  // scroll-to-top
  if ($("#scroll-to-top").length) {
    $("#scroll-to-top").on("click", function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        600,
      );
      return false;
    });
  }

  $(".slick-carousel").slick({
    dots: true, // Add navigation dots
    arrows: false,
    autoplay: false,
    customPaging: function (slider, i) {
      return (
        '<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="29" viewBox="0 0 17 29" fill="none">\n' +
        '<g clip-path="url(#clip0_276_21)">\n' +
        '<path d="M6.17851 4.75328C6.18482 4.74674 6.19325 4.73804 6.20386 4.72724C6.23049 4.70014 6.27172 4.65897 6.32747 4.6058C6.43901 4.49941 6.60904 4.34464 6.83673 4.15839C7.29232 3.78572 7.97779 3.28786 8.88679 2.79931C10.5851 1.88654 13.0654 1.00497 16.2944 1.03368L12.9041 10.3946L4.27029 15.8724C4.27025 15.8725 4.27021 15.8725 4.27017 15.8725C4.26508 15.8757 4.26278 15.8758 4.26222 15.8759L4.26216 15.8759C4.26075 15.876 4.25792 15.8758 4.25423 15.8742C4.25054 15.8727 4.24775 15.8704 4.24599 15.8684C4.24481 15.867 4.24253 15.864 4.24087 15.8564L4.24056 15.855C3.8162 13.9416 3.06219 8.68177 6.17851 4.75328Z" stroke="#30AB89"/>\n' +
        '<path d="M12.7591 13.2139L12.7594 13.2153C13.1839 15.1293 13.9382 20.3912 10.8192 24.32C10.8134 24.3261 10.8053 24.3346 10.7947 24.3454C10.7685 24.3723 10.7275 24.4135 10.6718 24.4668C10.5605 24.5734 10.3906 24.7284 10.163 24.9149C9.70759 25.2881 9.02232 25.7864 8.11363 26.2752C6.4149 27.189 3.9337 28.0711 0.704001 28.0412L4.09593 18.6757L12.7297 13.1979C12.7298 13.1979 12.7298 13.1979 12.7299 13.1978C12.7349 13.1947 12.7372 13.1945 12.7378 13.1945L12.7378 13.1945C12.7393 13.1944 12.7421 13.1946 12.7458 13.1961C12.7495 13.1977 12.7523 13.1999 12.754 13.202C12.7552 13.2034 12.7575 13.2064 12.7591 13.2139Z" stroke="#187F5F"/>\n' +
        "</g>\n" +
        "<defs>\n" +
        '<clipPath id="clip0_276_21">\n' +
        '<rect width="17" height="28" fill="white" transform="translate(0 0.535187)"/>\n' +
        "</clipPath>\n" +
        "</defs>\n" +
        '</svg><svg xmlns="http://www.w3.org/2000/svg" width="17" height="29" viewBox="0 0 17 29" fill="none">\n' +
        '<g clip-path="url(#clip0_276_24)">\n' +
        '<path d="M17 0.55361L13.3161 10.7254L4.5376 16.295C4.23175 16.4885 3.83003 16.318 3.75242 15.9633C3.32331 14.0284 2.51531 8.54637 5.8021 4.4233C5.8021 4.42791 9.66408 0.203494 17 0.55361Z" fill="#30AB89"/>\n' +
        '<path d="M0 28.5168L3.68394 18.345L12.4624 12.7754C12.7683 12.5819 13.17 12.7524 13.2476 13.1071C13.6767 15.0419 14.4847 20.524 11.1979 24.6471C11.1979 24.6471 7.33593 28.8715 0.00456498 28.5214L0 28.5168Z" fill="#187F5F"/>\n' +
        "</g>\n" +
        "<defs>\n" +
        '<clipPath id="clip0_276_24">\n' +
        '<rect width="17" height="28" fill="white" transform="translate(0 0.535187)"/>\n' +
        "</clipPath>\n" +
        "</defs>\n" +
        "</svg></a>"
      );
    },
    // Hide default arrows
    // Add other options and settings here
  });

  $(".testimonals-slider").slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    // customPaging: function (slider, i) {
    //   return (
    //     '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="29" viewBox="0 0 17 29" fill="none">\n' +
    //     '<g clip-path="url(#clip0_276_21)">\n' +
    //     '<path d="M6.17851 4.75328C6.18482 4.74674 6.19325 4.73804 6.20386 4.72724C6.23049 4.70014 6.27172 4.65897 6.32747 4.6058C6.43901 4.49941 6.60904 4.34464 6.83673 4.15839C7.29232 3.78572 7.97779 3.28786 8.88679 2.79931C10.5851 1.88654 13.0654 1.00497 16.2944 1.03368L12.9041 10.3946L4.27029 15.8724C4.27025 15.8725 4.27021 15.8725 4.27017 15.8725C4.26508 15.8757 4.26278 15.8758 4.26222 15.8759L4.26216 15.8759C4.26075 15.876 4.25792 15.8758 4.25423 15.8742C4.25054 15.8727 4.24775 15.8704 4.24599 15.8684C4.24481 15.867 4.24253 15.864 4.24087 15.8564L4.24056 15.855C3.8162 13.9416 3.06219 8.68177 6.17851 4.75328Z" stroke="#30AB89"/>\n' +
    //     '<path d="M12.7591 13.2139L12.7594 13.2153C13.1839 15.1293 13.9382 20.3912 10.8192 24.32C10.8134 24.3261 10.8053 24.3346 10.7947 24.3454C10.7685 24.3723 10.7275 24.4135 10.6718 24.4668C10.5605 24.5734 10.3906 24.7284 10.163 24.9149C9.70759 25.2881 9.02232 25.7864 8.11363 26.2752C6.4149 27.189 3.9337 28.0711 0.704001 28.0412L4.09593 18.6757L12.7297 13.1979C12.7298 13.1979 12.7298 13.1979 12.7299 13.1978C12.7349 13.1947 12.7372 13.1945 12.7378 13.1945L12.7378 13.1945C12.7393 13.1944 12.7421 13.1946 12.7458 13.1961C12.7495 13.1977 12.7523 13.1999 12.754 13.202C12.7552 13.2034 12.7575 13.2064 12.7591 13.2139Z" stroke="#187F5F"/>\n' +
    //     "</g>\n" +
    //     "<defs>\n" +
    //     '<clipPath id="clip0_276_21">\n' +
    //     '<rect width="17" height="28" fill="white" transform="translate(0 0.535187)"/>\n' +
    //     "</clipPath>\n" +
    //     "</defs>\n" +
    //     '</svg><svg xmlns="http://www.w3.org/2000/svg" width="17" height="29" viewBox="0 0 17 29" fill="none">\n' +
    //     '<g clip-path="url(#clip0_276_24)">\n' +
    //     '<path d="M17 0.55361L13.3161 10.7254L4.5376 16.295C4.23175 16.4885 3.83003 16.318 3.75242 15.9633C3.32331 14.0284 2.51531 8.54637 5.8021 4.4233C5.8021 4.42791 9.66408 0.203494 17 0.55361Z" fill="#30AB89"/>\n' +
    //     '<path d="M0 28.5168L3.68394 18.345L12.4624 12.7754C12.7683 12.5819 13.17 12.7524 13.2476 13.1071C13.6767 15.0419 14.4847 20.524 11.1979 24.6471C11.1979 24.6471 7.33593 28.8715 0.00456498 28.5214L0 28.5168Z" fill="#187F5F"/>\n' +
    //     "</g>\n" +
    //     "<defs>\n" +
    //     '<clipPath id="clip0_276_24">\n' +
    //     '<rect width="17" height="28" fill="white" transform="translate(0 0.535187)"/>\n' +
    //     "</clipPath>\n" +
    //     "</defs>\n" +
    //     "</svg>"
    //   );
    // },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".testimonial-next").click(function () {
    $(".testimonals-slider").slick("slickNext");
  });
  $(".testimonial-prev").click(function () {
    $(".testimonals-slider").slick("slickPrev");
  });
  $(".technology-slider").slick({
    slidesToShow: 5,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: $(".technology-prev"),
    nextArrow: $(".technology-next"),
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $(".technology-next").click(function () {
    $(".technology-slider").slick("slickNext");
  });
  $(".technology-prev").click(function () {
    $(".technology-slider").slick("slickPrev");
  });

  $(".blogs-slider").slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 30000,
    dots: false,
    arrows: false,
    // adaptiveHeight: true,
    // customPaging: function (slider, i) {
    //   return (
    //     '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="29" viewBox="0 0 17 29" fill="none">\n' +
    //     '<g clip-path="url(#clip0_276_21)">\n' +
    //     '<path d="M6.17851 4.75328C6.18482 4.74674 6.19325 4.73804 6.20386 4.72724C6.23049 4.70014 6.27172 4.65897 6.32747 4.6058C6.43901 4.49941 6.60904 4.34464 6.83673 4.15839C7.29232 3.78572 7.97779 3.28786 8.88679 2.79931C10.5851 1.88654 13.0654 1.00497 16.2944 1.03368L12.9041 10.3946L4.27029 15.8724C4.27025 15.8725 4.27021 15.8725 4.27017 15.8725C4.26508 15.8757 4.26278 15.8758 4.26222 15.8759L4.26216 15.8759C4.26075 15.876 4.25792 15.8758 4.25423 15.8742C4.25054 15.8727 4.24775 15.8704 4.24599 15.8684C4.24481 15.867 4.24253 15.864 4.24087 15.8564L4.24056 15.855C3.8162 13.9416 3.06219 8.68177 6.17851 4.75328Z" stroke="#30AB89"/>\n' +
    //     '<path d="M12.7591 13.2139L12.7594 13.2153C13.1839 15.1293 13.9382 20.3912 10.8192 24.32C10.8134 24.3261 10.8053 24.3346 10.7947 24.3454C10.7685 24.3723 10.7275 24.4135 10.6718 24.4668C10.5605 24.5734 10.3906 24.7284 10.163 24.9149C9.70759 25.2881 9.02232 25.7864 8.11363 26.2752C6.4149 27.189 3.9337 28.0711 0.704001 28.0412L4.09593 18.6757L12.7297 13.1979C12.7298 13.1979 12.7298 13.1979 12.7299 13.1978C12.7349 13.1947 12.7372 13.1945 12.7378 13.1945L12.7378 13.1945C12.7393 13.1944 12.7421 13.1946 12.7458 13.1961C12.7495 13.1977 12.7523 13.1999 12.754 13.202C12.7552 13.2034 12.7575 13.2064 12.7591 13.2139Z" stroke="#187F5F"/>\n' +
    //     "</g>\n" +
    //     "<defs>\n" +
    //     '<clipPath id="clip0_276_21">\n' +
    //     '<rect width="17" height="28" fill="white" transform="translate(0 0.535187)"/>\n' +
    //     "</clipPath>\n" +
    //     "</defs>\n" +
    //     '</svg><svg xmlns="http://www.w3.org/2000/svg" width="17" height="29" viewBox="0 0 17 29" fill="none">\n' +
    //     '<g clip-path="url(#clip0_276_24)">\n' +
    //     '<path d="M17 0.55361L13.3161 10.7254L4.5376 16.295C4.23175 16.4885 3.83003 16.318 3.75242 15.9633C3.32331 14.0284 2.51531 8.54637 5.8021 4.4233C5.8021 4.42791 9.66408 0.203494 17 0.55361Z" fill="#30AB89"/>\n' +
    //     '<path d="M0 28.5168L3.68394 18.345L12.4624 12.7754C12.7683 12.5819 13.17 12.7524 13.2476 13.1071C13.6767 15.0419 14.4847 20.524 11.1979 24.6471C11.1979 24.6471 7.33593 28.8715 0.00456498 28.5214L0 28.5168Z" fill="#187F5F"/>\n' +
    //     "</g>\n" +
    //     "<defs>\n" +
    //     '<clipPath id="clip0_276_24">\n' +
    //     '<rect width="17" height="28" fill="white" transform="translate(0 0.535187)"/>\n' +
    //     "</clipPath>\n" +
    //     "</defs>\n" +
    //     "</svg>"
    //   );
    // },
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 991,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  });
  $(".blogs-slider-next").click(function () {
    $(".blogs-slider").slick("slickNext");
  });
  $(".blogs-slider-prev").click(function () {
    $(".blogs-slider").slick("slickPrev");
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").on("click", function (event) {
    $(".navbar-collapse").collapse("hide");
  });
})(jQuery);
