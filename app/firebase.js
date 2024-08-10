// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpZeHwxCrEYrEeyon69Pnoki_vuxYbaCc",
  authDomain: "inventory-management-402e9.firebaseapp.com",
  projectId: "inventory-management-402e9",
  storageBucket: "inventory-management-402e9.appspot.com",
  messagingSenderId: "237719642955",
  appId: "1:237719642955:web:ead3ac73b05fde2b203ece",
  measurementId: "G-F06H47E6CP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export  {firestore}