import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyASxh1zy6uq8VW9rqxXo2WT7Cm-RsXiBPw',
  authDomain: 'react-notas-app.firebaseapp.com',
  projectId: 'react-notas-app',
  storageBucket: 'react-notas-app.appspot.com',
  messagingSenderId: '376218288362',
  appId: '1:376218288362:web:bdc231f4d3008b967a9793',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
