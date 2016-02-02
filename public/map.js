var models = require('../models');
var Restaurant = models.Restaurant;
var Place = models.Place;
var Hotel = models.Hotel;
var Activity = models.Activity;




// function findLocation(name){
//     Hotel.findOne({'name':name}).exec().then(function(hotelInfo){
//         console.log (hotelInfo.place[0].location);
//     })
// }
// findLocation('Hotel 91');




function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    scrollwheel: false,
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}


map.set('styles', [
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      { color: '#000000' },
      { weight: 1.6 }
    ]
  }, {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      { saturation: -100 },
      { invert_lightness: true }
    ]
  }, {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      { hue: '#ffff00' },
      { gamma: 1.4 },
      { saturation: 82 },
      { lightness: 96 }
    ]
  }, {
    featureType: 'poi.school',
    elementType: 'geometry',
    stylers: [
      { hue: '#fff700' },
      { lightness: -15 },
      { saturation: 99 }
    ]
  }
]);