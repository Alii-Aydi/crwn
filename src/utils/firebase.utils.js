// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiH96sg_F-psIWmQfB0jU5KawbeO8L4sE",
    authDomain: "crwn-db-8c8e1.firebaseapp.com",
    projectId: "crwn-db-8c8e1",
    storageBucket: "crwn-db-8c8e1.appspot.com",
    messagingSenderId: "657443876502",
    appId: "1:657443876502:web:a4389839b59296fa51dcb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)
export const db = getFirestore()

const additionalInfo = {}

export const createUserDocFromAuth = async (userAuth, additionalInfo) => {
    const userRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userRef)

    if (!userSnapshot.exists()) {
        const { displayName, email, photoURL, phoneNumber } = userAuth
        const createdAt = new Date()
        try {
            await setDoc(userRef, { displayName, email, createdAt, photoURL, phoneNumber, ...additionalInfo })
        } catch (e) {
            console.log(e)
        }
    }

    return userRef
}

export const creatUserWithEmailAndPw = async (email, pw) => {
    if (!email || !pw) return

    return await createUserWithEmailAndPassword(auth, email, pw)
}