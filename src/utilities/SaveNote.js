import { getAuth, signInAnonymously } from "firebase/auth";
import { collection, addDoc, query, onSnapshot } from 'firebase/firestore'
import { database } from '../../config/firebase';

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
});

const noteCollection = "test"
export default function SaveNote ( object ) {
    console.log('saving note: ' + object)
    addDoc(collection(database, noteCollection), object)
}