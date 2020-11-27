/* eslint-disable react/prop-types */
/* eslint-disable */
import React from 'react';
import './projectList.css';
import { Link } from 'react-router-dom';
import Lupita from '../Assets/Icons/Lupa.svg';

import photo1 from '../Assets/photos/alessandraVinateaAlePhoto.svg';
import photo2 from '../Assets/photos/michelleFujiiphotos.png';
import photo3 from '../Assets/photos/fiammaDeVinateaphotos.png';
import photo4 from '../Assets/photos/Alexandra Rojasphotos.png';

export default function ProjectCards({ project, ph}) {
  const arrPhoto = [photo4, photo2, photo3, photo1];
  return (
    <div className="container-list">
      <div className="container-img-list"><img src={ph} alt="icono" /></div>
      <div className="container-info-list">
        <h3>{project.name}</h3>
        <div className="container-imgs">
        {arrPhoto.map((phot, id) => (<img src={phot} alt="icono" key={`${id}pt`} />))}
      </div>
        <button type="button" className="btn-verMas">
          <img src={Lupita} alt="search-update" />
          <Link to={`/dashboard/project${project.id}`}>
            Ver Más
          </Link>
        </button>
      </div>
    </div>
  );
}
