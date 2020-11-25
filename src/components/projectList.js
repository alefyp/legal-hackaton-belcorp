/* eslint-disable react/prop-types */
import React from 'react';
import './projectList.css';
import Store from '../Assets/Icons/Logotype.svg';
import Lupita from '../Assets/Icons/Lupa.svg';

export default function ProjectCards({ project }) {
  return (
    <div className="container-list">
      <div className="container-img-list"><img src={Store} alt="icono" /></div>
      <div className="container-info-list">
        <h3>{project.name}</h3>
        <h4>{project.startingDate}</h4>
      </div>
      <button type="button" className="btn-verMas">
        <img src={Lupita} alt="search-update" />
        Ver Más
      </button>
    </div>
  );
}
