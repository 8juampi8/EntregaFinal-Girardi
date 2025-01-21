// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTFIl_Kxyam93cqFMqlJDw_X6Dh7IgZ50",
  authDomain: "tabularasa-ecommerce.firebaseapp.com",
  projectId: "tabularasa-ecommerce",
  storageBucket: "tabularasa-ecommerce.firebasestorage.app",
  messagingSenderId: "784929587008",
  appId: "1:784929587008:web:f84a18c420adb28b4704a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db