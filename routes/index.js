var express = require('express');

var router = express.Router();
var Bluebird = require('bluebird')

var models = require('../models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Place = models.Place;
var Activity = models.Activity;

router.get('/', function (req, res, next){
	Bluebird.all([
		Hotel.find({}),
		Restuarant.find({}),
		Activity.find({}),
		Place.find({}),

	])
	.spread(function(hotels, restaurants, activities){

	})
	res.send('hi')


})

router.get('/trip', function (req, res, next){
	res.send({message:'hi'})

})


module.exports = router;
