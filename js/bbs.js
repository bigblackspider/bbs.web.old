/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


$(document).ready(function () {

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
    /*$("h1").fitText(
     1.2, {
     minFontSize: '20px',
     maxFontSize: '50px'
     }
     );*/

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


