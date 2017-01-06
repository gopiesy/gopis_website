define([
    'js/libs/jquery.min.js',
    'js/src/modules/landingpage/landing_page.js',
    'js/src/modules/contact/contact.js'], function (JQ, LandingPage, Contact) {

    'use strict';
    function load_template() {

        /*Load template to HTML*/
        $("#content").load("html/template.html", null, function () {
            
            /*Create landingPage and initialize it*/
            var lp = new LandingPage;
            if (lp) {
                lp.init();
            }
        });
    }
    
    function main() {

        $(document).ready(function () {
            
            /*First start with loading the template*/
            load_template();
        });
    }

    main();
});