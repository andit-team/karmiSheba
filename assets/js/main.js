(function ($) {
    "use strict";

    jQuery(document).on('ready', function () {

        // Header Sticky
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 120) {

                $('.navbar-area-three').addClass("is-sticky-three");
                $('.navbar-area').addClass("is-sticky");
            } else {
                $('.navbar-area-three').removeClass("is-sticky-three");
                $('.navbar-area').removeClass("is-sticky");
            }
        });

        // Mean Menu
        jQuery('.mean-menu').meanmenu({
            meanScreenWidth: "991"
        });

    });

    // banner Typed Js

    $(function () {
        $(".typed").typed({
            strings: ["Software Development.", "App Development.", "Web Development."],
            stringsElement: null,
            typeSpeed: 90,
            startDelay: 900,
            backSpeed: 60,
            backDelay: 1000,
            loop: true,
            loopCount: 5,
            showCursor: false,
            cursorChar: "|",
            attr: null,
            contentType: 'html',
            callback: function () {},
            preStringTyped: function () {},
            onStringTyped: function () {},
            resetCallback: function () {}
        });
    });


    // Home-logo
    $('.logo-slider-wrapper').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 0,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 5,
            }
        }
    });

    // Clients Slider
    $('.client-slider-wrapper').owlCarousel({
        loop: true,
        dots: false,
        margin: 0,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        nav: true,
        navText: [

            "<i class='fas fa-arrow-left'></i>",
            "<i class='fas fa-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1200: {
                items: 2,
            }
        }
    });

    // Vedio-add
    $(document).ready(function () {
        $(".venobox").venobox({
            framewidth: "600px",
            frameheight: "400px",
            border: "none",
            bgcolor: "none",
            titleattr: "data-title",
            numeratio: true,
            infinigall: false,
        });
    });
}(jQuery));