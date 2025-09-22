// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Firebase ka config (ye apne project settings se copy karna hai)
const firebaseConfig = {
  apiKey: "AIzaSyCgJC3-WGuINVtIv7hRdfccy6i7hTAJP10",
  authDomain: "skin-vision-app.firebaseapp.com",
  projectId: "skin-vision-app",
  storageBucket: "skin-vision-app.appspot.com",
  messagingSenderId: "267548349626",
  appId: "1:267548349626:web:18d1258ef15347f69c1e83",
  measurementId: "G-TB5XL8NK89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth export karte hai
export const auth = getAuth(app);
