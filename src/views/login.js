/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import firebase from 'firebase/app';
import auth from '../firebaseInit';
import { signIn } from '../API/authentications';

import './login.css';

export default function Login() {
  const provider = new firebase.auth.OAuthProvider('microsoft.com');
  provider.addScope('User.Read');
  // const history = useHistory();
  // const [user, setUser] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const funcionAlgo = (prov) => auth.signInWithPopup(prov).then((result) => {
    // console.log('realmente ke está pazanda');
    // history.push('/dashboard');
    localStorage.setItem('token', result.credential.accessToken);
    console.log(result.credential.accessToken);
  })
    .catch((error) => {
      console.log(error);
      // Handle error.
    });

  function handleChange(e) {
    if (e.target.value.length > 4) {
      setDisabled(false);
      setPassword(e.target.value);
    } else {
      setDisabled(true);
    }
  }
  const login = (e) => {
    e.preventDefault();

    return signIn(email, password)
      .then((res) => {
      // localStorage.clear();
        localStorage.setItem('user', email);
        console.log(res);
      // debugd;
      // history.push('/dashboard');
      })
      .catch((err) => console.log(err));
  };
  console.log(password);
  return (
    <>
      <form
        className="login-form"
        onSubmit={login}>
        <label htmlFor="user-name">
          Usuario:
          <input
            className="user-name"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="ejemplo@ejemplo.com"
        />
        </label>

        <label htmlFor="user-password">
          Contraseña:
          <input
            className="user-password"
            onChange={handleChange}
            type="password"
            name="passsword"
            placeholder="password"
          />
        </label>
        <button type="submit" disabled={disabled}>Log in</button>
        <button type="button" onClick={() => funcionAlgo(provider)}>Outlook</button>
      </form>
    </>
  );
}
