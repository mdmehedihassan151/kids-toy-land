// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHMPtM8hzrj3pcJifEu208m8sHmnRX1rE",
  authDomain: "kids-toys-land.firebaseapp.com",
  projectId: "kids-toys-land",
  storageBucket: "kids-toys-land.firebasestorage.app",
  messagingSenderId: "195068274619",
  appId: "1:195068274619:web:4105ffec4f15083f17069e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);