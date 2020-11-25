import React from 'react';
import './updateCard.css';
import Store from '../Assets/Icons/storestore.svg';

export default function updateCard() {
  return (
    <div className="container-update">
      <div className="user-updates">
        <div className="container-img-profile"><img src={Store} alt="icono" /></div>
        <h3>Nombre del usuario</h3>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
    </div>
  );
}
