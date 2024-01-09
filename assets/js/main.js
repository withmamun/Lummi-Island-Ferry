(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        //------------ Offcanvas -------------

        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');

        });


        //------------ Gallery slider -------------

        $('.gallery__main__slider').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            navText: ['<i class="far fa-arrow-left"></i>', '<i class="far fa-arrow-right"></i>'],
            dot: false,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 40,
                    margin: 10,
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })





    }); //---document-ready-----





}(jQuery));