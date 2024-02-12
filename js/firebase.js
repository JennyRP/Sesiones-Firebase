import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKfU_MzlVQfNtTQJZ8DNhSdZN79v2Kgyg",
  authDomain: "web40-d58e7.firebaseapp.com",
  projectId: "web40-d58e7",
  storageBucket: "web40-d58e7.appspot.com",
  messagingSenderId: "1085362576594",
  appId: "1:1085362576594:web:2950acf67d7eb50f7ae10b",
  measurementId: "G-15GG9GK7ZY"
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase

var auth = getAuth(app);

export { auth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut};