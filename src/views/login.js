/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebaseInit';
import { signIn } from '../API/authentications';
// icons
import Logo from '../Assets/Icons/logos Belcorp_Belcorp Color 1.svg';
import Background from '../Assets/final-background.jpeg';
import './login.css';

export default function Login() {
  const provider = new firebase.auth.OAuthProvider('microsoft.com');
  provider.addScope('User.Read');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const funcionAlgo = (prov) => auth.signInWithPopup(prov).then((result) => {
    localStorage.setItem('token', result.credential.accessToken);
  }).catch((error) => {
    console.log(error);
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
        localStorage.setItem('user', email);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <img src={Background} className="background-image" alt="belcorp" />
      <form className="login-form" onSubmit={login}>
        <h1>Legal Keeper</h1>
        <h2>INICIAR SESIÓN</h2>
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
            placeholder="*************"
          />
        </label>
        <button type="submit" disabled={disabled}>
          LOGIN
        </button>
        <button type="button" onClick={() => funcionAlgo(provider)}>
          OUTLOOK LOGIN
        </button>
        <p>¿Ha olvidado la contraseña?</p>
      </form>
      <div className="logo-login">
        <img src={Logo} alt="Belcorp" />
      </div>
    </div>
  );
}
