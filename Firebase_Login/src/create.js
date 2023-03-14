

var button = document.querySelector(".c-done");

button.onclick = function () {
	console.log('button clicked');
  window.location.href = "profile.html";

};
 


//importing the firebase stuff


import { initializeApp } from "firebase/app";
import { getFirestore, addDoc,onSnapshot,getDocs,setDoc,doc,query,where,collection,updateDoc, QuerySnapshot, setDocs, Firestore } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable,getStorage,downloadURL } from "firebase/storage";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDs8lcJfdBO2xahG9qRHfQxbZlM_WdEZvw",
  authDomain: "world2opinion.firebaseapp.com",
  databaseURL: "https://world2opinion-default-rtdb.firebaseio.com",
  projectId: "world2opinion",
  storageBucket: "world2opinion.appspot.com",
  messagingSenderId: "872516887044",
  appId: "1:872516887044:web:d2e3e426362b0d47dc8b51",
  measurementId: "G-0KNC73MJ16"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDaFG-jf_KBzJTX4aga_QY-sHVtWNsPG4Q",
//   authDomain: "two-world-sopinion-proj.firebaseapp.com",
//   projectId: "two-world-sopinion-proj",
//   storageBucket: "two-world-sopinion-proj.appspot.com",
//   messagingSenderId: "630623773065",
//   appId: "1:630623773065:web:fa5eefce8db75d4b9c4158"
// };

initializeApp(firebaseConfig)

const db = getFirestore();
const userRef = collection(db, "Users")
const imagesRef=collection(db, "Images")
const storage=getStorage();


let UserId;
let signInEmail;
 
const auth=getAuth();

 

auth.onAuthStateChanged(function (user) {
	if (user) {
		console.log("user id")
		console.log(auth.currentUser.email)
		signInEmail = auth.currentUser.email
    // UserId=auth.currentUser.uid
    

	} else {
		console.log('No user is signed in.')
	}
  const getCurrentUser = query(userRef, where("Email", "==", signInEmail))
  const getCurrentUserData = getDocs(getCurrentUser)

	getCurrentUserData.then((data) => {
		const response =
			data.docs.map(d => ({ id: d.id, ...d.data() }))
		 response.map(results => {
		 	console.log("results")
		 	console.log(results.id)
		 	UserId = results.id
		
		});


  })
})

// //Access the gallery:

 var gallery = document.querySelector('.c-accessgallery');
 var cancel = document.querySelector('.c-cancel');
 var addButton = document.querySelector('.c-splitscreen');
 

gallery.addEventListener('click', function() {


 
  // call the function to access the device gallery
  galleryaccessed();
  gallery.disabled = true;

  });


    // reset the image display
   
cancel.addEventListener('click', function() {

      var container = document.querySelector('.c-image-display');
     container.innerHTML = '';
      });

     

  // function to access the device gallery & fetch the userid and upload the file (img/video) to firebase under particular userid
function galleryaccessed() {


    // check if the browser can get the File API
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // create a new file input element
        var input = document.createElement('input');
        input.type = 'file';
    
        // add an event listener to the file input element
        input.addEventListener('change', function(e) {
          e.preventDefault();
           
          // Display the file
          for (var i = 0; i < input.files.length; i++) {
            var file = input.files[i];
            if (file.type.startsWith('video/')) {
              var video = document.createElement('video');
              video.src = URL.createObjectURL(file);
              video.controls = true;
              video.width = 320;
              video.height = 240;

               // add the video element to the gallery container
          const container = document.querySelector('.c-image-display');
          container.appendChild(video);
        } else if (file.type.startsWith('image/')) {
          var image = document.createElement('img');
          image.src = URL.createObjectURL(file);

          // add the image element to the gallery container
          const container = document.querySelector('.c-image-display');

 if (container.children.length > 0) {
  alert('You can only choose one image.');
} else {
  // add the image element to the gallery container
  container.appendChild(image);


           }
}
            // var image = document.createElement('img');
            // image.src = URL.createObjectURL(file);
      
            // const container = document.querySelector('.c-image-display');
            // container.appendChild(image);
           
            //   console.log("image chosen")
            //   const video = document.createElement('video');
            //   video.src = URL.createObjectURL(file);
            //   video.controls = true;
          
              // add the video element to the gallery container
              // container.appendChild(video);
  // upload the edited image to storage

				const uploadFile = () => {
					const name = new Date().getTime() + file.name
					console.log(name)

					const fileRef = ref(storage, "Images/" + file.name);

					const uploadTask = uploadBytesResumable(fileRef, file);

					uploadTask.on(
						"state_changed",
						(snapshot) => {

							const progress =
								(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
							console.log("upload is " + progress + "% done");
							switch (snapshot.state) {
								case "paused":
									console.log("upload is paused");
									break;
								case "running":
									console.log("upload is running");
									break;
								default:
									break;
							}
						},
						(error) => {
							console.log(error)
						},() => {

              getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                const userRef = collection(db, "Users");
                const postRef = collection(db, "Posts");
                  // create a new post document in the "Posts" subcollection
  
                  // Generate a custom ID for the post
                  const postId = generateId();
    
                const userDocRef = doc(userRef, UserId);
                const postUserDocRef = doc(postRef, UserId);
                const imagesRef = collection(userDocRef, "Posts");
                const likeDislikeRef = collection(postUserDocRef, "UsersLiked");
                const DislikeLikeRef = collection(postUserDocRef, "UsersDisliked");
                const imagesInfo = doc(imagesRef);
                const postinfo = doc(likeDislikeRef);
                const PostInform = doc(DislikeLikeRef);
              // add a subcollection called "Posts" to the user document
  const postsRef = collection(userDocRef, "Posts");
  
  // // Add the post to the Posts collection with the custom ID
  // setDoc(doc(postsRef, postId), {
  //   UserId: UserId,
  //   ImageUrl: downloadURL,
  
  //   Likes: 0,
  //   Dislikes: 0,
  // });

  
  // set & update the docs
  setDoc(imagesInfo, {
    UserId: UserId,
    ImageUrl: downloadURL,
  });
  setDoc(postRef, {
    UserId: UserId,
    ImageUrl: downloadURL,
    postId: postId,
  });
   setDoc(postinfo, {
     Name: "Default",
     Date: Date,
    });
    setDoc(PostInform, {
      Name: "Default",
      Date: Date,
    });
    // Add the post ID to the user's Posts subcollection
    // setDoc(doc(userRef, UserId, "Posts", postId), {
    //   postId: postId,
    // });
    // setDoc(userDocRef, { PostId: postDocRef.id }, { merge: true });
  


              														})
            
              
                                        })
                                      

				}
				file && uploadFile()

        }
      }),
		
        input.click();
       
          }else {
        alert('Your browser does not support the File API');
      }

    }


// Function to generate a custom ID for the post
function generateId() {
  // Generate a random string of characters for the ID
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 10; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

    



// //Live camera 
const cameraContainer = document.querySelector('.c-image-display');
const captureButton = document.querySelector('.c-cameraclick');
const rotateButton = document.querySelector('.c-camerarotate');
const videoOptions = { video: true, audio: true }; // Add audio constraint

// let mediaRecorder = null;
// let recordedChunks = [];

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    const video = document.createElement('video');
    video.srcObject = stream;
    video.autoplay = true;
    cameraContainer.appendChild(video);

  })
  .catch(error => {
    console.error('Error accessing camera:', error);
  });

  

captureButton.addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  canvas.width = cameraContainer.offsetWidth;
  canvas.height = cameraContainer.offsetHeight;
  const video = document.querySelector('video');
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageFile = canvas.toDataURL();
  const image = new Image();
  image.style.width = '100%';
  image.style.height = '100%';
  image.src = imageFile;
  cameraContainer.innerHTML = '';
  cameraContainer.appendChild(image);
  console.log("Photo taken");
  const uploadFile = () => {
    const name = new Date().getTime() + '.png';

    const fileRef = ref(storage, 'Images/' + name);
    const uploadTask = uploadBytesResumable(fileRef, imageFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // Save the downloadURL to Firebase Firestore here
          console.log('Image saved to Firebase:', downloadURL);
          // reference the user document
          const userRef = collection(db, "Users")
          //reference the post document 
          const postRef=collection(db,"Posts")

          const userDocRef = doc(userRef, UserId);               
          const postUserDocRef=doc(postRef, UserId)
          // add a subcollection called "Images" to the user document
          const imagesRef = collection(userDocRef, "Posts");
          const likeDislikeRef=collection(postUserDocRef, "UsersLiked")
          const DislikeLikeRef=collection(postUserDocRef,"UsersDisliked")
    
          const imagesInfo = doc(imagesRef)  
          const postinfo=doc(likeDislikeRef) 
          const  PostInform=doc(DislikeLikeRef) 
      

          //set & update the doc"s"
          setDoc(imagesInfo, {
            UserId:UserId,
            ImageUrl: downloadURL
          });
          setDoc(postRef, {
            UserId:UserId,
            ImageUrl:downloadURL
          });
          setDoc(postinfo,{
            name:"Default"
          });
          setDoc(PostInform,{
            name:"Default",
          });
        })
      }
    )
  }
  uploadFile()
})

//taking a live video option [still need to work on it]
// navigator.mediaDevices.getUserMedia(videoOptions)
//   .then(stream => {
//     const video = document.createElement('video');
//     video.srcObject = stream;
//     video.autoplay = true;
//     cameraContainer.appendChild(video);

//     mediaRecorder = new MediaRecorder(stream);
//     mediaRecorder.ondataavailable = e => {
//       recordedChunks.push(e.data);
//     };
//     mediaRecorder.onstop = () => {
//       const videoBlob = new Blob(recordedChunks, { type: 'video/mp4' });
//       const videoUrl = URL.createObjectURL(videoBlob);
//       const videoElement = document.createElement('video');
//       videoElement.src = videoUrl;
//       cameraContainer.innerHTML = '';
//       cameraContainer.appendChild(videoElement);


//     };
//   }) .catch(error => {
//     console.error('Error accessing camera:', error);
//   });
//   captureButton.addEventListener('click', () => {
//     if (mediaRecorder && mediaRecorder.state === 'inactive') {
//       recordedChunks = [];
//       mediaRecorder.start();
//       console.log('Recording started');
//     } else if (mediaRecorder && mediaRecorder.state === 'recording') {
//       mediaRecorder.stop();
//       console.log('Recording stopped');
//     }
//   });

  //Create a variable to keep track of the currently active camera, and set it to the first available camera by default.
  let activeCameraIndex = 0;

  //Add an event listener to the rotate button that switches between the available cameras.
  rotateButton.addEventListener('click', async () => {
    activeCameraIndex = (activeCameraIndex + 1) % cameras.length;
    await startCamera(cameras[activeCameraIndex]);
  });





  //Split the screen

//To Do's : make the 2 images side by side (display:flex)

// Get references to the button and image container elements
// const addButton = document.querySelector('.c-splitscreen');
const imageContainer = document.querySelector('.c-image-display');
var selectedImageCount = 0;
// Define variables to store the selected images
let image1 = null;
let image2 = null;

// Add a click event listener to the button to trigger the image selection process
addButton.addEventListener('click', () => {
  // Check if the user has already selected two images
  if (image1 !== null && image2 !== null) {
    alert('You have already selected two images');
    return;
  }
 
  // Create an input element to select images from the gallery
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.multiple = true;
  
  // Add an event listener to the input to handle image selection
  input.addEventListener('change', () => {
 
    // Loop through the selected files and display them
    for (let i = 0; i < input.files.length; i++) {
      const file = input.files[i];
      const reader = new FileReader();
      reader.onload = (event) => {
        const image = new Image();
        image.src = event.target.result;
        image.style.maxWidth = '100%';
        image.style.height = '100vh';
        image.style.marginBottom = '10px';
        // image.style.display = 'flex';
        // image.style.flex-direction ; 'row';
        // Display the first image
        if (image1 === null) {
          image1 = image;
          imageContainer.appendChild(image1);
   
        }
        // Display the second image next to the first image
        else if (image2 === null) {
          image2 = image;
          const container = document.createElement('div');
          container.style.display = 'flex';
          container.style.flexWrap = 'rowwrap';
          container.style.width = '50%';
          container.style.height = '100%';
          container.appendChild(image1);
          container.appendChild(image2);
          imageContainer.innerHTML = '';
          imageContainer.appendChild(container);
          // Combine the images into one post and upload to Firebase
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.width = image1.width + image2.width;
          canvas.height = Math.max(image1.height, image2.height);
          context.drawImage(image1, 0, 0);
          context.drawImage(image2, image1.width, 0);
          const dataURL = canvas.toDataURL('image/jpeg', 0.9);
          uploadToFirebase(dataURL);

          // Disable the button after two images have been selected
addButton.disabled = true;
        }
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Trigger the input click event to open the gallery
  input.click();
});
function uploadToFirebase(dataURL, description) {
  console.log(dataURL);
  const uploadFile = () => {
    const name = new Date().getTime() + '.png';

    const fileRef = ref(storage, 'Images/' + name);
    const uploadTask = uploadBytesResumable(fileRef, dataURL);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const userRef = collection(db, "Users")
          const postRef = collection(db, "Posts")

          const userDocRef = doc(userRef, UserId);               
          const postUserDocRef = doc(postRef, UserId)
          const imagesRef = collection(userDocRef, "Posts");
          const likeDislikeRef = collection(postUserDocRef, "UsersLiked")
          const dislikeLikeRef = collection(postUserDocRef, "UsersDisliked")
    
          const imagesInfo = doc(imagesRef)  
          const postInfo = doc(postRef, name)
          const likeDislikeInfo = doc(likeDislikeRef, UserId) 
          const dislikeLikeInfo = doc(dislikeLikeRef, UserId) 

         
          setDoc(imagesInfo, {
            UserId: UserId,
            ImageUrl: downloadURL,
            Description: '' // set to empty string
          });
          
          setDoc(postInfo, {
            UserId: UserId,
            ImageUrl: downloadURL,
            Description: '' ,// set to empty string
            Likes: 0,
            Dislikes: 0
          });

          setDoc(likeDislikeInfo, {
            Name: "Default"
          });

          setDoc(dislikeLikeInfo, {
            Name: "Default"
          });

          console.log('Image saved to Firebase:', downloadURL);
        })
      }
    )
  }
  uploadFile()
}


//Adding text 
const addTextButton =document.querySelector(".c-text");
const textContainer =document.querySelector(".text-container");
//Add a click event listener to the 
addTextButton.addEventListener('click', () => {
  // Set the text content of the paragraph element 
  console.log("clicked");
  textContainer.innerHTML=`<input type="text" class="ctextinput" id="ctextinput" name="ctextinput">
  <button class="c-submit" type="submit"></button> `;
  // textContainer.textContent = 'This text was added by clicking the button!';
  var form=document.querySelector(".c-form");
   var textValue= document.querySelector(".c-text-input").value;
   textContainer.addEventListener("submit", (event)=> 
   { event.preventDefault();
     console.log('text entered');
 var textValue=textContainer.ctextinput.value; 
 console.log(textValue); 
 textContainer.innerHTML= textValue;
})});

