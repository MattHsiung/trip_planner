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
  var myLatLng = {lat: 25.0333, lng: 121.6333 };
  var styles = [
    {"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},
    {"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},
    {"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},
    {"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},
    {"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},
    {"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},
    {"featureType":"administrative.province","stylers":[{"visibility":"off"}]},
    {"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},
    {"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffded2"},{"lightness":-5},{"saturation":-17}]}]

 var styledMap = new google.maps.StyledMapType(styles,
   {name: "Styled Map"});

  var map = new google.maps.Map(document.getElementById('map'), {
    scrollwheel: false,
    zoom: 7,
    center: myLatLng
  });
  map.mapTypes.set('map_style', styledMap);
 map.setMapTypeId('map_style');

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}


// map.set('styles', [
//   {
//     featureType: 'road',
//     elementType: 'geometry',
//     stylers: [
//       { color: '#000000' },
//       { weight: 1.6 }
//     ]
//   }, {
//     featureType: 'road',
//     elementType: 'labels',
//     stylers: [
//       { saturation: -100 },
//       { invert_lightness: true }
//     ]
//   }, {
//     featureType: 'landscape',
//     elementType: 'geometry',
//     stylers: [
//       { hue: '#ffff00' },
//       { gamma: 1.4 },
//       { saturation: 82 },
//       { lightness: 96 }
//     ]
//   }, {
//     featureType: 'poi.school',
//     elementType: 'geometry',
//     stylers: [
//       { hue: '#fff700' },
//       { lightness: -15 },
//       { saturation: 99 }
//     ]
//   }
// ]);