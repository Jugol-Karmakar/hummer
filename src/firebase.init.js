// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6fnz7q6vfJN3gm7t8AScwXBFcQg7DP48",
  authDomain: "car-dealership-f966c.firebaseapp.com",
  projectId: "car-dealership-f966c",
  storageBucket: "car-dealership-f966c.appspot.com",
  messagingSenderId: "51627774856",
  appId: "1:51627774856:web:c4b557e147898c6be4e03d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
