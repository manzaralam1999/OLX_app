import * as firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'



var firebaseConfig = {
    apiKey: "AIzaSyAidsnxaFpzrct5pJthHUxajjiqFigHlN8",
    authDomain: "olx-web-547dd.firebaseapp.com",
    databaseURL: "https://olx-web-547dd.firebaseio.com",
    projectId: "olx-web-547dd",
    storageBucket: "olx-web-547dd.appspot.com",
    messagingSenderId: "437187498116",
    appId: "1:437187498116:web:9026d5b1082b24e90c72d1",
    measurementId: "G-R77QJTJQHY"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);