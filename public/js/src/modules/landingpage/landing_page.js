define(['js/src/common/popular_quotes.js'], function (popularQuotes) {

    'use strict';
    function landing_page() {
        
        var pq;
        
        this.init = function () {
            pq = new popularQuotes;
            if (pq) {
                pq.displayQuote();
                
                /*action for next quote*/
                $('#nextQuoteButton').click( function () {
                    pq.displayQuote();
                });
            }
        };
    }

    return landing_page;
});