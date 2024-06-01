// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmYhZ3TiThz4Cy49pBSxfeKd3SQ1foWaU",
  authDomain: "ventuno-76fc1.firebaseapp.com",
  projectId: "ventuno-76fc1",
  storageBucket: "ventuno-76fc1.appspot.com",
  messagingSenderId: "388533272609",
  appId: "1:388533272609:web:891924f3adb20d3ecca360",
  measurementId: "G-08LBTCV273"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(firebaseApp);

export { storage };