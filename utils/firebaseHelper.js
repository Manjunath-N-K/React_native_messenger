// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKc2TgD89xkwjoYVqizr3huJzKk4CxXrY",
    authDomain: "whatsapp-1f665.firebaseapp.com",
    projectId: "whatsapp-1f665",
    storageBucket: "whatsapp-1f665.appspot.com",
    messagingSenderId: "220116737345",
    appId: "1:220116737345:web:92382419b8dd1a644a15c0",
    measurementId: "G-K7YD1JT0YZ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
}