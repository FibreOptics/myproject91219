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

// always trigger google popup for auth and sign in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

//export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signInWithGoogle = () =>
  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
        //Auth.setLoggedIn(true);
      })
      .catch(e => console.log(e));
  });

export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //case the user is null

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export default firebase;
