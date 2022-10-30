import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCGRu26Y-QJeL6EaudKyjg7OAoPJVWOTds",
    authDomain: "eatdrinkwhat.firebaseapp.com",
    projectId: "eatdrinkwhat",
    storageBucket: "eatdrinkwhat.appspot.com",
    messagingSenderId: "837663015300",
    appId: "1:837663015300:web:fac96fd6bc14e938b05dd1",
    measurementId: "G-CXJKWQB8W4"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const fireAuth = getAuth();
const db = getFirestore();


export {
    firebaseApp,
    fireAuth,
    db
};