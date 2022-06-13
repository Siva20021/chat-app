// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTxyQG2GPToShgoZyIbypNMQrXKe9D4Cs",
  authDomain: "chat-app-9dd48.firebaseapp.com",
  projectId: "chat-app-9dd48",
  storageBucket: "chat-app-9dd48.appspot.com",
  messagingSenderId: "256964310575",
  appId: "1:256964310575:web:f04404a940208c4511b8da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export