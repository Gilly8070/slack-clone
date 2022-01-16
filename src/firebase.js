import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA049US0n72pd_uPwJlrNKHsuZ1QXSZM8E",
    authDomain: "slack-clone-f0ae7.firebaseapp.com",
    projectId: "slack-clone-f0ae7",
    storageBucket: "slack-clone-f0ae7.appspot.com",
    messagingSenderId: "791005715018",
    appId: "1:791005715018:web:b2f7661a37b5500f3a24b3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, provider, auth}