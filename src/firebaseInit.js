import firebase from 'firebase/app';
import 'firebase/auth'; // shi
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB5QuHFIgicUFg2FaCs6d1Sf-fN2m7GsIE',
  authDomain: 'belcorp-lh.firebaseapp.com',
  databaseURL: 'https://belcorp-lh.firebaseio.com',
  projectId: 'belcorp-lh',
  storageBucket: 'belcorp-lh.appspot.com',
  messagingSenderId: '714488790502',
  appId: '1:714488790502:web:a7a01f352bc0739fa36a27',
  measurementId: 'G-ZQJMXDV9QM',
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
// const db = firebase.firestore();
export { auth, firebase };
