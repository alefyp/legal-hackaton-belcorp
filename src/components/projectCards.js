/* eslint-disable react/prop-types */
import React from 'react';
import './projectCard.css';
import Store from '../Assets/Icons/Logotype.svg';

export default function ProjectCards({ project }) {
  return (
    <div className="container-project">
      <div className="container-img"><img src={Store} alt="icono" /></div>
      <h3>{project.name}</h3>
      <h4>{project.startingDate}</h4>
      <h4>Descripción:</h4>
      <p>{project.description}</p>
      <button type="button" className="btn-verMas">Ver más</button>
    </div>
  );
}
