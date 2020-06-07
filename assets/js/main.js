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


    // Recent-work
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
                items: 3,
            },
            768: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    });


}(jQuery));