import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getADocument } from '../API/crud';
import { useHistory } from 'react-router-dom';
import './projectDetails.css';
import Recomendaciones from './recomendaciones';
import project from '../API/data/schema';
import Risks from './Risks';
import Attachments from './attachments';
import CountriesContainer from './CountriesContainer';
// import schema from

export default function projectDetails() {
  const [filterCountry, setFilterCountry] = useState('');
  const [data, setData] = useState(project[0].risks);
  const history = useHistory();
  //   const { id } = useParams();
  //   const [project, setProject] = useState({});
  //   useEffect(() => {
  //     console.log(project);
  //     getADocument('3ZT88Rz9oPFs9EzOVWSC', 'projects')
  //       .then((doc) => (doc.exists ? setProject(()
  //= > doc.data()) : console.log('No such document!')))
  //       .catch((error) => console.log('Error getting document:', error));
  //   }, [id]);

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <section className="project-details">
      <div className="project-details-container">
        <h3 className="inlineBlocks">PROYECTO</h3>
        <h4 className="inlineBlocks">
          {project.name}
        </h4>
        <div>
          <h3 className="subtitleStyle">DESCRIPCIÓN</h3>
          <p className="scrolling-Box-description">
            {project.description || project[0].description}
          </p>
        </div>
        <div className="description-details">
          <h6>Cliente</h6>
          <span>{project.owner || 'Maria Cristina Paredes'}</span>
          <h6>Area</h6>
          <span>{project.area || 'Ventas' }</span>
          <h6>Fecha de lanzamiento</h6>
          <span>{project.date || '10/06/2020'}</span>
        </div>
        <h3 className="subtitleStyle">RECOMENDACIONES</h3>
        <p className="subtitle-description">Aquí podrás ver las recomendaciones u observaciones de este proyecto</p>
        <Recomendaciones arr={project.recomendations} />
        <CountriesContainer
          filterCountry={filterCountry}
          setFilterCountry={setFilterCountry}
          data={project[0].risks}
          setData={setData} />
        <Risks arr={data} filterCountry={filterCountry} />
        <h3 className="subtitleStyle">ARCHIVOS ADJUNTOS</h3>
        <p className="subtitle-description">Descarga, revisa o elimina</p>

        <Attachments arr={data} />
        <div className="button-box-layout">
          <button type="button" onClick={() => history.goBack()} className="back details-button">REGRESAR</button>
          <button type="button" className="download details-button" onClick={handleClick}>DESCARGAR</button>

        </div>
      </div>

    </section>
  );
}
