/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin.js":
/*!**********************!*\
  !*** ./src/admin.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n// importing the firebase\r\n\r\n\r\n\r\n// import { Button } from \"bootstrap\";\r\n\r\n// Your web app's Firebase configuration\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyDs8lcJfdBO2xahG9qRHfQxbZlM_WdEZvw\",\r\n  authDomain: \"world2opinion.firebaseapp.com\",\r\n  databaseURL: \"https://world2opinion-default-rtdb.firebaseio.com\",\r\n  projectId: \"world2opinion\",\r\n  storageBucket: \"world2opinion.appspot.com\",\r\n  messagingSenderId: \"872516887044\",\r\n  appId: \"1:872516887044:web:d2e3e426362b0d47dc8b51\",\r\n  measurementId: \"G-0KNC73MJ16\"\r\n};\r\n\r\n// Initialize Firebase\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n\r\n// initialize authorization\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\r\n// geting the firestore database\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\r\n\r\n// getting a table of users to input data\r\n\r\nconst colRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"Users\");\r\nlet Name;\r\nlet Id;\r\nlet email;\r\nlet password;\r\nlet gender;\r\nlet postalCode;\r\nlet city;\r\nlet age;\r\nlet username;\r\nlet moveTouser;\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(colRef).then((data) => {\r\n  const data1 = data.docs.map((d) => ({ id: d.id, ...d.data() }));\r\n  data1.map((e) => {\r\n    console.log(\"e\");\r\n    console.log(e);\r\n\r\n    Name = e.FullName;\r\n    Id = e.id;\r\n    username = e.UserName;\r\n    email = e.Email;\r\n    password = e.Password;\r\n    gender = e.Gender;\r\n    postalCode = e.PostalCode;\r\n    city = e.City;\r\n    age = e.Age;\r\n    //moveTouser = e.id;\r\n    console.log(e.id);\r\n    for (var Key in data1) {\r\n      var row = document.createElement(\"tr\");\r\n\r\n      const pbutton = document.createElement(\"img\");\r\n      pbutton.src = e.ProfilePic;\r\n      //pbutton.innerHTML = \"Profile\";\r\n\r\n      // console.log(e.UserId);\r\n      pbutton.addEventListener(\"click\", () => {\r\n        //console.log(e);\r\n\r\n        console.log(\"e.target\");\r\n        moveTouser = e.id;\r\n        console.log(e.id);\r\n\r\n        window.location.href =\r\n          \"../dist/redirectToProfile.html?moveTouser=\" +\r\n          encodeURIComponent(moveTouser);\r\n      });\r\n      row.appendChild(pbutton);\r\n\r\n      // var nameCell = document.createElement('td');\r\n      // nameCell.innerHTML = Name\r\n      // row.appendChild(nameCell);\r\n\r\n      var usercell = document.createElement(\"td\");\r\n      usercell.innerHTML = username;\r\n      row.appendChild(usercell);\r\n\r\n      // const detailCard = document.querySelector('.a-detail-card');\r\n      // const detailButtons = document.querySelectorAll('button);\r\n      const button = document.createElement(\"button\");\r\n\r\n      button.name = Name;\r\n      button.Id = Id;\r\n      button.email = email;\r\n      button.password = password;\r\n      button.gender = gender;\r\n      button.postalCode = postalCode;\r\n      button.city = city;\r\n      button.age = age;\r\n      button.innerHTML = \"Details\";\r\n\r\n      button.addEventListener(\"click\", async () => {\r\n        var fullname = document.querySelector(\".a-FullName\");\r\n        fullname.innerHTML = `${button.name}`;\r\n        row.appendChild(fullname);\r\n\r\n        var Id = document.querySelector(\".a-Id\");\r\n        Id.innerHTML = `${button.Id}`;\r\n        row.appendChild(Id);\r\n\r\n        var email = document.querySelector(\".a-email\");\r\n        email.innerHTML = `${button.email}`;\r\n        row.appendChild(email);\r\n\r\n        var password = document.querySelector(\".a-Password\");\r\n        password.innerHTML = `${button.password}`;\r\n        row.appendChild(password);\r\n\r\n        var gender = document.querySelector(\".a-Gender\");\r\n        gender.innerHTML = `${button.gender}`;\r\n        row.appendChild(gender);\r\n\r\n        var postalCode = document.querySelector(\".a-PostalCode\");\r\n        postalCode.innerHTML = `${button.postalCode}`;\r\n        row.appendChild(postalCode);\r\n\r\n        var city = document.querySelector(\".a-City\");\r\n        city.innerHTML = `${button.city}`;\r\n        row.appendChild(city);\r\n\r\n        var age = document.querySelector(\".a-Age\");\r\n        age.innerHTML = `${button.age}`;\r\n        row.appendChild(age);\r\n      });\r\n\r\n      row.appendChild(button);\r\n    }\r\n    document.getElementById(\"table-body\").appendChild(row);\r\n  });\r\n});\r\n\r\n// accessing the registration form\r\nconst registertrationForm = document.querySelector(\".r-form\");\r\n\r\nvar menuLink = document.getElementById(\"a-menu-link\");\r\nvar submenu = document.querySelector(\".a-submenu\");\r\n\r\nmenuLink.addEventListener(\"click\", function (event) {\r\n  event.preventDefault();\r\n  submenu.style.display = \"block\";\r\n});\r\n\r\nconst logout = document.querySelector(\".logout\");\r\nlogout.addEventListener(\"click\", () => {\r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(auth)\r\n    .then(() => {\r\n      console.log(\"the user is log out!!\");\r\n    })\r\n    .catch((err) => {\r\n      console.log(err.message);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://firebase_login/./src/admin.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"admin": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfirebase_login"] = self["webpackChunkfirebase_login"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("./src/admin.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;