import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCru2XHGDyJh4th_xQyv2jrdldGzahZktA",
  authDomain: "instagram-clone-aca1e.firebaseapp.com",
  databaseURL: "https://instagram-clone-aca1e.firebaseio.com",
  projectId: "instagram-clone-aca1e",
  storageBucket: "instagram-clone-aca1e.appspot.com",
  messagingSenderId: "785928086312",
  appId: "1:785928086312:web:fb2e893e83b8a7f4bc661d",
});

let db = firebaseApp.firestore();
let auth = firebase.auth();
let storage = firebase.storage();

export { db, auth, storage };
