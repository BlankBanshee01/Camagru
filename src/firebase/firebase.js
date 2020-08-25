import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA4z7yB7o_Fh06guoi2dl7aRjXMOOHidbw",
  authDomain: "camagru-1e20f.firebaseapp.com",
  databaseURL: "https://camagru-1e20f.firebaseio.com",
  projectId: "camagru-1e20f",
  storageBucket: "camagru-1e20f.appspot.com",
  messagingSenderId: "363049804007",
  appId: "1:363049804007:web:7105d5bda0e61177244242",
  measurementId: "G-N9H4C7HSE8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
