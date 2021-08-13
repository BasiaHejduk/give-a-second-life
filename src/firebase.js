// import firebase from "firebase/app";
// import 'firebase/firestore';
import firebase from "firebase";

 var firebaseConfig = {
    apiKey: "AIzaSyDmiGqVRfdQQV-WsiomKJZdApsJ9dimyXA",
    authDomain: "give-a-second-life.firebaseapp.com",
    projectId: "give-a-second-life",
    storageBucket: "give-a-second-life.appspot.com",
    messagingSenderId: "644480217003",
    appId: "1:644480217003:web:39bfc37ed07c130a136cee"
  };

firebase.initializeApp(firebaseConfig);

  export default firebase;