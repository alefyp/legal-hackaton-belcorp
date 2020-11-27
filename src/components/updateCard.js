import React from 'react';
import './updateCard.css';
import logo from '../Assets/Icons/logo-Belcorp-main.svg';

export default function updateCard() {
  const newUser = JSON.parse(localStorage.getItem('newUser'));
  return (
    <div className="container-update">
      <div className="user-updates">
        <div className="container-img-profile"><img src={logo} alt="icono" /></div>
        <h3>{newUser.displayName}</h3>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      <div className="container-span"><span type="link">Ver más</span></div>
    </div>
  );
}
