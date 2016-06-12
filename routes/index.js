var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/:date', function (req, res) {
	var numbers = /^[0-9]*$/;
	var date;
	if (numbers.test(req.params.date)){
		date = moment.unix(req.params.date, "X");
	}

	else {
		date = moment(req.params.date, "MMMM D, YYYY");

	}

	if (date.isValid()){
		res.send(JSON.stringify({
			unix: date.format("X"),
			natural: date.format("MMMM D, YYYY")
		}));
	}
	else {
		res.send(JSON.stringify({
			unix: null,
			natural: null
		}));
	}
});

module.exports = router;
