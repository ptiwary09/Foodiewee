// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth';
// Initialize Firebase Auth
// Assuming `app` is your initialized Firebase app

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC25zYfIuZPqaLioIhUGOCCmz-nAhmxh4Q",
  authDomain: "food-delivery-cc6e8.firebaseapp.com",
  projectId: "food-delivery-cc6e8",
  storageBucket: "food-delivery-cc6e8.appspot.com",
  messagingSenderId: "933860504505",
  appId: "1:933860504505:web:41a0713771fb59f80d3c68",
  measurementId: "G-2QF3R16WD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Auth
const auth = getAuth(app); 

export {auth} // Assuming `app` is your initialized Firebase app
