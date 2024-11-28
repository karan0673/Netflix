// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8IKbuTlaLLKFiHaH9R02c9A0IcN8CiKw",
  authDomain: "netflix-ai-754b0.firebaseapp.com",
  projectId: "netflix-ai-754b0",
  storageBucket: "netflix-ai-754b0.firebasestorage.app",
  messagingSenderId: "419393418400",
  appId: "1:419393418400:web:a3f34525932640f9f3c5c5",
  measurementId: "G-H248R8R5JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);