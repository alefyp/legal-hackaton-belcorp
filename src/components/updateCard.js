/* eslint-disable react/prop-types */
import React from 'react';
import './updateCard.css';
import { Link } from 'react-router-dom';

export default function updateCard({ project, ph }) {
  return (
    <div className="container-update">
      <div className="user-updates">
        <div className="container-img-profile"><img src={ph} alt="icono" /></div>
        <h3>{project.name}</h3>
        <p>22 Nov</p>
      </div>
      <p>{project.update}</p>
      <div className="container-span">
        <span type="link">
          <Link to={`/dashboard/project${project.id}`}>
            Ver más
          </Link>
        </span>
      </div>
    </div>
  );
}
