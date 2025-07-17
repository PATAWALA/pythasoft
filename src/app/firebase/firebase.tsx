// firebase-config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMg8qZiVum4EiTWjZY4GpZ67-0rfpKMTQ",
  authDomain: "pythasofth.firebaseapp.com",
  projectId: "pythasofth",
  storageBucket: "pythasofth.firebasestorage.app",
  messagingSenderId: "914238016493",
  appId: "1:914238016493:web:3925a21039a13d878f35e4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
