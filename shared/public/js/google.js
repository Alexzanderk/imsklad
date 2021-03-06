/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 254);
/******/ })
/************************************************************************/
/******/ ({

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var googleMap = exports.googleMap = function () {
    'use strict';

    // When the window has finished loading create our google map below

    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        var mapOptions = {
            zoom: 15,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true,
            sensor: false,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(50.490527, 30.412927),
            styles: [{
                'featureType': 'all',
                'elementType': 'labels.text.fill',
                'stylers': [{
                    'color': '#ffffff'
                }]
            }, {
                'featureType': 'all',
                'elementType': 'labels.text.stroke',
                'stylers': [{
                    'visibility': 'simplified'
                }, {
                    'color': '#3e606f'
                }, {
                    'weight': 2
                }, {
                    'gamma': 0.84
                }]
            }, {
                'featureType': 'all',
                'elementType': 'labels.icon',
                'stylers': [{
                    'visibility': 'off'
                }]
            }, {
                'featureType': 'administrative',
                'elementType': 'geometry',
                'stylers': [{
                    'weight': 0.6
                }, {
                    'color': '#1a3541'
                }]
            }, {
                'featureType': 'landscape',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#242930'
                }]
            }, {
                'featureType': 'poi',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#181b23'
                }]
            }, {
                'featureType': 'poi.park',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#2c712c'
                }, {
                    'saturation': '-19'
                }, {
                    'lightness': '-57'
                }, {
                    'gamma': '1.01'
                }]
            }, {
                'featureType': 'road',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#f7cd78'
                }, {
                    'lightness': '-66'
                }, {
                    'saturation': '-32'
                }, {
                    'gamma': '1.78'
                }, {
                    'weight': '1.00'
                }]
            }, {
                'featureType': 'transit',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#06091a'
                }]
            }, {
                'featureType': 'water',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#393e51'
                }]
            }]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(50.490527, 30.412927),
            map: map,
            title: 'Snazzy!'
        });
    }
}();

/***/ })

/******/ });