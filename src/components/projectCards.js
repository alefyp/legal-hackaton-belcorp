/* eslint-disable react/prop-types */
import React from 'react';
import './projectCard.css';
import Store from '../Assets/Icons/Logotype.svg';

export default function ProjectCards({ project }) {
  console.log(project);
  return (
    <div className="container-project">
      <div className="container-img"><img src={Store} alt="icono" /></div>
      <h3>{project.name}</h3>
      <h4>25 Enero 2021</h4>
      <h4>Descripción:</h4>
      <div>
        <p>{project.description}</p>
      </div>
      <button type="button" className="btn-verMas">Ver más</button>
    </div>
  );
}
