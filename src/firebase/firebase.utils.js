import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAytr9H6Wzcy0QcSqsK8gO5UvygJybWELg",
  authDomain: "crwn-db-2f2b1.firebaseapp.com",
  projectId: "crwn-db-2f2b1",
  storageBucket: "crwn-db-2f2b1.appspot.com",
  messagingSenderId: "1006932077177",
  appId: "1:1006932077177:web:03cc7a6cf6698874b4c2a8",
  measurementId: "G-PCCZMD549R"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

 // console.log(snapshot);

 if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
    }
    catch (error) {
      console.log('error creating user', error.message);
    }
 }
 return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


