// zipcodes module.  Install with: npm install zipcodes
var zipcodes = require('zipcodes');
// forecast module.  Install with: npm install forecast
var Forecast = require('forecast');
var express = require('express');

var app = express();
app.listen(3000, function(err) {
	console.log('Listening at http://localhost:3000');
});

// Create a forecast object
var forecast = new Forecast({
	service: 'darksky',
	key: '5b2a502a3e9cce8715fcebc3343372e0',
	units: 'f'
});

app.get('/zipcode/:zipcode', function(req,res) {
	var location = zipcodes.lookup(req.params.zipcode);
	res.json(location);
});

app.get('/weather/:zipcode', function(req,res) {
	var promise = getWeatherForZipcode(req.params.zipcode);
	promise.then(function(weather) {
		res.json(weather);
	});
});

app.get('/summary/:zipcode', function(req,res) {
	var promise = getWeatherForZipcode(req.params.zipcode);
	promise.then(function(weather) {
		var html = '<h1>It is currently ';
		html += Math.round(weather.currently.temperature);
		html += ' and '
		html += weather.currently.summary;
		html += '</h1>'
		res.send(html);
	});
});



function getWeatherForZipcode(zipcode) {
	var location = zipcodes.lookup(zipcode);
	var coords = [location.latitude, location.longitude];

	return new Promise(function(resolve,reject) {
		forecast.get(coords, function(err,weather) {
			if(err) return reject(err);
			resolve(weather);
		});
	});
}
