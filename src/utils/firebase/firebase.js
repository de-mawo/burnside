import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBKpuPqQ4493QWcglMY9e1FcLfFBzI4l0Y",
  authDomain: "burnside-40105.firebaseapp.com",
  projectId: "burnside-40105",
  storageBucket: "burnside-40105.appspot.com",
  messagingSenderId: "78730239246",
  appId: "1:78730239246:web:1d3f1c6b9f8e0b08b28b5f",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore()

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    

    const userSnapshot = await getDoc(userDocRef);
    

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userDocRef;
}