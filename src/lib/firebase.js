// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-d9a04.firebaseapp.com",
  projectId: "reactchat-d9a04",
  storageBucket: "reactchat-d9a04.appspot.com",
  messagingSenderId: "182093046445",
  appId: "1:182093046445:web:7188caf0ca6e4aeaa59c24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);