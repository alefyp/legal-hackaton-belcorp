import React from 'react';
import './projectCard.css';

export default function ProjectCards() {
  return (
    <div className="container-project">
      <h1>Nombre del proyecto</h1>
      <p>Fecha Lanzamiento</p>
      <p>Descripción</p>
      <button type="button">Ver más</button>
    </div>
  );
}
