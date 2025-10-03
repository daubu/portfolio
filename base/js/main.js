(function ($) {
    "use strict";

   
    $(window).on('load', function() {

        /*===================================================================================*/
        /*  website loader js
        /*===================================================================================*/
        setTimeout(function(){
            $('.loading').fadeOut('slow');
        }, 900);

    });



    $(document).ready(function() {
        /* Smooth Scrool */
        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        });

        /*===================================================================================*/
        /*  accordion-menu script
        /*===================================================================================*/
        $(".toggle-menu").on('click', function(){
            if ($(this).hasClass('menu-open')) {
                $(this).removeClass('menu-open').next('.toggle-menu-inner').slideUp(900);
                $(this).parents('.toggle-menu-item').removeClass('toggle-active');
            }else {
                $(this).parents('.toggle-menu-area').find('.toggle-menu').removeClass('menu-open');
                $(this).parents('.toggle-menu-area').find('.toggle-menu-inner').slideUp(900);
                $(this).addClass('menu-open').next('.toggle-menu-inner').slideDown(900);
            }
        });

        /*===================================================================================*/
        /*  mixitup projects filter
        /*===================================================================================*/
        $(document).on('click', '.filter-list button', function() {
            $(".filter-list button").removeClass('current-filter');
            $(this).addClass('current-filter');
        });

        if ($('.project-items').length > 0) {
            var containerEl = document.querySelector('.project-items');
            var mixer = mixitup(containerEl, {
                animation: {
                    duration: 500,
                    effects: 'fade translateX(100%)',
                    easing: 'ease-in-out'
                },
                selectors: {
                    target: '.project-box',
                    control: 'button.filter'
                }
            });
        }
    });

})(jQuery);