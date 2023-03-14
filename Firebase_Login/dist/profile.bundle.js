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

/***/ "./src/profile.js":
/*!************************!*\
  !*** ./src/profile.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n//imports\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Your web app's Firebase configuration\r\n\r\nconst firebaseConfig = {\r\n\tapiKey: \"AIzaSyDs8lcJfdBO2xahG9qRHfQxbZlM_WdEZvw\",\r\n\tauthDomain: \"world2opinion.firebaseapp.com\",\r\n\tdatabaseURL: \"https://world2opinion-default-rtdb.firebaseio.com\",\r\n\tprojectId: \"world2opinion\",\r\n\tstorageBucket: \"world2opinion.appspot.com\",\r\n\tmessagingSenderId: \"872516887044\",\r\n\tappId: \"1:872516887044:web:d2e3e426362b0d47dc8b51\",\r\n\tmeasurementId: \"G-0KNC73MJ16\"\r\n  };\r\n// Initialize Firebase\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\r\n// geting the firestore database\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\r\n// getting signed user credentials\r\nlet signInEmail;\r\nconst userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"Users\")\r\nconst postRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"Posts\")\r\n\r\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)();\r\n\r\nlet moveTouser;\r\n\r\n\r\n\r\nlet Name;\r\nlet UserName;\r\nlet ProfilePic;\r\nlet UserId;\r\n\r\nauth.onAuthStateChanged(function (user) {\r\n\tif (user) {\r\n\t\tsignInEmail = auth.currentUser.email\r\n\r\n\t} \r\n\r\n\t// accessing the data of current user\r\n\tconst getCurrentUser = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(userRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"Email\", \"==\", signInEmail))\r\n\r\n\r\n\tconst getCurrentUserData = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(getCurrentUser)\r\n\r\n\tgetCurrentUserData.then((data) => {\r\n\t\tconst response =\r\n\t\t\tdata.docs.map(d => ({ id: d.id, ...d.data() }))\r\n\t\tresponse.map(results => {\r\n\r\n\t\t\tName = results.FullName;\r\n\t\t\tUserName = results.UserName;\r\n\t\t\tProfilePic = results.ProfilePic\r\n\t\t\tUserId = results.id\r\n\t\t});\r\n\t\t// display name\r\n\t\tlet name = document.querySelector(\".p-fullname\");\r\n\t\tname.innerHTML = Name;\r\n\r\n\t\t//displey username\r\n\t\tlet username = document.querySelector(\".p-username\")\r\n\t\tusername.innerHTML = UserName\r\n\r\n\t\tlet profilePic = document.querySelector(\".p-profile-display\")\r\n\t\t// change profile pic\r\n\t\tprofilePic.src = ProfilePic;\r\n\r\n\t\t// accesing the images inside the users\r\n\t\tconst usercollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(userRef, UserId)\r\n\t\tconst subImagesCollection1 = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(usercollection, \"Posts\")\r\n\r\n\r\n\t\tconst friendsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(usercollection, \"Friends\")\r\n\r\n\r\n\t\t//const postsCount=collection()\r\n\t\tconst imagesData = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(subImagesCollection1)\r\n\t\tlet postID;\r\n\t\timagesData.then((data) => {\r\n\t\t\tconst data2 = data.docs.map(d => ({ id: d.id, ...d.data() })\r\n\t\t\t)\r\n\r\n\t\t\tdata2.map((e) => {\r\n\t\t\t\tconsole.log(e)\r\n\t\t\t\tconst postSubcollection=(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(postRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"postId\", \"==\", e.id))\r\n\t\t\t\tconst resultsData=(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(postSubcollection)\r\n\t\t\t\t\t\t\t\r\n\t\t\t\tconst imageElement = document.createElement('img');\r\n\t\t\t\timageElement.src = e.ImageUrl;\r\n\t\t\t\tdocument.querySelector('.p-post-container').appendChild(imageElement);\r\n\t\t\t\timageElement.addEventListener(\"click\", element => {\r\n\t\t\t\t\tconsole.log(element)\r\n\t\t\t\t\tresultsData.then((data) => {\r\n\t\t\t\t\t\tconst response =\r\n\t\t\t\t\t\t\tdata.docs.map(d => ({ id: d.id, ...d.data() }))\r\n\t\t\t\t\t\t\tresponse.map((results)=>{\r\n\t\t\t\t\t\t\t\tpostID=results.id\r\n\t\t\t\t\t\t\t\tconsole.log(results)\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\r\n/////////////////////////code to display result card................................\r\n\t\t\t\t\tconst postData=getDocument(\"Posts\", postID)\r\n\t\t\t\t\tpostData.then((data) => {\r\n\r\n\r\n\t\t\t\t\t\t\tlet imgContainer = document.querySelector('.p-clickedpost-container');\r\n\r\n\t\t\t\t\t\t\timgContainer.innerHTML = `\t\t\r\n\r\n\t\t\t\t\t\t\t<svg class=\"p-two-logo\" id=\"Layer_2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 65.81 65.81\"><defs><style>.cls-1{fill:#fdce8d;}.cls-2,.cls-3{fill:#fff;}.cls-4{fill:#194789;}.cls-5{fill:none;}.cls-5,.cls-3{stroke-linecap:round;}.cls-5,.cls-3,.cls-6{stroke:#fff;stroke-miterlimit:10;}.cls-3{stroke-width:.75px;}.cls-6{fill:#f7961d;stroke-width:3px;}</style></defs><g id=\"Layer_1-2\"><g><g><rect class=\"cls-4\" width=\"65.81\" height=\"65.81\" rx=\"12\" ry=\"12\"/><circle class=\"cls-6\" cx=\"32.91\" cy=\"28.19\" r=\"16.73\"/><circle class=\"cls-1\" cx=\"32.91\" cy=\"32.41\" r=\"10.37\"/><line class=\"cls-5\" x1=\"25.83\" y1=\"38.25\" x2=\"39.99\" y2=\"38.25\"/><line class=\"cls-5\" x1=\"32.84\" y1=\"38.95\" x2=\"32.98\" y2=\"49.21\"/><rect class=\"cls-2\" x=\"27.86\" y=\"48.53\" width=\"10.1\" height=\"2.47\" rx=\"1.24\" ry=\"1.24\"/><rect class=\"cls-2\" x=\"29.31\" y=\"52.33\" width=\"7.19\" height=\"2.41\" rx=\"1.2\" ry=\"1.2\"/></g><path class=\"cls-3\" d=\"m37.51,30.7l-.41-.28v.49c-.02.06-.03.11-.03.17,0,0,0,0,0,0,.18.11.28.14.49.33.84.74,1.33,1.8,1.33,2.92,0,2.16-1.76,3.92-3.92,3.92-.51,0-1-.1-1.45-.28,1.14-.81,1.89-2.14,1.89-3.64,0-.23-.03-.47-.08-.77l-.04-.21h-.21s.22,0,.21,0c-.37-1.44-1.17-2.56-2.3-2.56-.84,0-1.45.61-1.96,1.47l-.1.19c-.28.6-.42,1.23-.42,1.88,0,1.5.75,2.83,1.89,3.64-.45.18-.94.28-1.45.28-2.16,0-3.92-1.76-3.92-3.92,0-1.16.31-1.82,1.08-2.71.36-.43.6-.54.77-.66,0-.04-.02-.08-.03-.13l-.06-.43-.35.24c-1.22.83-1.94,2.21-1.94,3.68,0,2.46,2,4.45,4.45,4.45.72,0,1.4-.18,2-.48.6.31,1.28.48,2,.48,2.46,0,4.45-2,4.45-4.45,0-1.44-.72-2.81-1.92-3.64Zm-6.46,3.64c0-.42.07-.84.21-1.24.37-.99,1.02-1.76,1.73-1.76.85,0,1.91,1.46,1.95,3s-.86,2.69-1.97,3.36c-1.14-.69-1.92-1.93-1.92-3.36Z\"/></g></g></svg>\r\n\t\t\t\t\t\t\t<img class=\"p-post-active\" src=\"${data.ImageUrl}\" alt=\"img\" title=\"image\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"p-results\">\r\n\t\t\t\t\t\t\t\t<p class=\"p-results-heading\">Results</p>\r\n\t\t\t\t\t\t\t\t<div class=\"p-results-value\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<p>likes</p>\r\n\t\t\t\t\t\t\t\t\t<p>${data.like_count}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<p>dislikes</p>\r\n\t\t\t\t\t\t\t\t\t<p>${data.dislike_count}</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<p>Date Posted:</p>\r\n\t\t\t\t\t\t\t\t<p></p>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>`;\r\n\r\n\r\n\t\t\t\t\t\t\tvar clickEnlarged = document.querySelector(\".p-post-active\");\r\n\r\n\t\t\t\t\t\t\tclickEnlarged.addEventListener(\"click\", function () {\r\n\r\n\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\timgContainer.innerHTML = \"\";\r\n\t\t\t\t\t\t\t})\r\n\r\n\r\n\t\t\t\t\t\t})\r\n\t\t\t\t\t})\r\n\r\n\r\n\t\t\t\t})\r\n\t\t\t})\r\n\t\t})\r\n\t})\r\n\r\n\t\t\t// displaying the frinds\r\n\t\t\tconst friendsData = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(friendsCollection)\r\n\t\t\tfriendsData.then((data) => {\r\n\t\t\t\tconst data2 = data.docs.map(d => ({ id: d.id, ...d.data() })\r\n\t\t\t\t)\r\n\t\t\t\tdata2.map((element) => {\r\n\r\n\t\t\t\t\tconst docsUser = getDocument(\"Users\", element.friendID)\r\n\t\t\t\t\tdocsUser.then((userData) => {\r\n\r\n\t\t\t\t\t\tconst imageElement = document.createElement('img');\r\n\t\t\t\t\t\tconst divElement = document.createElement('div');\r\n\t\t\t\t\t\tconst textField = document.createElement('a');\r\n\t\t\t\t\t\ttextField.textContent = userData.UserName\r\n\t\t\t\t\t\timageElement.src = userData.ProfilePic;\r\n\t\t\t\t\t\tdivElement.appendChild(imageElement)\r\n\t\t\t\t\t\tdivElement.appendChild(textField)\r\n\t\t\t\t\t\tconst otherUserDiv=document.querySelector('.p-friends-list').appendChild(divElement);\r\n\t\t\t\t\t\r\n\r\n\t\t\t\t\tgoToUserProfile(otherUserDiv)\r\n\t\t\t\t\tfunction goToUserProfile(element) {\r\n\t\t\t\t\t\telement.addEventListener(\"click\", e => {\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\tconst clickedUserName = e.target.innerHTML\r\n\r\n\t\t\t\t\t\t\tconst postData = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(userRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"UserName\", \"==\", clickedUserName))\r\n\t\t\t\t\t\t\tconst p = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(postData)\r\n\t\t\t\t\t\t\tp.then((data) => {\r\n\t\t\t\t\t\t\t\tconst response =\r\n\t\t\t\t\t\t\t\t\tdata.docs.map(d => ({ id: d.id, ...d.data() }))\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\tresponse.map(results => {\r\n\t\t\t\t\t\t\t\t\tmoveTouser = results.id\r\n\t\t\t\t\t\t\t\t\twindow.location.href = \"../dist/redirectToProfile.html?moveTouser=\" + encodeURIComponent(moveTouser)\r\n\r\n\t\t\t\t\t\t\t\t})\r\n\t\t\t\t\t\t\t})\r\n\t\t\t\t\t\t})\r\n\t\t\t\t\t}\r\n\t\t\t\t\t})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\r\n\r\n\t\t\t\t})\r\n\t\t\t\t// displaying the count for friends\r\n\r\n\t\t\t\tlet numberOfFriends = document.querySelector(\".p-numberOfFriends\");\r\n\r\n\t\t\t\t(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getCountFromServer)(friendsCollection)\r\n\t\t\t\t\t.then((snap) => {\r\n\t\t\t\t\t\tnumberOfFriends.innerHTML = snap.data().count\r\n\t\t\t\t\t});\r\n\t\t\t\t\t// displaying the count for posts \r\n\t\tlet numberOfPosts = document.querySelector(\".p-numberOfPosts\");\r\n\t\t(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getCountFromServer)(subImagesCollection1)\r\n\t\t\t.then((snap) => {\r\n\t\t\t\tnumberOfPosts.innerHTML = snap.data().count\r\n\t\t\t});\r\n\t\t\t//changing profile pic\r\n\t\tprofilePic.addEventListener(\"click\", () => {\r\n\t\r\n\t\t\tgalleryaccessed()\r\n\t\t});\r\n\r\n\t\t\t});\r\n\t\t})\r\n\t\t\r\n\r\n\r\n\r\n\t\t\r\n\t})\r\n\r\n\r\n\r\n// accessing gallery\r\nfunction galleryaccessed() {\r\n\t// check if the browser can get the File API\r\n\tif (window.File && window.FileReader && window.FileList && window.Blob) {\r\n\t\t// create a new file input element\r\n\t\tvar input = document.createElement('input');\r\n\t\tinput.type = 'file';\r\n\r\n\t\t// add an event listener to the file input element\r\n\t\tinput.addEventListener('change', function (e) {\r\n\t\t\te.preventDefault();\r\n\r\n\t\t\t// Display the file\r\n\r\n\r\n\t\t\tfor (var i = 0; i < input.files.length; i++) {\r\n\t\t\t\tvar file = input.files[i];\r\n\t\t\t\tvar image = document.createElement('img');\r\n\t\t\t\tconst link = image.src = URL.createObjectURL(file);\r\n\r\n\r\n\t\t\t\tconst container = document.querySelector(\".p-profile-display\")\r\n\t\t\t\tcontainer.src = link\r\n\t\t\t\r\n\r\n\t\t\t\tconst uploadFile = () => {\r\n\t\t\t\t\tconst name = new Date().getTime() + file.name\r\n\t\t\t\t\t\r\n\r\n\r\n\r\n\r\n\t\t\t\t\tconst fileRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(storage, \"Images/\" + file.name);\r\n\r\n\t\t\t\t\tconst uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytesResumable)(fileRef, file);\r\n\r\n\t\t\t\t\tuploadTask.on(\r\n\t\t\t\t\t\t\"state_changed\",\r\n\t\t\t\t\t\t(snapshot) => {\r\n\r\n\t\t\t\t\t\t\tconst progress =\r\n\t\t\t\t\t\t\t\t(snapshot.bytesTransferred / snapshot.totalBytes) * 100;\r\n\t\t\t\t\t\t\tconsole.log(\"upload is \" + progress + \"% done\");\r\n\t\t\t\t\t\t\tswitch (snapshot.state) {\r\n\t\t\t\t\t\t\t\tcase \"paused\":\r\n\t\t\t\t\t\t\t\t\tconsole.log(\"upload is paused\");\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\tcase \"running\":\r\n\t\t\t\t\t\t\t\t\tconsole.log(\"upload is running\");\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\tdefault:\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t(error) => {\r\n\t\t\t\t\t\t\tconsole.log(error)\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t() => {\r\n\r\n\r\n\t\t\t\t\t\t\t(0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(uploadTask.snapshot.ref).then((downloadURL) => {\r\n\r\n\t\t\t\t\t\t\t\tconst docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(userRef, UserId);\r\n\r\n\t\t\t\t\t\t\t\t(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(docRef, {\r\n\t\t\t\t\t\t\t\t\tProfilePic: downloadURL\r\n\t\t\t\t\t\t\t\t})\r\n\r\n\t\t\t\t\t\t\t})\r\n\t\t\t\t\t\t})\r\n\t\t\t\t}\r\n\t\t\t\tfile && uploadFile()\r\n\r\n\t\t\t}\r\n\t\t});\r\n\t\tinput.click();\r\n\r\n\t}\r\n\telse {\r\n\r\n\t\talert('Your browser does not support the File API');\r\n\t}\r\n\r\n}\r\n\r\nasync function getDocument(coll, id) {\r\n\tconst snap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, coll, id))\r\n\t\r\n\r\n\treturn snap.data()\r\n}\n\n//# sourceURL=webpack://firebase_login/./src/profile.js?");

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
/******/ 			"profile": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("./src/profile.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;