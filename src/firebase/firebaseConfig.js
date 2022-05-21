import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQb5AiHW0hNhmll-47r9iv1G0KbNDe0ag",
  authDomain: "cloth-shop-bf9b5.firebaseapp.com",
  projectId: "cloth-shop-bf9b5",
  storageBucket: "cloth-shop-bf9b5.appspot.com",
  messagingSenderId: "110242336776",
  appId: "1:110242336776:web:1ab78ffb87b19e2cc3c1bd",
  measurementId: "G-0PZ15G72XR",
};

//init firebase app
const app = initializeApp(firebaseConfig);

//init firebase service


const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const creatUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, 'user', userAuth.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log('isSnapShot exist', userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const {displayName, email} = userAuth;
    const createArt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createArt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating user:', error.message)
    }
  }
  return userDocRef;

}