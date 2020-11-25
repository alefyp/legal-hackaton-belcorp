import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getADocument } from '../API/crud';
import './projectDetails.css';
import Recomendaciones from './recomendaciones';

export default function projectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    console.log(project);
    getADocument('3ZT88Rz9oPFs9EzOVWSC', 'projects')
      .then((doc) => (doc.exists ? setProject(() => doc.data()) : console.log('No such document!')))
      .catch((error) => console.log('Error getting document:', error));
  }, [id]);
  return (
    <section className="project-details">
      <div>
        <h3 className="inlineBlocks">PROYECTO</h3>
        <h4 className="inlineBlocks">
          {project.name}
        </h4>
        <div>
          <h3 className="subtitleStyle">DESCRIPCIÓN</h3>
          <p className="scrolling-Box">
            {project.description}
          </p>
        </div>
        <div className="description-details">
          <h6>Clienta</h6>
          <span>{project.owner}</span>
          <h6>Area</h6>
          <span>{project.area || 'Gerencia Legal' }</span>
          <h6>Fecha de lanzamiento</h6>
          <span>{project.date || '10/06/2020'}</span>
        </div>
        <h3 className="subtitleStyle">RECOMENDACIONES</h3>
        <p className="subtitle-description">Aquí podrás ver las recomendaciones u observaciones de este proyecto</p>
        <Recomendaciones arr={project.recomendations} />
        <h3 className="subtitleStyle">PAÍSES INVOLUCRADOS</h3>
        <p className="subtitle-description">Selecciona un país para ver los riesgos</p>

        <h3 className="subtitleStyle">ARCHIVOS ADJUNTOS</h3>
        <p className="subtitle-description">Descarga, revisa o elimina</p>
        <div className="button-box-layout">
          <button type="button" className="back details-button">REGRESAR</button>
          <button type="button" className="download details-button">DESCARGAR</button>

        </div>
      </div>

    </section>
  );
}
