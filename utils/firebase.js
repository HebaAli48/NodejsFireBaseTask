const firebase = require("firebase");
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd_x94XAJI7al-90bGZxZMA10CpO12XOI",
  authDomain: "zetatonback.firebaseapp.com",
  projectId: "zetatonback",
  storageBucket: "zetatonback.appspot.com",
  messagingSenderId: "1003278189560",
  appId: "1:1003278189560:web:6170f0cf0aeecbf72f4c0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig); //initialize firebase app
module.exports = { firebase }; //export the app
