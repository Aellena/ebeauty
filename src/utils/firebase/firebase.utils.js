// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import {
  getFirestore,
  doc, // retrieve document instance from firestore db
  getDoc, // getting document's data
  setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCdmQhI7JVuMHErawjkviepm9i8bDa9ktM',
  authDomain: 'ebeauty-db.firebaseapp.com',
  projectId: 'ebeauty-db',
  storageBucket: 'ebeauty-db.appspot.com',
  messagingSenderId: '346120967959',
  appId: '1:346120967959:web:3bad435e3414e40b7c0952',
}

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

// Take data from authentication response and store in firestore (signin component const response = await signInWithGooglePopup())
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid) //db, collection, identifier

  const userSnapshot = await getDoc(userDocRef) // snapshot allows us to check if data in document exists in collection and also allows access data

  // If display name exists, spread through. Otherwise, displayName null but overwritten by displayName from spread additionalInformation
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  
  return await signInWithEmailAndPassword(auth, email, password)
}
