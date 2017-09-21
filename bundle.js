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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_script4_js__ = __webpack_require__(1);

console.log(__WEBPACK_IMPORTED_MODULE_0__scripts_script4_js__["a" /* default */]);

let result1;
let result2;

class User {
    constructor(
        userLocation,
        userPickup,
        userReturn,
        userCar,
        userCarimg,
        userFirstname,
        userLastname
    ) {
        userLocation == "" ? this.userLocation = 'Hoffman Etates' : this.userLocation = userLocation;
        userPickup == "" ? this.userPickup = '09/20/2017' : this.userPickup = userPickup;
        userReturn == "" ? this.userReturn = '09/25/2017' : this.userReturn = userReturn;
        userCar == "" ? this.userCar = 'Hyundai Elantra' : this.userCar = userCar;
        userCarimg == "" ? this.userCarimg = 'Images/HyundaiElantra.png' : this.userCarimg = userCarimg;
        this.userFirstname = userFirstname;
        this.userLastname = userLastname;
        this.userfullname = userFirstname + " " + userLastname;
    }

    get USERFULLNAME() {
        return (this.userfullname == " " ? this.userfullname = 'prathap naga' : this.userfullname = this.userfullname);
    }

    get USERLOCATION() {
        return this.userLocation.toUpperCase();
    }

    get USERPICKUP() {
        return this.userPickup;
    }
    get USERRETURN() {
        return this.userReturn;
    }
    get USERCAR() {
        return this.userCar;
    }
    get USERCARIMG() {
        return this.userCarimg;
    }
};

let user1 = new User(...__WEBPACK_IMPORTED_MODULE_0__scripts_script4_js__["a" /* default */]);
//console.log("User 1: ", user1);
//console.log("Full UserName: ", user1["USERFULLNAME"]);
console.log(__WEBPACK_IMPORTED_MODULE_0__scripts_script4_js__["a" /* default */]);


let userproxy = new Proxy(user1, {
    get(target, property) {
        return target[property].toUpperCase();
    }
})
//console.log("proxy user: ", userproxy.userfullname);

result1 = `<p>UserName:<span id="userfname">${userproxy.USERFULLNAME}</span></p><p>Location:<span>${user1.USERLOCATION}</span></p><p>Pickup Date:<span>${user1.USERPICKUP}</span></p><p>Return Date:<span>${user1.USERRETURN}</span></p>`

result2 = `<p>Car Model:<span>${user1.USERCAR}</span></p><div><img src="${user1.USERCARIMG}"></div>`

document.querySelector('.result1').innerHTML = result1;
document.querySelector('.result2').innerHTML = result2;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let displayData = document.querySelector('.result');

let userDetails4 = JSON.parse(localStorage.getItem('user2'));
console.log(userDetails4);

/* harmony default export */ __webpack_exports__["a"] = (userDetails4);


/***/ })
/******/ ]);