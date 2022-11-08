// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {firebase} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd406Xz4IUFWbcWWTxnn0bmvCBu0YptVI",
  authDomain: "chatorium-9b2e8.firebaseapp.com",
  projectId: "chatorium-9b2e8",
  storageBucket: "chatorium-9b2e8.appspot.com",
  messagingSenderId: "577329219778",
  appId: "1:577329219778:web:7ca0e12ae92addee67135b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);