import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-d9a04.firebaseapp.com",
  projectId: "reactchat-d9a04",
  storageBucket: "reactchat-d9a04.appspot.com",
  messagingSenderId: "182093046445",
  appId: "1:182093046445:web:7188caf0ca6e4aeaa59c24"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()