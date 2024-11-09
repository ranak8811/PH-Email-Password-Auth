// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoxZ5o5DaFE93fJCZdIM_Y0o2UoRnQcTM",
  authDomain: "email-password-auth-55e87.firebaseapp.com",
  projectId: "email-password-auth-55e87",
  storageBucket: "email-password-auth-55e87.firebasestorage.app",
  messagingSenderId: "194109577128",
  appId: "1:194109577128:web:019f17f01ae7a0156b6f9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
