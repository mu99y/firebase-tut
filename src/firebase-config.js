// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "copy all the values from firebase and use use your api key",
  authDomain: "copy all the values from firebase and use use your auth domain",
  projectId: "copy all the values from firebase and use yours",
  storageBucket: "copy all the values from firebase and use yours",
  messagingSenderId: "copy all the values from firebase and use yours",
  appId: "copy all the values from firebase and use yours",
  measurementId: "copy all the values from firebase and use yours"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
