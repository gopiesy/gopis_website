define(function (require) {
    'use strict';
    function popular_quotes() {
        
        var currentIndex = 0,
            quotes = require('js/src/common/sample_quotes.js');

        this.getNextQuote = function () {
            
            if (currentIndex >= quotes.count)
                currentIndex = 0;

            return quotes.quote[currentIndex++];
        };

        this.displayQuote = function () {

            /*Update Quotes*/
            var quote = this.getNextQuote();
            $('#quoteDetails').text(quote.detail);
            $('#quoteAuthor').text(quote.name);
        };
        
        this.defineNextQuoteAction = function () {
            $('#nextQuoteButton').click( function () {
                this.displayQuote();
            });
        };
    }

    return popular_quotes;
});