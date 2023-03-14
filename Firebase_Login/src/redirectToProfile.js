var urlParams = new URLSearchParams(window.location.search)
var userID = urlParams.get('moveTouser')


import { initializeApp } from "firebase/app";
import { getDocs, setDoc, doc, getFirestore, query, where, collection, getDoc, updateDoc, addDoc, getCountFromServer, length, documentId } from 'firebase/firestore';
import { getAuth } from "firebase/auth"
import { getDatabase, once } from "firebase/database"
import { getDownloadURL, getStorage, uploadBytesResumable, ref } from "firebase/storage"

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
const userRef = collection(db, "Users")
const postRef = collection(db, "Posts")

const storage = getStorage();



let Name;
let UserName;
let ProfilePic;
let UserId;
let moveTouser;
// display data on profile page
const getCurrentUserData = getDocs(userRef)

getCurrentUserData.then((data) => {

	const response =
		data.docs.map(d => ({ id: d.id, ...d.data() }))
	response.map(results => {
		if(results.id==userID){
			Name = results.FullName;
		UserName = results.UserName;
		ProfilePic = results.ProfilePic
		UserId = results.id
		}
	});
	// display name
	let name = document.querySelector(".p-fullname");
	name.innerHTML = Name;



	//displey username
	let username = document.querySelector(".p-username")

	username.innerHTML = UserName

	let profilePic = document.querySelector(".p-profile-display")
	// change profile pic
	profilePic.src = ProfilePic;
	// accesing the images inside the users
	const imagesRef = collection(db, "Posts");
	const usercollection = doc(userRef, UserId)

	const subImagesCollection1 = collection(usercollection, "Posts")
	
	const friendsCollection = collection(usercollection, "Friends")



	// displaying the count for posts 
	let numberOfPosts = document.querySelector(".p-numberOfPosts");

	const imagesData = getDocs(subImagesCollection1)
	imagesData.then((data) => {
		const data2 = data.docs.map(d => ({ id: d.id, ...d.data() })
		)
		data2.map((e) => {
			const imageElement = document.createElement('img');
			imageElement.src = e.url;
			document.querySelector('.p-post-container').appendChild(imageElement);
			imageElement.addEventListener("click", element => {

/////////////////////////code to display result card................................
				const postData=getDocument("Posts", e.id)
				postData.then((data) => {
						let imgContainer = document.querySelector('.p-clickedpost-container');
						imgContainer.innerHTML = `		
						<svg class="p-two-logo" id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.81 65.81"><defs><style>.cls-1{fill:#fdce8d;}.cls-2,.cls-3{fill:#fff;}.cls-4{fill:#194789;}.cls-5{fill:none;}.cls-5,.cls-3{stroke-linecap:round;}.cls-5,.cls-3,.cls-6{stroke:#fff;stroke-miterlimit:10;}.cls-3{stroke-width:.75px;}.cls-6{fill:#f7961d;stroke-width:3px;}</style></defs><g id="Layer_1-2"><g><g><rect class="cls-4" width="65.81" height="65.81" rx="12" ry="12"/><circle class="cls-6" cx="32.91" cy="28.19" r="16.73"/><circle class="cls-1" cx="32.91" cy="32.41" r="10.37"/><line class="cls-5" x1="25.83" y1="38.25" x2="39.99" y2="38.25"/><line class="cls-5" x1="32.84" y1="38.95" x2="32.98" y2="49.21"/><rect class="cls-2" x="27.86" y="48.53" width="10.1" height="2.47" rx="1.24" ry="1.24"/><rect class="cls-2" x="29.31" y="52.33" width="7.19" height="2.41" rx="1.2" ry="1.2"/></g><path class="cls-3" d="m37.51,30.7l-.41-.28v.49c-.02.06-.03.11-.03.17,0,0,0,0,0,0,.18.11.28.14.49.33.84.74,1.33,1.8,1.33,2.92,0,2.16-1.76,3.92-3.92,3.92-.51,0-1-.1-1.45-.28,1.14-.81,1.89-2.14,1.89-3.64,0-.23-.03-.47-.08-.77l-.04-.21h-.21s.22,0,.21,0c-.37-1.44-1.17-2.56-2.3-2.56-.84,0-1.45.61-1.96,1.47l-.1.19c-.28.6-.42,1.23-.42,1.88,0,1.5.75,2.83,1.89,3.64-.45.18-.94.28-1.45.28-2.16,0-3.92-1.76-3.92-3.92,0-1.16.31-1.82,1.08-2.71.36-.43.6-.54.77-.66,0-.04-.02-.08-.03-.13l-.06-.43-.35.24c-1.22.83-1.94,2.21-1.94,3.68,0,2.46,2,4.45,4.45,4.45.72,0,1.4-.18,2-.48.6.31,1.28.48,2,.48,2.46,0,4.45-2,4.45-4.45,0-1.44-.72-2.81-1.92-3.64Zm-6.46,3.64c0-.42.07-.84.21-1.24.37-.99,1.02-1.76,1.73-1.76.85,0,1.91,1.46,1.95,3s-.86,2.69-1.97,3.36c-1.14-.69-1.92-1.93-1.92-3.36Z"/></g></g></svg>
						<img class="p-post-active" src="${data.url}" alt="img" title="image">

						<div class="p-results">
							<p class="p-results-heading">Results</p>
							<div class="p-results-value">
						
							<p>Date Posted:</p>
							<p></p>
				
						</div>`;


						var clickEnlarged = document.querySelector(".p-post-active");

						clickEnlarged.addEventListener("click", function () {

							imgContainer.innerHTML = "";
						})


					})
				})


			})
			// displaying the frinds
			const friendsData = getDocs(friendsCollection)
			friendsData.then((data) => {
				const data2 = data.docs.map(d => ({ id: d.id, ...d.data() })
				)
				data2.map((element) => {

					const docsUser = getDocument("Users", element.friendID)
					docsUser.then((userData) => {

						const imageElement = document.createElement('img');
						const divElement = document.createElement('div');
						const textField = document.createElement('a');
						textField.textContent = userData.UserName
						imageElement.src = userData.ProfilePic;
						divElement.appendChild(imageElement)
						divElement.appendChild(textField)
						const otherUserDiv=document.querySelector('.p-friends-list').appendChild(divElement);
		

					goToUserProfile(otherUserDiv)
					function goToUserProfile(element) {
						element.addEventListener("click", e => {
							const clickedUserName = e.target.innerHTML
							const postData = query(userRef, where("UserName", "==", clickedUserName))
							const p = getDocs(postData)
							p.then((data) => {
								const response =
									data.docs.map(d => ({ id: d.id, ...d.data() }))
								response.map(results => {
									moveTouser = results.id
									window.location.href = "../dist/redirectToProfile.html?moveTouser=" + encodeURIComponent(moveTouser)

								})
							})
						})
					}
					})






					

				})
				// displaying the count for friends

				let numberOfFriends = document.querySelector(".p-numberOfFriends");

				getCountFromServer(friendsCollection)
					.then((snap) => {
						numberOfFriends.innerHTML = snap.data().count
					});
					// displaying the count for posts 
		let numberOfPosts = document.querySelector(".p-numberOfPosts");
		getCountFromServer(subImagesCollection1)
			.then((snap) => {
				numberOfPosts.innerHTML = snap.data().count
			});
		

			});
		})
			// displaying the count for friends

			let numberOfFriends = document.querySelector(".p-numberOfFriends");

			getCountFromServer(friendsCollection)
				.then((snap) => {
					numberOfFriends.innerHTML = snap.data().count
				});
	// displaying the count for posts
		getCountFromServer(subImagesCollection1)
		.then((snap) => {
			numberOfPosts.innerHTML = snap.data().count
		});
		})


	




/////////////////////////code to add friend................................


const addFriend = document.querySelector(".p-add-remove")
addFriend.addEventListener("click", (event) => {

	auth.onAuthStateChanged(function (user) {
		if (user) {
			signInEmail = auth.currentUser.email
			const getCurrentUser = query(userRef, where("Email", "==", signInEmail))
			const getCurrentUserData = getDocs(getCurrentUser)

			getCurrentUserData.then((data) => {
				const response =
					data.docs.map(d => ({ id: d.id, ...d.data() }))
				response.map(results => {
					const signedUserID = results.id

					const docRef = doc(userRef, signedUserID);
					const imagesRef = collection(docRef, "Friends");

					addDoc(imagesRef, {
						friendID: userID,
					})
				})
			})

		} else {
			console.log('No user is signed in.')
		}
	})
})
async function getDocument(coll, id) {
	const snap = await getDoc(doc(db, coll, id))

	return snap.data()
}