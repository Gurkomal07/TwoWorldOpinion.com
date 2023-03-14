console.log('Settings js loaded');

import { initializeApp} from "firebase/app";
import { getDocs, setDoc,doc, getFirestore, query, where, collection, updateDoc } from 'firebase/firestore';
import {getAuth} from "firebase/auth"
import {getDatabase,  ref} from "firebase/database"

// Your web app's Firebase configuration
// Your web app's Firebase configuration

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
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// geting the firestore database
const db = getFirestore();
// getting signed user credentials
let signInEmail;
const colRef = collection(db, "Users")


let Name;
let UserName;
let ProfilePic;
let UserId;
let Age;
let City;
let postalCode;
let Gender;



auth.onAuthStateChanged(function (user) {
	if (user) {
	  console.log("user id")
	  console.log(auth.currentUser.email)
	  signInEmail = auth.currentUser.email
  
	} else {
	  console.log('No user is signed in.')
	}


    const getCurrentUser = query(colRef, where("Email", "==", signInEmail))


	const getCurrentUserData = getDocs(getCurrentUser)

    getCurrentUserData.then((data) => {
		const response =
			data.docs.map(d => ({ id: d.id, ...d.data() }))
		response.map(results => {
			console.log("results")
			console.log(results)
            console.log(results.FullName);

			Name = results.FullName;
			UserName = results.UserName;
			Age=results.Age;
			City=results.City;
			postalCode=results.PostalCode;
			Gender=results.Gender;
			ProfilePic = results.ProfilePic
			UserId = results.id

			console.log(ProfilePic)

			var fname = document.querySelector(".s-fullName");
			var uname = document.querySelector(".s-username");
			var age = document.querySelector(".s-Age");
			var city = document.querySelector(".City");
			var postal_code = document.querySelector(".postalCode");
			var profile= document.querySelector(".s-profile-photo");
			var gender = document.querySelector(".r-dropdown")

			profile.src=ProfilePic;			

			fname.placeholder=Name;
			fname.value=Name;
			uname.placeholder=UserName;
			uname.value=UserName;

			age.value=Age;
			city.value=City;
			postal_code.value=postalCode;
			gender.value=Gender;


			console.log(fname.placeholder);
			
		});

	})


});


const profileEditForm = document.querySelector('.s-form')
console.log(profileEditForm)

profileEditForm.addEventListener('submit', (event) => {
	event.preventDefault()

	
	
	const docRef = doc(colRef, UserId);
	console.log('submit button clicked')


	updateDoc(docRef, {
		UserName: profileEditForm.username.value,
		FullName: profileEditForm.fullName.value,
		Age: profileEditForm.age.value,
		City: profileEditForm.City.value, 
		postalCode: profileEditForm.postalCode.value,
		Gender: profileEditForm.gender.value
	  })
	  .then(() => {
		console.log("Profile updated successfully!");
	  })
	  .catch((error) => {
		console.error("Error updating Profile: ", error);
	  });

})


const deletebutton = document.querySelector('.s-delete-button');

deletebutton.addEventListener('click', function() {
	// code to run when the button is clicked
	console.log('delete button is clicked')

	

	auth.currentUser.delete().then(function() {
		// User deleted successfully
		console.log('user deleted successfully')
		window.location.href = '/Firebase_Login/dist';
	
	  }).catch(function(error) {
		// An error occurred while deleting the user
		console.log(error.message)
	  });
	


  });

const logoutbutton = document.querySelector('.s-logout-button');

logoutbutton.addEventListener('click', function() {
	// code to run when the button is clicked
	console.log('logout button is clicked')
	// auth.signOut()

	auth.signOut().then(() => {
		// Sign-out successful.
		console.log("the user is log out!!")
		window.location.href = '/Firebase_Login/dist';

	  }).catch((error) => {
		// An error happened.
		console.log(error.message);
	  });

  });





