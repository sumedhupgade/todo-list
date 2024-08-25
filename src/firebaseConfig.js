// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore if needed
import { getAuth } from "firebase/auth"; // Import Auth if needed
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDvvPpSz1kNR_aDn9TJ1aAwhYrsEPQcrpM",
  authDomain: "manage-todo-app.firebaseapp.com",
  projectId: "manage-todo-app",
  storageBucket: "manage-todo-app.appspot.com",
  messagingSenderId: "116797045828",
  appId: "1:116797045828:web:fac77f0c5d4c7ab017d011",
  measurementId: "G-DW5M1ES047",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
