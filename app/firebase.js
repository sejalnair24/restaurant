
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKQ2TqXZ_cFRsVVXOprBuvKh-NlpG9eTw",
  authDomain: "restaurant-33902.firebaseapp.com",
  projectId: "restaurant-33902",
  storageBucket: "restaurant-33902.firebasestorage.app",
  messagingSenderId: "30882895865",
  appId: "1:30882895865:web:63948aa5214eb2cb63cf28"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);