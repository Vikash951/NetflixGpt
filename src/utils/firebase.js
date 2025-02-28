// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRkwMUneVQz_TV2FJgaOai566kRDWHd3s",
  authDomain: "netflixgpt-d9844.firebaseapp.com",
  projectId: "netflixgpt-d9844",
  storageBucket: "netflixgpt-d9844.firebasestorage.app",
  messagingSenderId: "676391528067",
  appId: "1:676391528067:web:91c27d51599c8061695db6",
  measurementId: "G-7HQBV8E8X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();