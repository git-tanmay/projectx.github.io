function initialize() {
  var mapOptions = {
    center: {
      lat: 18.5600114,
      lng: 73.7663066
    },
    zoom: 14,
    zoomControl: false,
    panControl: false,
    streetViewControl: false
  };
  
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
  var img = "https://i.stack.imgur.com/JWM0W.png";
  
  var Baner = new google.maps.Marker({
      position: mapOptions.center,
      map: map,
      icon: img
   });
  
  var Aundh = new google.maps.Marker({
      position: {lat: 18.5577191, lng: 73.7985838},
      map: map,
      icon: img
   });
  
  var Kothrud = new google.maps.Marker({
      position: {lat: 18.5073958, lng: 73.7871019},
      map: map,
      icon: img
   });
  
  var DeccanGym = new google.maps.Marker({
      position: {lat: 18.5165109, lng: 73.8283536},
      map: map,
      icon: img
   });
  
  var markers = {
    'Baner': Baner,
    'Aundh': Aundh,
    'Kothrud': Kothrud,
    'Deccan Gym': DeccanGym
  };
  
  var styles = [
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d3d3d3"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "color": "#808080"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b3b3b3"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "weight": 1.8
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d7d7d7"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ebebeb"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a7a7a7"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#efefef"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#696969"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#737373"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d6d6d6"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {},
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dadada"
            }
        ]
    }
];
  
  map.setOptions({styles: styles});
  
  function getCoords (position) {
     var text = position.replace(/[()]/g,'').split(", ");
     var lat = Number(text[0]);
     var lng = Number(text[1]);
    
     return {
       lat: lat,
       lng: lng
     };
  }
  
   $('.nav li').on('click', function () {
     $('.nav li').removeClass('active');
     $(this).addClass('active');
     var id = $(this).attr('id');
     $('#active').animate({
       'margin-left': $(this).offset().left
     });
     var position = String(markers[id].getPosition());
     map.panTo(new google.maps.LatLng(getCoords(position).lat, getCoords(position).lng));
   });
  
 }

 google.maps.event.addDomListener(window, 'load', initialize);