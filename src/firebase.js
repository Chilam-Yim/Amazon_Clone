// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; 


const firebaseConfig = {
    apiKey: "yourAPIKey",
    authDomain: "yourAuthDomain",
    projectId: "yourProjectId",
    storageBucket: "yourStorageBucket",
    messagingSenderId: "yourMessagingSenderId",
    appId: "yourAppId",
    measurementId: "yourMeasurementId"
  };

//we have to initialize the app and db first

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  //firestore is the real-time db in firebase
  //this wil go ahead and grant the access to firestore

  
  const auth = firebase.auth();
  //this enable us to handle all the sign in stuff

  export {db,auth};
