import React from 'react';
import './projectList.css';
import Store from '../Assets/Icons/storestore.svg';

export default function ProjectCards() {
  return (
    <div className="container-list">
      <div className="container-img"><img src={Store} alt="icono" /></div>
      <h3>Nombre del proyecto</h3>
      <h4>Fecha Lanzamiento:</h4>
      <h4>Descripción:</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do tempor</p>
      <button type="button" className="btn-verMas">Ver más</button>
    </div>
  );
}
