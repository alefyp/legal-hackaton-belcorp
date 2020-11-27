/* eslint-disable react/prop-types */
import React from 'react';
import './projectCard.css';
import Store from '../Assets/Icons/Logotype.svg';

export default function ProjectCards({ project }) {
  return (
    <div className="container-project">
      <div className="container-img"><img src={Store} alt="icono" /></div>
      <h3>{project.name}</h3>
      <h4>25 Enero 2021</h4>
      <div className="container-imgs" />
      <button type="button" className="btn-verMas-card">Ver más</button>
    </div>
  );
}
