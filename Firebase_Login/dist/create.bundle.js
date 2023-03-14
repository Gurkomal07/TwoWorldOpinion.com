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

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\nvar button = document.querySelector(\".c-done\");\r\n\r\nbutton.onclick = function () {\r\n\tconsole.log('button clicked');\r\n  window.location.href = \"profile.html\";\r\n\r\n};\r\n \r\n\r\n\r\n//importing the firebase stuff\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyDs8lcJfdBO2xahG9qRHfQxbZlM_WdEZvw\",\r\n  authDomain: \"world2opinion.firebaseapp.com\",\r\n  databaseURL: \"https://world2opinion-default-rtdb.firebaseio.com\",\r\n  projectId: \"world2opinion\",\r\n  storageBucket: \"world2opinion.appspot.com\",\r\n  messagingSenderId: \"872516887044\",\r\n  appId: \"1:872516887044:web:d2e3e426362b0d47dc8b51\",\r\n  measurementId: \"G-0KNC73MJ16\"\r\n};\r\n\r\n// const firebaseConfig = {\r\n//   apiKey: \"AIzaSyDaFG-jf_KBzJTX4aga_QY-sHVtWNsPG4Q\",\r\n//   authDomain: \"two-world-sopinion-proj.firebaseapp.com\",\r\n//   projectId: \"two-world-sopinion-proj\",\r\n//   storageBucket: \"two-world-sopinion-proj.appspot.com\",\r\n//   messagingSenderId: \"630623773065\",\r\n//   appId: \"1:630623773065:web:fa5eefce8db75d4b9c4158\"\r\n// };\r\n\r\n(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig)\r\n\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\r\nconst userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"Users\")\r\nconst imagesRef=(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"Images\")\r\nconst storage=(0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();\r\n\r\n\r\nlet UserId;\r\nlet signInEmail;\r\n \r\nconst auth=(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\r\n\r\n \r\n\r\nauth.onAuthStateChanged(function (user) {\r\n\tif (user) {\r\n\t\tconsole.log(\"user id\")\r\n\t\tconsole.log(auth.currentUser.email)\r\n\t\tsignInEmail = auth.currentUser.email\r\n    // UserId=auth.currentUser.uid\r\n    \r\n\r\n\t} else {\r\n\t\tconsole.log('No user is signed in.')\r\n\t}\r\n  const getCurrentUser = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(userRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"Email\", \"==\", signInEmail))\r\n  const getCurrentUserData = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(getCurrentUser)\r\n\r\n\tgetCurrentUserData.then((data) => {\r\n\t\tconst response =\r\n\t\t\tdata.docs.map(d => ({ id: d.id, ...d.data() }))\r\n\t\t response.map(results => {\r\n\t\t \tconsole.log(\"results\")\r\n\t\t \tconsole.log(results.id)\r\n\t\t \tUserId = results.id\r\n\t\t\r\n\t\t});\r\n\r\n\r\n  })\r\n})\r\n\r\n// //Access the gallery:\r\n\r\n var gallery = document.querySelector('.c-accessgallery');\r\n var cancel = document.querySelector('.c-cancel');\r\n var addButton = document.querySelector('.c-splitscreen');\r\n \r\n\r\ngallery.addEventListener('click', function() {\r\n\r\n\r\n \r\n  // call the function to access the device gallery\r\n  galleryaccessed();\r\n  gallery.disabled = true;\r\n\r\n  });\r\n\r\n\r\n    // reset the image display\r\n   \r\ncancel.addEventListener('click', function() {\r\n\r\n      var container = document.querySelector('.c-image-display');\r\n     container.innerHTML = '';\r\n      });\r\n\r\n     \r\n\r\n  // function to access the device gallery & fetch the userid and upload the file (img/video) to firebase under particular userid\r\nfunction galleryaccessed() {\r\n\r\n\r\n    // check if the browser can get the File API\r\n    if (window.File && window.FileReader && window.FileList && window.Blob) {\r\n        // create a new file input element\r\n        var input = document.createElement('input');\r\n        input.type = 'file';\r\n    \r\n        // add an event listener to the file input element\r\n        input.addEventListener('change', function(e) {\r\n          e.preventDefault();\r\n           \r\n          // Display the file\r\n          for (var i = 0; i < input.files.length; i++) {\r\n            var file = input.files[i];\r\n            if (file.type.startsWith('video/')) {\r\n              var video = document.createElement('video');\r\n              video.src = URL.createObjectURL(file);\r\n              video.controls = true;\r\n              video.width = 320;\r\n              video.height = 240;\r\n\r\n               // add the video element to the gallery container\r\n          const container = document.querySelector('.c-image-display');\r\n          container.appendChild(video);\r\n        } else if (file.type.startsWith('image/')) {\r\n          var image = document.createElement('img');\r\n          image.src = URL.createObjectURL(file);\r\n\r\n          // add the image element to the gallery container\r\n          const container = document.querySelector('.c-image-display');\r\n\r\n if (container.children.length > 0) {\r\n  alert('You can only choose one image.');\r\n} else {\r\n  // add the image element to the gallery container\r\n  container.appendChild(image);\r\n\r\n\r\n           }\r\n}\r\n            // var image = document.createElement('img');\r\n            // image.src = URL.createObjectURL(file);\r\n      \r\n            // const container = document.querySelector('.c-image-display');\r\n            // container.appendChild(image);\r\n           \r\n            //   console.log(\"image chosen\")\r\n            //   const video = document.createElement('video');\r\n            //   video.src = URL.createObjectURL(file);\r\n            //   video.controls = true;\r\n          \r\n              // add the video element to the gallery container\r\n              // container.appendChild(video);\r\n  // upload the edited image to storage\r\n\r\n\t\t\t\tconst uploadFile = () => {\r\n\t\t\t\t\tconst name = new Date().getTime() + file.name\r\n\t\t\t\t\tconsole.log(name)\r\n\r\n\t\t\t\t\tconst fileRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, \"Images/\" + file.name);\r\n\r\n\t\t\t\t\tconst uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytesResumable)(fileRef, file);\r\n\r\n\t\t\t\t\tuploadTask.on(\r\n\t\t\t\t\t\t\"state_changed\",\r\n\t\t\t\t\t\t(snapshot) => {\r\n\r\n\t\t\t\t\t\t\tconst progress =\r\n\t\t\t\t\t\t\t\t(snapshot.bytesTransferred / snapshot.totalBytes) * 100;\r\n\t\t\t\t\t\t\tconsole.log(\"upload is \" + progress + \"% done\");\r\n\t\t\t\t\t\t\tswitch (snapshot.state) {\r\n\t\t\t\t\t\t\t\tcase \"paused\":\r\n\t\t\t\t\t\t\t\t\tconsole.log(\"upload is paused\");\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\tcase \"running\":\r\n\t\t\t\t\t\t\t\t\tconsole.log(\"upload is running\");\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\tdefault:\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t(error) => {\r\n\t\t\t\t\t\t\tconsole.log(error)\r\n\t\t\t\t\t\t},() => {\r\n\r\n              (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(uploadTask.snapshot.ref).then(async (downloadURL) => {\r\n                const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"Users\");\r\n                const postRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"Posts\");\r\n                  // create a new post document in the \"Posts\" subcollection\r\n  \r\n                  // Generate a custom ID for the post\r\n                  const postId = generateId();\r\n    \r\n                const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(userRef, UserId);\r\n                const postUserDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(postRef, UserId);\r\n                const imagesRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(userDocRef, \"Posts\");\r\n                const likeDislikeRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(postUserDocRef, \"UsersLiked\");\r\n                const DislikeLikeRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(postUserDocRef, \"UsersDisliked\");\r\n                const imagesInfo = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(imagesRef);\r\n                const postinfo = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(likeDislikeRef);\r\n                const PostInform = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(DislikeLikeRef);\r\n              // add a subcollection called \"Posts\" to the user document\r\n  const postsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(userDocRef, \"Posts\");\r\n  \r\n  // Add the post to the Posts collection with the custom ID\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(postsRef, postId), {\r\n    UserId: UserId,\r\n    ImageUrl: downloadURL,\r\n  \r\n    Likes: 0,\r\n    Dislikes: 0,\r\n  });\r\n\r\n  \r\n  // set & update the docs\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(imagesInfo, {\r\n    UserId: UserId,\r\n    ImageUrl: downloadURL,\r\n  });\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(postRef, {\r\n    UserId: UserId,\r\n    ImageUrl: downloadURL,\r\n    postId: postId,\r\n  });\r\n   (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(postinfo, {\r\n     Name: \"Default\",\r\n     Date: Date,\r\n    });\r\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(PostInform, {\r\n      Name: \"Default\",\r\n      Date: Date,\r\n    });\r\n    // Add the post ID to the user's Posts subcollection\r\n    // setDoc(doc(userRef, UserId, \"Posts\", postId), {\r\n    //   postId: postId,\r\n    // });\r\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(userDocRef, { PostId: postDocRef.id }, { merge: true });\r\n  \r\n\r\n\r\n              \t\t\t\t\t\t\t\t\t\t\t\t\t\t})\r\n            \r\n              \r\n                                        })\r\n                                      \r\n\r\n\t\t\t\t}\r\n\t\t\t\tfile && uploadFile()\r\n\r\n        }\r\n      }),\r\n\t\t\r\n        input.click();\r\n       \r\n          }else {\r\n        alert('Your browser does not support the File API');\r\n      }\r\n\r\n    }\r\n\r\n\r\n// Function to generate a custom ID for the post\r\nfunction generateId() {\r\n  // Generate a random string of characters for the ID\r\n  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';\r\n  let id = '';\r\n  for (let i = 0; i < 10; i++) {\r\n    id += chars[Math.floor(Math.random() * chars.length)];\r\n  }\r\n  return id;\r\n}\r\n\r\n    \r\n\r\n\r\n\r\n// //Live camera \r\nconst cameraContainer = document.querySelector('.c-image-display');\r\nconst captureButton = document.querySelector('.c-cameraclick');\r\nconst rotateButton = document.querySelector('.c-camerarotate');\r\nconst videoOptions = { video: true, audio: true }; // Add audio constraint\r\n\r\n// let mediaRecorder = null;\r\n// let recordedChunks = [];\r\n\r\nnavigator.mediaDevices.getUserMedia({ video: true })\r\n  .then(stream => {\r\n    const video = document.createElement('video');\r\n    video.srcObject = stream;\r\n    video.autoplay = true;\r\n    cameraContainer.appendChild(video);\r\n\r\n  })\r\n  .catch(error => {\r\n    console.error('Error accessing camera:', error);\r\n  });\r\n\r\n  \r\n\r\ncaptureButton.addEventListener('click', () => {\r\n  const canvas = document.createElement('canvas');\r\n  canvas.width = cameraContainer.offsetWidth;\r\n  canvas.height = cameraContainer.offsetHeight;\r\n  const video = document.querySelector('video');\r\n  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);\r\n  const imageFile = canvas.toDataURL();\r\n  const image = new Image();\r\n  image.style.width = '100%';\r\n  image.style.height = '100%';\r\n  image.src = imageFile;\r\n  cameraContainer.innerHTML = '';\r\n  cameraContainer.appendChild(image);\r\n  console.log(\"Photo taken\");\r\n  const uploadFile = () => {\r\n    const name = new Date().getTime() + '.png';\r\n\r\n    const fileRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, 'Images/' + name);\r\n    const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytesResumable)(fileRef, imageFile);\r\n\r\n    uploadTask.on(\r\n      'state_changed',\r\n      (snapshot) => {\r\n        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;\r\n        console.log('Upload is ' + progress + '% done');\r\n      },\r\n      (error) => {\r\n        console.log(error)\r\n      },\r\n      () => {\r\n        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(uploadTask.snapshot.ref).then((downloadURL) => {\r\n          // Save the downloadURL to Firebase Firestore here\r\n          console.log('Image saved to Firebase:', downloadURL);\r\n          // reference the user document\r\n          const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"Users\")\r\n          //reference the post document \r\n          const postRef=(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db,\"Posts\")\r\n\r\n          const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(userRef, UserId);               \r\n          const postUserDocRef=(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(postRef, UserId)\r\n          // add a subcollection called \"Images\" to the user document\r\n          const imagesRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(userDocRef, \"Posts\");\r\n          const likeDislikeRef=(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(postUserDocRef, \"UsersLiked\")\r\n          const DislikeLikeRef=(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(postUserDocRef,\"UsersDisliked\")\r\n    \r\n          const imagesInfo = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(imagesRef)  \r\n          const postinfo=(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(likeDislikeRef) \r\n          const  PostInform=(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(DislikeLikeRef) \r\n      \r\n\r\n          //set & update the doc\"s\"\r\n          ;(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(imagesInfo, {\r\n            UserId:UserId,\r\n            ImageUrl: downloadURL\r\n          });\r\n          (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(postRef, {\r\n            UserId:UserId,\r\n            ImageUrl:downloadURL\r\n          });\r\n          (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(postinfo,{\r\n            name:\"Default\"\r\n          });\r\n          (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(PostInform,{\r\n            name:\"Default\",\r\n          });\r\n        })\r\n      }\r\n    )\r\n  }\r\n  uploadFile()\r\n})\r\n\r\n//taking a live video option [still need to work on it]\r\n// navigator.mediaDevices.getUserMedia(videoOptions)\r\n//   .then(stream => {\r\n//     const video = document.createElement('video');\r\n//     video.srcObject = stream;\r\n//     video.autoplay = true;\r\n//     cameraContainer.appendChild(video);\r\n\r\n//     mediaRecorder = new MediaRecorder(stream);\r\n//     mediaRecorder.ondataavailable = e => {\r\n//       recordedChunks.push(e.data);\r\n//     };\r\n//     mediaRecorder.onstop = () => {\r\n//       const videoBlob = new Blob(recordedChunks, { type: 'video/mp4' });\r\n//       const videoUrl = URL.createObjectURL(videoBlob);\r\n//       const videoElement = document.createElement('video');\r\n//       videoElement.src = videoUrl;\r\n//       cameraContainer.innerHTML = '';\r\n//       cameraContainer.appendChild(videoElement);\r\n\r\n\r\n//     };\r\n//   }) .catch(error => {\r\n//     console.error('Error accessing camera:', error);\r\n//   });\r\n//   captureButton.addEventListener('click', () => {\r\n//     if (mediaRecorder && mediaRecorder.state === 'inactive') {\r\n//       recordedChunks = [];\r\n//       mediaRecorder.start();\r\n//       console.log('Recording started');\r\n//     } else if (mediaRecorder && mediaRecorder.state === 'recording') {\r\n//       mediaRecorder.stop();\r\n//       console.log('Recording stopped');\r\n//     }\r\n//   });\r\n\r\n  //Create a variable to keep track of the currently active camera, and set it to the first available camera by default.\r\n  let activeCameraIndex = 0;\r\n\r\n  //Add an event listener to the rotate button that switches between the available cameras.\r\n  rotateButton.addEventListener('click', async () => {\r\n    activeCameraIndex = (activeCameraIndex + 1) % cameras.length;\r\n    await startCamera(cameras[activeCameraIndex]);\r\n  });\r\n\r\n\r\n\r\n\r\n\r\n  //Split the screen\r\n\r\n//To Do's : make the 2 images side by side (display:flex)\r\n\r\n// Get references to the button and image container elements\r\n// const addButton = document.querySelector('.c-splitscreen');\r\nconst imageContainer = document.querySelector('.c-image-display');\r\nvar selectedImageCount = 0;\r\n// Define variables to store the selected images\r\nlet image1 = null;\r\nlet image2 = null;\r\n\r\n// Add a click event listener to the button to trigger the image selection process\r\naddButton.addEventListener('click', () => {\r\n  // Check if the user has already selected two images\r\n  if (image1 !== null && image2 !== null) {\r\n    alert('You have already selected two images');\r\n    return;\r\n  }\r\n \r\n  // Create an input element to select images from the gallery\r\n  const input = document.createElement('input');\r\n  input.type = 'file';\r\n  input.accept = 'image/*';\r\n  input.multiple = true;\r\n  \r\n  // Add an event listener to the input to handle image selection\r\n  input.addEventListener('change', () => {\r\n \r\n    // Loop through the selected files and display them\r\n    for (let i = 0; i < input.files.length; i++) {\r\n      const file = input.files[i];\r\n      const reader = new FileReader();\r\n      reader.onload = (event) => {\r\n        const image = new Image();\r\n        image.src = event.target.result;\r\n        image.style.maxWidth = '100%';\r\n        image.style.height = '100vh';\r\n        image.style.marginBottom = '10px';\r\n        // image.style.display = 'flex';\r\n        // image.style.flex-direction ; 'row';\r\n        // Display the first image\r\n        if (image1 === null) {\r\n          image1 = image;\r\n          imageContainer.appendChild(image1);\r\n   \r\n        }\r\n        // Display the second image next to the first image\r\n        else if (image2 === null) {\r\n          image2 = image;\r\n          const container = document.createElement('div');\r\n          container.style.display = 'flex';\r\n          container.style.flexWrap = 'rowwrap';\r\n          container.style.width = '50%';\r\n          container.style.height = '100%';\r\n          container.appendChild(image1);\r\n          container.appendChild(image2);\r\n          imageContainer.innerHTML = '';\r\n          imageContainer.appendChild(container);\r\n          // Combine the images into one post and upload to Firebase\r\n          const canvas = document.createElement('canvas');\r\n          const context = canvas.getContext('2d');\r\n          canvas.width = image1.width + image2.width;\r\n          canvas.height = Math.max(image1.height, image2.height);\r\n          context.drawImage(image1, 0, 0);\r\n          context.drawImage(image2, image1.width, 0);\r\n          const dataURL = canvas.toDataURL('image/jpeg', 0.9);\r\n          uploadToFirebase(dataURL);\r\n\r\n          // Disable the button after two images have been selected\r\naddButton.disabled = true;\r\n        }\r\n      };\r\n      reader.readAsDataURL(file);\r\n    }\r\n  });\r\n  \r\n  // Trigger the input click event to open the gallery\r\n  input.click();\r\n});\r\nfunction uploadToFirebase(dataURL, description) {\r\n  console.log(dataURL);\r\n  const uploadFile = () => {\r\n    const name = new Date().getTime() + '.png';\r\n\r\n    const fileRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, 'Images/' + name);\r\n    const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytesResumable)(fileRef, dataURL);\r\n\r\n    uploadTask.on(\r\n      'state_changed',\r\n      (snapshot) => {\r\n        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;\r\n        console.log('Upload is ' + progress + '% done');\r\n      },\r\n      (error) => {\r\n        console.log(error)\r\n      },\r\n      () => {\r\n        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(uploadTask.snapshot.ref).then((downloadURL) => {\r\n          const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"Users\")\r\n          const postRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"Posts\")\r\n\r\n          const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(userRef, UserId);               \r\n          const postUserDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(postRef, UserId)\r\n          const imagesRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(userDocRef, \"Posts\");\r\n          const likeDislikeRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(postUserDocRef, \"UsersLiked\")\r\n          const dislikeLikeRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(postUserDocRef, \"UsersDisliked\")\r\n    \r\n          const imagesInfo = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(imagesRef)  \r\n          const postInfo = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(postRef, name)\r\n          const likeDislikeInfo = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(likeDislikeRef, UserId) \r\n          const dislikeLikeInfo = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(dislikeLikeRef, UserId) \r\n\r\n         \r\n          ;(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(imagesInfo, {\r\n            UserId: UserId,\r\n            ImageUrl: downloadURL,\r\n            Description: '' // set to empty string\r\n          });\r\n          \r\n          (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(postInfo, {\r\n            UserId: UserId,\r\n            ImageUrl: downloadURL,\r\n            Description: '' ,// set to empty string\r\n            Likes: 0,\r\n            Dislikes: 0\r\n          });\r\n\r\n          (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(likeDislikeInfo, {\r\n            Name: \"Default\"\r\n          });\r\n\r\n          (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(dislikeLikeInfo, {\r\n            Name: \"Default\"\r\n          });\r\n\r\n          console.log('Image saved to Firebase:', downloadURL);\r\n        })\r\n      }\r\n    )\r\n  }\r\n  uploadFile()\r\n}\r\n\r\n\r\n//Adding text \r\nconst addTextButton =document.querySelector(\".c-text\");\r\nconst textContainer =document.querySelector(\".text-container\");\r\n//Add a click event listener to the \r\naddTextButton.addEventListener('click', () => {\r\n  // Set the text content of the paragraph element \r\n  console.log(\"clicked\");\r\n  textContainer.innerHTML=`<input type=\"text\" class=\"ctextinput\" id=\"ctextinput\" name=\"ctextinput\">\r\n  <button class=\"c-submit\" type=\"submit\"></button> `;\r\n  // textContainer.textContent = 'This text was added by clicking the button!';\r\n  var form=document.querySelector(\".c-form\");\r\n   var textValue= document.querySelector(\".c-text-input\").value;\r\n   textContainer.addEventListener(\"submit\", (event)=> \r\n   { event.preventDefault();\r\n     console.log('text entered');\r\n var textValue=textContainer.ctextinput.value; \r\n console.log(textValue); \r\n textContainer.innerHTML= textValue;\r\n})});\r\n\r\n\n\n//# sourceURL=webpack://firebase_login/./src/create.js?");

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
/******/ 			"create": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("./src/create.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;