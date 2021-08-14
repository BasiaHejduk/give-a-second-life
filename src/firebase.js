import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

 var firebaseConfig = {
    apiKey: "AIzaSyDmiGqVRfdQQV-WsiomKJZdApsJ9dimyXA",
    authDomain: "give-a-second-life.firebaseapp.com",
    projectId: "give-a-second-life",
    storageBucket: "give-a-second-life.appspot.com",
    messagingSenderId: "644480217003",
    appId: "1:644480217003:web:39bfc37ed07c130a136cee"
  };

const fire = firebase.initializeApp(firebaseConfig);
export default fire;


 