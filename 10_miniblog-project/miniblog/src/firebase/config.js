// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getFirestore from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMUVBK6X9XPSHjXDhkxBW-0VNYy05-6B4",
  authDomain: "miniblog-7dbca.firebaseapp.com",
  projectId: "miniblog-7dbca",
  storageBucket: "miniblog-7dbca.appspot.com",
  messagingSenderId: "306952017193",
  appId: "1:306952017193:web:b7c3860cc734346b5b5338"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };