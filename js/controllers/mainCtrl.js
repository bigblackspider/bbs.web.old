/**
 * Created by Peter on 21/10/2015.
 */
(function () {

    var app = angular.module('BBSApp', []);

    //*************************************
    //*  This hook will bind scroll events
    //*  on every sub page load
    //*************************************
    app.run(function ($rootScope) {
        $rootScope.$on("$includeContentLoaded", function (event, templateName) {
            //********** A page has loaded then search for every page-scroll class
            $('a.page-scroll').each(
                function () {

                    $(this).bind('click', function (event) {
                        //!********** Init
                        var $anchor = $(this);
                        var $target = $($anchor.attr('href'));

                        //!********** Only show required pages
                        $(".service").hide();
                        $("section[id^=" + $anchor.attr('href').substring(1, 6) + "]").show();

                        //!********** Scroll
                        $('html, body').stop().animate({
                            scrollTop: ($target.offset().top - 50)
                        }, 1250, 'easeInOutExpo');

                        //!********** Final
                        event.preventDefault();
                    });
                }
            )
        })
    });
}())



