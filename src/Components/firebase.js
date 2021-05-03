// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDIKQUg6mCS27FLKc1fggttPMGPxRMOcW4",
    authDomain: "twitter-clone-aae2d.firebaseapp.com",
    projectId: "twitter-clone-aae2d",
    storageBucket: "twitter-clone-aae2d.appspot.com",
    messagingSenderId: "756688565218",
    appId: "1:756688565218:web:63760992aecb913ed63fbb",
    measurementId: "G-XBMEEEJVNK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
  
export default db;