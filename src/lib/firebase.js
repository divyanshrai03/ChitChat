import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyClfAoUdZ6Kgd1r15YsbJAHsorefXDEZFw",
  authDomain: "reactchatapp-d6c27.firebaseapp.com",
  projectId: "reactchatapp-d6c27",
  storageBucket: "reactchatapp-d6c27.appspot.com",
  messagingSenderId: "284067328102",
  appId: "1:284067328102:web:4cd841217ad6b081e2bda7",
  measurementId: "G-Y3ZFHSJESS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();