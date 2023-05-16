// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; 


const firebaseConfig = {
    apiKey: "AIzaSyAUW8_U1l126GFVb-ikND2qZd3g-jiMb7Y",
    authDomain: "clone-ef99c.firebaseapp.com",
    projectId: "clone-ef99c",
    storageBucket: "clone-ef99c.appspot.com",
    messagingSenderId: "996216883305",
    appId: "1:996216883305:web:6f1f587869cb2cc6c07af8",
    measurementId: "G-QVPZSZGYZ4"
  };

//we have to initialize the app and db first

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  //firestore is the real-time db in firebase
  //this wil go ahead and grant the access to firestore

  
  const auth = firebase.auth();
  //this enable us to handle all the sign in stuff

  export {db,auth};