var express = require('express');
var path = require('path');
var router = express.Router();
var querystring = require('querystring');


/*Roght now quptes are read from a json file
 * TODO: need to integrate a DB and read quotes from the D.B*/
var quotesloaded=false;
var popularQuotes=[];
var numOfQuotes=0;


function loadQuotes()
{
	if(quotesloaded==false) {
		/*Load quotes, if they are not loaded*/
		console.log('DBG: Quotes not loaded, loading now...' );
		var pq = require(path.join(__dirname + '/data/quotes'));
		for(i in pq) {
			/*console.log('DBG: Name of Quote is: ' + pq[i].name);*/
			popularQuotes.push(pq[i]);
			numOfQuotes++;
		}
		quotesloaded=true;
	}
}


router.get('/', function(req, res, next) {
	res.sendStatus(404);
});


router.get('/getNumberOfQuotes', function(req, res, next) {

	loadQuotes();
	res.sendStatus(numOfQuotes);
});

router.get('/getNextQuote/:index', function(req, res, next) {

	var str;
	var id = req.params.index;
	loadQuotes();

	console.log('DBG: numOfQuotes is: ' + numOfQuotes);
	console.log('DBG: index is: ' + id);

//	if(id < numOfQuotes) {
	if(1) {
		console.log('DBG: GOPI');
		str = JSON.stringify(popularQuotes[id]);
	} else {
		console.log('DBG: RAVI');
		str = 404;
	}
	res.sendStatus(str);
});

module.exports = router;
