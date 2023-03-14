// importing the firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {
  getAuth, signInWithEmailAndPassword, emailVerified
} from "firebase/auth"

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

// initialize authorization
const auth = getAuth();
console.log(auth)
// geting the firestore database
const db = getFirestore();



const loginUser = document.querySelector('.l-form');
console.log(loginUser)




//login the user

loginUser.addEventListener('submit', (event) => {
  event.preventDefault()
  const email = loginUser.email.value
  const password = loginUser.psw.value
  console.log(email, password)
  console.log(auth.currentUser)
  if (auth.currentUser.emailVerified) { //This will return true or false
    console.log('email is verified')
    signInWithEmailAndPassword(auth, email, password)
      .then((login) => {
        console.log('user logged:', login.user)
        window.location.href="../dist/discover.html"
        loginUser.reset()
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  else {
    console.log('email not verified')
    alert("Please verify the email")
  }

})


