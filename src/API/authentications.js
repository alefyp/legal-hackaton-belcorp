import firebase from 'firebase/app';
import auth from '../firebaseInit';
import 'firebase/firestore';

export const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

export const signOut = () => {
  auth.signOut();
  return localStorage.removeItem('token');
};

const user = auth.currentUser;
export const emailVerification = () => user
  .sendEmailVerification()
  .then(() => {
    console.log();
  })
  .catch((error) => {
    console.log(error);
  });

const db = firebase.firestore();
export async function gettingData(collection) {
  try {
    const projectData = await db.collection(collection).get();
    return projectData;
  } catch (error) {
    return error.message;
  }
}
