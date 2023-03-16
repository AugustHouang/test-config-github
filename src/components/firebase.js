// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnRUyFtaGyUFdxDfeMtfsJZwsXs5d3ar4",
  authDomain: "fer201m-d44f1.firebaseapp.com",
  projectId: "fer201m-d44f1",
  storageBucket: "fer201m-d44f1.appspot.com",
  messagingSenderId: "1073431348376",
  appId: "1:1073431348376:web:c108bc826d3b178f1a7ced",
  measurementId: "G-V27CY4TYZ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
