/* eslint-disable react/prop-types */
import React from 'react';
import firebase from 'firebase/app';
import auth from '../firebaseInit';

import './login.css';

export default function Login({ user, setUser, password, setPassword }) {
  const provider = new firebase.auth.OAuthProvider('microsoft.com');
  provider.addScope('User.Read');

  async function signinOutlook(prov) {
    try {
      const result = await auth.signInWithPopup(prov);
      console.log(result);
      console.log(result.additionalUserInfo.profile, result.credential.idToken);
      return result;
    } catch (error) {
      const errorMessage = error.message;
      return errorMessage;
    }
  }

  async function signInEmailAndPassword(email, pass) {
    try {
      const signInUser = await firebase.auth().signInWithEmailAndPassword(email, pass);
      return signInUser;
    } catch (error) {
      const errorMessage = error.message;
      return errorMessage;
    }
  }

  return (
    <>
      <form className="login-form">
        <label htmlFor="user-name">
          Usuario:
          <input className="user-name" onBlur={(e) => setUser(e.target.value)} />
        </label>

        <label htmlFor="user-password">
          Contraseña:
          <input className="user-password" onBlur={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={() => signInEmailAndPassword(user, password)}>Log in</button>
        <button type="button" onClick={() => signinOutlook(provider)}>Outlook</button>
      </form>
    </>
  );
}
