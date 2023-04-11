import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';

const FirebaseConfig = {
  apiKey: 'AIzaSyArJ210faojxFTHk8S77HkZIkhKosISWGM',
  authDomain: 'chatgpt4-eb63e.firebaseapp.com',
  projectId: 'chatgpt4-eb63e',
  storageBucket: 'chatgpt4-eb63e.appspot.com',
  messagingSenderId: '728830295981',
  appId: '1:728830295981:web:ef01bb06b79e4e5c766b24',
  measurementId: 'G-9EXP4HXD01',
};

firebase.initializeApp(FirebaseConfig);
const auth = getAuth();

export default auth;
