import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8NkCNMQpVOvHWQN7Qw8J67HCrNUq66xE",
  authDomain: "facebook-clone-c64c7.firebaseapp.com",
  projectId: "facebook-clone-c64c7",
  storageBucket: "facebook-clone-c64c7.appspot.com",
  messagingSenderId: "63262275432",
  appId: "1:63262275432:web:aa88a472a8f7905abe88dd",
  measurementId: "G-Q4XDG084JR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
