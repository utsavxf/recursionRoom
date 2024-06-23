
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB5CpaBG5ISGIAzRbf9Cri9TNkz7WOukTo",
  authDomain: "recursion-room.firebaseapp.com",
  projectId: "recursion-room",
  storageBucket: "recursion-room.appspot.com",
  messagingSenderId: "985990276417",
  appId: "1:985990276417:web:255e9856323223b1812dc0"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore();
export const auth =getAuth();
export const storage =getStorage(); //for saving images 