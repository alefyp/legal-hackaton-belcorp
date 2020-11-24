/* eslint-disable react/prop-types */
import React from 'react';
import firebase from 'firebase/app';
import auth from '../firebaseInit';

import './login.css';

export default function Login({ history, user, setUser }) {
  const provider = new firebase.auth.OAuthProvider('microsoft.com');
  provider.addScope('User.Read');

  const funcionAlgo = (prov) => {
    console.log(provider);
    return auth.signInWithPopup(prov)

      .then((result) => {
        console.log('realmente ke está pazanda');
        console.log(result);
        console.log(result.additionalUserInfo.profile, result.credential.idToken);
        console.log(firebase.auth.UserCredential);
        // User is signed in.
        // IdP data available in result.additionalUserInfo.profile.
        // OAuth access token can also be retrieved:
        // result.credential.accessToken
        // OAuth ID token can also be retrieved:
        // result.credential.idToken
      })
      .catch((error) => {
        console.log(error);
        // Handle error.
      });
  };

  console.log(user);
  return (
    <>
      <form className="login-form">
        <label htmlFor="user-name">
          Usuario:
          <input className="user-name" onBlur={(e) => setUser(e.target.value)} />
        </label>

        <label htmlFor="user-password">
          Contraseña:
          <input className="user-password" />
        </label>
        <button type="button" onClick={() => history.push('/dashboard')}>Log in</button>
        <button type="button" onClick={() => funcionAlgo(provider)}>Outlook</button>
      </form>
    </>
  );
}
