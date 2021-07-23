import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB08dz9l4nKZGndZ0CuOElb3hYgTx7zLJA",
    authDomain: "techlearn-83c88.firebaseapp.com",
    projectId: "techlearn-83c88",
    storageBucket: "techlearn-83c88.appspot.com",
    messagingSenderId: "914284309514",
    appId: "1:914284309514:web:3e7cfb464284160c2e43f3",
    measurementId: "G-19NZ37WMRM"
  };

const root = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth }