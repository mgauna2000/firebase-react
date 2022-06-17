// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNWic2CAC35xUD_I25T5hv9MopI_SG1wU",
  authDomain: "ecommerce-otaku.firebaseapp.com",
  projectId: "ecommerce-otaku",
  storageBucket: "ecommerce-otaku.appspot.com",
  messagingSenderId: "36060753600",
  appId: "1:36060753600:web:8839581af22344735f4725"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db