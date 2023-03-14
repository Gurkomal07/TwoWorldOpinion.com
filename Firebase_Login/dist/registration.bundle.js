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

/***/ "./src/registration.js":
/*!*****************************!*\
  !*** ./src/registration.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n// importing the firebase\r\n\r\n\r\n\r\n\r\n// Your web app's Firebase configuration\r\n\r\nconst firebaseConfig = {\r\n\tapiKey: \"AIzaSyDs8lcJfdBO2xahG9qRHfQxbZlM_WdEZvw\",\r\n\tauthDomain: \"world2opinion.firebaseapp.com\",\r\n\tdatabaseURL: \"https://world2opinion-default-rtdb.firebaseio.com\",\r\n\tprojectId: \"world2opinion\",\r\n\tstorageBucket: \"world2opinion.appspot.com\",\r\n\tmessagingSenderId: \"872516887044\",\r\n\tappId: \"1:872516887044:web:d2e3e426362b0d47dc8b51\",\r\n\tmeasurementId: \"G-0KNC73MJ16\"\r\n  };\r\n// Initialize Firebase\r\n(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n\r\n// initialize authorization\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\r\n// geting the firestore database\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\r\n\r\n// getting a table of users to input data\r\n\r\nconst colRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"Users\");\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(colRef).then((data) => {\r\n  const data1 = data.docs.map((d) => ({ id: d.id, ...d.data() }));\r\n  data1.map((e) => {\r\n    console.log(e);\r\n  });\r\n});\r\n\r\n// accessing the registration form\r\nconst registertrationForm = document.querySelector(\".r-form\");\r\nconsole.log(registertrationForm);\r\n\r\n//Register the user\r\n\r\nregistertrationForm.addEventListener(\"submit\", (event) => {\r\n  event.preventDefault();\r\n  const email = registertrationForm.email.value;\r\n  const password = registertrationForm.password.value;\r\n  const username = registertrationForm.username.value;\r\n\r\n  const g = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(colRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"UserName\", \"==\", username));\r\n  const s = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(g);\r\n  // console.log(g);\r\n  s.then((querySnapshot) => {\r\n    if (!querySnapshot.empty) {\r\n      // The username already exists\r\n      alert(\"Username already taken. Please choose a different one.\");\r\n      return;\r\n    } else {\r\n      const passwordConfirm = registertrationForm.Password.value;\r\n      console.log(email, password);\r\n\r\n      // check for email format\r\n      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/;\r\n      if (!emailRegex.test(email)) {\r\n        console.log(\"please enter a valid email address.\");\r\n      }\r\n      //check that the password eets minimum length requirements\r\n      if (password.length < 8) {\r\n        console.log(\"password must be atleast 8 characters.\");\r\n        return;\r\n      }\r\n\r\n      //check that the password and password confirmation match\r\n      if (password !== passwordConfirm) {\r\n        console.log(\"password do not match\");\r\n        return;\r\n      }\r\n\r\n      (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(auth, email, password).then(() => {\r\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.sendEmailVerification)(auth.currentUser);\r\n        window.alert(\"Account Registered\");\r\n\r\n        console.log(\"send\");\r\n\r\n        if (auth.currentUser.emailVerified) {\r\n          //This will return true or false\r\n          console.log(\"email is verified\");\r\n        } else {\r\n          console.log(\"email not verified\");\r\n        }\r\n\r\n        console.log(\"send\");\r\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(colRef, {\r\n          UserName: registertrationForm.username.value,\r\n          Email: registertrationForm.email.value,\r\n          Password: registertrationForm.password.value,\r\n          FullName: registertrationForm.fullName.value,\r\n          Gender: registertrationForm.gender.value,\r\n          PostalCode: registertrationForm.postalCode.value,\r\n          City: registertrationForm.City.value, //\r\n          Age: registertrationForm.age.value,\r\n          ProfilePic:\r\n            \"https://img.freepik.com/premium-vector/male-profile-flat-blue-simple-icon-with-long-shadowxa_159242-10092.jpg\",\r\n        });\r\n        //window.location.href=\"../dist/index.html\"\r\n      });\r\n    }\r\n  });\r\n});\r\n\r\n//export { filteredUsers };\r\n\n\n//# sourceURL=webpack://firebase_login/./src/registration.js?");

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
/******/ 			"registration": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("./src/registration.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;