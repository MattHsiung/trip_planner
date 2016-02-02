var express = require('express');

var router = express.Router();
var Bluebird = require('bluebird')

var models = require('../models');
var Restaurant = models.Restaurant;
var Place = models.Place;
var Hotel = models.Hotel;
var Activity = models.Activity;

router.get('/', function (req, res, next){

	 Bluebird.all([
	   Hotel.find({}),
	   Restaurant.find({}), 
	   Activity.find({})
	 ])
	 .spread(function(hotels, restaurants, activities){
	       res.render('index',{
	           hotels: hotels,
	           activities: activities,
	           restaurants:restaurants
	       })
	 	
	 })		
})

router.get('/map', function(req,res,next){
	res.render('map')

})

// router.use(function(req,res,next){
// 	var err = new Error('Not Found');
// 	err.status = 404;
// 	next(err);
// })

router.get('/trip', function (req, res, next){
	res.send({message:'hi'})

})


module.exports = router;
