import firebase from "firebase";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBZ1VIC7ASHI6c-9JmRW4zOWBcK0z0iAPo",
  authDomain: "portfolio-vlad-f7b4d.firebaseapp.com",
  databaseURL: "https://portfolio-vlad-f7b4d.firebaseio.com",
  projectId: "portfolio-vlad-f7b4d",
  storageBucket: "portfolio-vlad-f7b4d.appspot.com",
  messagingSenderId: "314594388528",
  appId: "1:314594388528:web:9cfc1e3da2d13e03e6dbf5",
});

let db = firebase.firestore();
let storage = firebase.storage();
export { db, storage };
