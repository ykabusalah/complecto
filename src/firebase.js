 
 import * as firebase from "firebase";
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCZd6rEyw8PUVZguWqC6tGeRYiQceQCUiY",
    authDomain: "reactcontact-1815b.firebaseapp.com",
    databaseURL: "https://reactcontact-1815b.firebaseio.com",
    projectId: "reactcontact-1815b",
    storageBucket: "reactcontact-1815b.appspot.com",
    messagingSenderId: "296857742159",
    appId: "1:296857742159:web:ca5617f7e7d00dfb7cf33a",
    measurementId: "G-2YV2DZ8GED"
  };
  // Initialize Firebase
  let firedb=firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  export default firedb.database().ref();