import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD4vMcEZzTQCubPlCOVbwU18ZukB3w-NLI",
  authDomain: "musikept-74be9.firebaseapp.com",
  databaseURL: "https://musikept-74be9.firebaseio.com",
  projectId: "musikept-74be9",
  storageBucket: "musikept-74be9.appspot.com",
  messagingSenderId: "439549812933",
  appId: "1:439549812933:web:42f4ec0dbb0c9eacbe90ac",
  measurementId: "G-8MDEGTCT2C"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// always trigger google popup for auth and sign in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
