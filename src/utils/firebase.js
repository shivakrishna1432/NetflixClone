// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfNiGWKwVLuzLyjBN9vpnefUDq8Md5pjg",
  authDomain: "netflix-gpt-d2bfb.firebaseapp.com",
  projectId: "netflix-gpt-d2bfb",
  storageBucket: "netflix-gpt-d2bfb.appspot.com",
  messagingSenderId: "513613661417",
  appId: "1:513613661417:web:9d37733bfa404cd7175c78",
  measurementId: "G-FWMRNQ7CRZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
