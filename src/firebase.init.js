// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe39FlM5W4swR1QWyqeMYJIZNIjN1KCVY",
  authDomain: "assignment-10-b30f6.firebaseapp.com",
  projectId: "assignment-10-b30f6",
  storageBucket: "assignment-10-b30f6.appspot.com",
  messagingSenderId: "444032484518",
  appId: "1:444032484518:web:d873bcc42cf8a39e162067",
  measurementId: "G-Y70WDMQ1TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;