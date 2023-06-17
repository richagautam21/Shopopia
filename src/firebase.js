import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBPEFPkrLJkeTbOB-XrbhswLCymFvksOBs",
    authDomain: "shopopia.firebaseapp.com",
    projectId: "shopopia",
    storageBucket: "shopopia.appspot.com",
    messagingSenderId: "141637501389",
    appId: "1:141637501389:web:b17417a98a9ec58b908484",
    measurementId: "G-4JNFH3VHD2"
  };
  

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };