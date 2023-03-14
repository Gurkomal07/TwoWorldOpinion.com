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

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\nconsole.log('Settings js loaded');\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Your web app's Firebase configuration\r\n// Your web app's Firebase configuration\r\n\r\nconst firebaseConfig = {\r\n\tapiKey: \"AIzaSyDs8lcJfdBO2xahG9qRHfQxbZlM_WdEZvw\",\r\n\tauthDomain: \"world2opinion.firebaseapp.com\",\r\n\tdatabaseURL: \"https://world2opinion-default-rtdb.firebaseio.com\",\r\n\tprojectId: \"world2opinion\",\r\n\tstorageBucket: \"world2opinion.appspot.com\",\r\n\tmessagingSenderId: \"872516887044\",\r\n\tappId: \"1:872516887044:web:d2e3e426362b0d47dc8b51\",\r\n\tmeasurementId: \"G-0KNC73MJ16\"\r\n  };\r\n  // Initialize Firebase\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\r\n// geting the firestore database\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\r\n// getting signed user credentials\r\nlet signInEmail;\r\nconst colRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"Users\")\r\n\r\n\r\nlet Name;\r\nlet UserName;\r\nlet ProfilePic;\r\nlet UserId;\r\nlet Age;\r\nlet City;\r\nlet postalCode;\r\nlet Gender;\r\n\r\n\r\n\r\nauth.onAuthStateChanged(function (user) {\r\n\tif (user) {\r\n\t  console.log(\"user id\")\r\n\t  console.log(auth.currentUser.email)\r\n\t  signInEmail = auth.currentUser.email\r\n  \r\n\t} else {\r\n\t  console.log('No user is signed in.')\r\n\t}\r\n\r\n\r\n    const getCurrentUser = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(colRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"Email\", \"==\", signInEmail))\r\n\r\n\r\n\tconst getCurrentUserData = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(getCurrentUser)\r\n\r\n    getCurrentUserData.then((data) => {\r\n\t\tconst response =\r\n\t\t\tdata.docs.map(d => ({ id: d.id, ...d.data() }))\r\n\t\tresponse.map(results => {\r\n\t\t\tconsole.log(\"results\")\r\n\t\t\tconsole.log(results)\r\n            console.log(results.FullName);\r\n\r\n\t\t\tName = results.FullName;\r\n\t\t\tUserName = results.UserName;\r\n\t\t\tAge=results.Age;\r\n\t\t\tCity=results.City;\r\n\t\t\tpostalCode=results.PostalCode;\r\n\t\t\tGender=results.Gender;\r\n\t\t\tProfilePic = results.ProfilePic\r\n\t\t\tUserId = results.id\r\n\r\n\t\t\tconsole.log(ProfilePic)\r\n\r\n\t\t\tvar fname = document.querySelector(\".s-fullName\");\r\n\t\t\tvar uname = document.querySelector(\".s-username\");\r\n\t\t\tvar age = document.querySelector(\".s-Age\");\r\n\t\t\tvar city = document.querySelector(\".City\");\r\n\t\t\tvar postal_code = document.querySelector(\".postalCode\");\r\n\t\t\tvar profile= document.querySelector(\".s-profile-photo\");\r\n\t\t\tvar gender = document.querySelector(\".r-dropdown\")\r\n\r\n\t\t\tprofile.src=ProfilePic;\t\t\t\r\n\r\n\t\t\tfname.placeholder=Name;\r\n\t\t\tfname.value=Name;\r\n\t\t\tuname.placeholder=UserName;\r\n\t\t\tuname.value=UserName;\r\n\r\n\t\t\tage.value=Age;\r\n\t\t\tcity.value=City;\r\n\t\t\tpostal_code.value=postalCode;\r\n\t\t\tgender.value=Gender;\r\n\r\n\r\n\t\t\tconsole.log(fname.placeholder);\r\n\t\t\t\r\n\t\t});\r\n\r\n\t})\r\n\r\n\r\n});\r\n\r\n\r\nconst profileEditForm = document.querySelector('.s-form')\r\nconsole.log(profileEditForm)\r\n\r\nprofileEditForm.addEventListener('submit', (event) => {\r\n\tevent.preventDefault()\r\n\r\n\t\r\n\t\r\n\tconst docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(colRef, UserId);\r\n\tconsole.log('submit button clicked')\r\n\r\n\r\n\t;(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(docRef, {\r\n\t\tUserName: profileEditForm.username.value,\r\n\t\tFullName: profileEditForm.fullName.value,\r\n\t\tAge: profileEditForm.age.value,\r\n\t\tCity: profileEditForm.City.value, \r\n\t\tpostalCode: profileEditForm.postalCode.value,\r\n\t\tGender: profileEditForm.gender.value\r\n\t  })\r\n\t  .then(() => {\r\n\t\tconsole.log(\"Profile updated successfully!\");\r\n\t  })\r\n\t  .catch((error) => {\r\n\t\tconsole.error(\"Error updating Profile: \", error);\r\n\t  });\r\n\r\n})\r\n\r\n\r\nconst deletebutton = document.querySelector('.s-delete-button');\r\n\r\ndeletebutton.addEventListener('click', function() {\r\n\t// code to run when the button is clicked\r\n\tconsole.log('delete button is clicked')\r\n\r\n\t\r\n\r\n\tauth.currentUser.delete().then(function() {\r\n\t\t// User deleted successfully\r\n\t\tconsole.log('user deleted successfully')\r\n\t\twindow.location.href = '/Firebase_Login/dist';\r\n\t\r\n\t  }).catch(function(error) {\r\n\t\t// An error occurred while deleting the user\r\n\t\tconsole.log(error.message)\r\n\t  });\r\n\t\r\n\r\n\r\n  });\r\n\r\nconst logoutbutton = document.querySelector('.s-logout-button');\r\n\r\nlogoutbutton.addEventListener('click', function() {\r\n\t// code to run when the button is clicked\r\n\tconsole.log('logout button is clicked')\r\n\t// auth.signOut()\r\n\r\n\tauth.signOut().then(() => {\r\n\t\t// Sign-out successful.\r\n\t\tconsole.log(\"the user is log out!!\")\r\n\t\twindow.location.href = '/Firebase_Login/dist';\r\n\r\n\t  }).catch((error) => {\r\n\t\t// An error happened.\r\n\t\tconsole.log(error.message);\r\n\t  });\r\n\r\n  });\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://firebase_login/./src/settings.js?");

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
/******/ 			"settings": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("./src/settings.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;