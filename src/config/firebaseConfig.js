import firebase from "firebase";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyB7jZU4q1kbO0OhgimB88_YawcMUGJbvEU",
    authDomain: "amispelis.firebaseapp.com",
    projectId: "amispelis",
    storageBucket: "amispelis.appspot.com",
    messagingSenderId: "488069229604",
    appId: "1:488069229604:web:b962d0ea7e1d33ea553cb1",
};

const firebaseConfig = firebase.initializeApp(config);

const auth = firebaseConfig.auth();
const db = firebaseConfig.firestore();

export { auth, db };
