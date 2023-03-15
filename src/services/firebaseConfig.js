// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfSwe-LG2TZO0ILGaVSKYrjUzCGIoWi5U",
  authDomain: "efood-d31f1.firebaseapp.com",
  projectId: "efood-d31f1",
  storageBucket: "efood-d31f1.appspot.com",
  messagingSenderId: "319796908843",
  appId: "1:319796908843:web:e204584ed2e09bcd62eb6e",
  measurementId: "G-C5WS04L8T9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };
