import firebase from "firebase";
import runtimeEnv from "@mars/heroku-js-runtime-env";

const env = runtimeEnv();

const firebaseConfig = {
  apiKey: env.REACT_APP_APIKEY,
  authDomain: env.REACT_APP_AUTH_DOMAIN,
  databaseURL: env.REACT_APP_DATABASE_URL,
  projectId: env.REACT_APP_PROJECT_ID,
  storageBucket: env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID,
  appId: env.REACT_APP_ID,
  measurementId: env.REACT_APP_MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, googleAuthProvider };
