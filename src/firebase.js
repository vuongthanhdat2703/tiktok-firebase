
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIkm8O7Bf8URQG-jSdQO05lrRhzqDrPtY",
  authDomain: "tiktokclone-e69ce.firebaseapp.com",
  projectId: "tiktokclone-e69ce",
  storageBucket: "tiktokclone-e69ce.appspot.com",
  messagingSenderId: "59831133285",
  appId: "1:59831133285:web:bd81f127436c91daf0928c"
};

// Initialize Firebase
const app=  firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export default db;