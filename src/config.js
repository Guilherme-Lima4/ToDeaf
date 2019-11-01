import Firebase from 'firebase';
let firebaseConfig = {
    apiKey: "AIzaSyAj-DknJT3jofC_HWzxNouBO5Azdhy20YA",
    authDomain: "todeaf-dc7f3.firebaseapp.com",
    databaseURL: "https://todeaf-dc7f3.firebaseio.com",
    projectId: "todeaf-dc7f3",
    storageBucket: "todeaf-dc7f3.appspot.com",
    messagingSenderId: "350849477626",
    appId: "1:350849477626:web:1e384ddccd6e9822261243",
    measurementId: "G-0L9D7FDVSY"
  };
  let app = Firebase.initializeApp(firebaseConfig);
  export const db = app.database();