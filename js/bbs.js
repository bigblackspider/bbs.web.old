/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
//todo We need to rework this! Look at moving to Controller.  Do we need a plugin??


$(document).ready(function () {
    //********************
    //*  Global Namespace
    //********************

    //********** String Formatter
    if (!String.prototype.format) {
        String.prototype.format = function () {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != 'undefined'
                    ? args[number]
                    : match
                    ;
            });
        };
    }

    //******************
    //*  BBS Namespace
    //******************
    var bbs = function () {
        //todo Create bbs global namespace with function to do init on child functions
    }
});

(function ($) {
    "use strict"; // Start of use strict

    //***********  Page Scroll Control
    setTimeout(function(){
        $('a.page-scroll').bind('click', function (event) {
            //********** Init
            var $anchor = $(this);
            var $target = $($anchor.attr('href'));

            //********** Only show required pages
            $(".service").hide();
            $("section[id^="+ $anchor.attr('href').substring(1,6) + "]").show();

            //********** Scroll
            $('html, body').stop().animate({
                scrollTop: ($target.offset().top - 50)
            }, 1250, 'easeInOutExpo');

            //********** Final
            event.preventDefault();
        });
    }, 2000);
    $(".service").hide();

    //********** Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    //********** Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    //********** Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '20px',
            maxFontSize: '50px'
        }
    );

    //********** Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    //********** Initialize WOW.js Scrolling Animations
    new WOW().init();

//todo: Implement image drag drop
//********** File Upload
    /*(function($) {
     'use strict';

     var dropZone = document.getElementById('drop-zone');
     var uploadForm = document.getElementById('js-upload-form');

     var startUpload = function(files) {
     console.log(files)
     }

     uploadForm.addEventListener('submit', function(e) {
     var uploadFiles = document.getElementById('js-upload-files').files;
     e.preventDefault()

     startUpload(uploadFiles)
     })

     dropZone.ondrop = function(e) {
     e.preventDefault();
     this.className = 'upload-drop-zone';

     startUpload(e.dataTransfer.files)
     }

     dropZone.ondragover = function() {
     this.className = 'upload-drop-zone drop';
     return false;
     }

     dropZone.ondragleave = function() {
     this.className = 'upload-drop-zone';
     return false;
     }
     */

}(jQuery));


