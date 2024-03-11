import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB_rIsAstlTz392iH529rb-IneSZjUSqMc",
    authDomain: "crud-44f3f.firebaseapp.com",
    projectId: "crud-44f3f",
    storageBucket: "crud-44f3f.appspot.com",
    messagingSenderId: "312171886563",
    appId: "1:312171886563:web:45b1ecf93bb58f519292d6"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore()