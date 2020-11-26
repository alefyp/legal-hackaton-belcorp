/* eslint-disable react/prop-types */
import React from 'react';
import './projectCard.css';
import { Link } from 'react-router-dom';
import Store from '../Assets/Icons/Logotype.svg';

export default function ProjectCards({ project }) {
  console.log(project.id);
  return (
    <div className="container-project">
      <div className="container-img"><img src={Store} alt="icono" /></div>
      <h3>{project.name}</h3>
      <h4>25 Enero 2021</h4>
      <button type="button" className="btn-verMas">
        <Link to={`/dashboard/project:${project.id}}`}>
          Ver más
        </Link>
      </button>
    </div>
  );
}
