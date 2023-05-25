// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkcm4PFs2kfDRUX__hkYWZrUuoagmMEAw",
  authDomain: "std-mgt-sys.firebaseapp.com",
  projectId: "std-mgt-sys",
  storageBucket: "std-mgt-sys.appspot.com",
  messagingSenderId: "407804075347",
  appId: "1:407804075347:web:dac6cb5682588fe5ce55a6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);