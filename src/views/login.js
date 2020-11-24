import React from 'react';
import auth from '../firebaseInit.js'; 
import firebase from "firebase/app";

import './login.css'

export default function Login ({history, user, setUser}) {

    const provider = new firebase.auth.OAuthProvider('microsoft.com');
    provider.addScope('User.Read');

  const funcionAlgo = (prov) => {
    
      console.log(provider);
      return    auth.signInWithPopup(prov)
         
        
        .then(function(result) {
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
        .catch(function(error) {
            console.log(error)
          // Handle error.
        });
    }
   

console.log(user)
    return (
      <>
          <form className='login-form'>
        <label>Usuario:
            <input className='user-name'onBlur={(e)=>setUser(e.target.value)}></input>
        </label>
        
        <label>Contraseña:
            <input className='user-password'></input>
        </label>
        <button onClick={() => history.push('/dashboard')}>Log in</button>
        <button onClick={()=> funcionAlgo(provider)}>Outlook</button>
        </form>
      </>
    );
}