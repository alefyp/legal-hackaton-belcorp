import React from 'react';
import './updateCard.css';
import logo from '../Assets/Icons/logo-Belcorp-main.svg';

export default function updateCard() {
  const newUser = JSON.parse(localStorage.getItem('newUser'));
  return (
    <div className="container-update">
      <div className="user-updates">
        <div>
          <p>25 Nov</p>
        </div>
        <div className="container-img-profile"><img src={logo} alt="icono" /></div>
        <h3>{newUser.displayName}</h3>
      </div>
      <p>Actualizó Términos y condiciones en proyecto Mi tienda web</p>
      <div className="container-span"><span type="link">Ver más</span></div>
    </div>
  );
}
