import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import AddingRisk from '../components/addingRisk';
import './addingProject.css';

export default function addingProject() {
  const db = firebase.firestore();
  console.log(db);

  const [projectData, setProjectData] = useState({});
  // Este va a ser el array con todos los riesgos
  const [projectRisks, setProjectRisks] = useState([]);
  // handlers form
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('aquí va el objetito a firebase: ', projectData);
  };

  const handleChanges = (e, key) => {
    projectData[key] = e.target.value;
    setProjectData({ ...projectData, risks: projectRisks });
  };

  const handleRisks = (e, key) => {
    console.log(e.target.value, projectRisks, key);
    // riskTemp[key] = e;
    // projectRisks.push(riskTemp);
    setProjectRisks({ ...projectRisks });
  };

  const addNewRisk = () => {
    console.log('Añadiendo un nuevo riesgo...');
  };

  return (
    <div className="container-adding-project">
      <h2>NUEVO PROYECTO</h2>
      <form onSubmit={handleSubmit} className="adding-project-form">
        <label htmlFor="project-name">
          NOMBRE
          <input
            type="text"
            placeholder="Ingresa nombre del proyecto"
            className="project-name"
            onChange={(e) => { handleChanges(e, 'name'); }}
          />
        </label>
        <label htmlFor="project-description">
          DESCRIPCIÓN
          <textarea
            onChange={(e) => { handleChanges(e, 'description'); }}
            placeholder="Cuéntanos más acerca del proyecto"
            className="project-description" />
        </label>
        <div className="adding-project-client_area_date-section">
          <label htmlFor="project-client-name">
            CLIENTE
            <input
              onChange={(e) => { handleChanges(e, 'clientname'); }}
              placeholder="¿Quién hizo la solicitud?"
              type="text"
              className="project-client-name" />
          </label>
          <label htmlFor="project-area">
            ÁREA
            <input
              onChange={(e) => { handleChanges(e, 'area'); }}
              placeholder="¿A que área pertenece?"
              type="text"
              className="project-area" />
          </label>
          <label htmlFor="project-start-date">
            FECHA DE LANZAMIENTO
            <input
              onChange={(e) => { handleChanges(e, 'startdate'); }}
              type="date"
              className="project-start-date" />
          </label>
        </div>
        <label htmlFor="project-recomendation">
          RECOMENDACIÓN
          <textarea
            onChange={(e) => { handleChanges(e, 'recomendation'); }}
            placeholder="Escribe la recomendación inicial para este proyecto"
            className="project-recomendation" />
        </label>
        <div className="adding-project-new-risk">
          <p>
            En esta sección recuerda que puedes registrar, clasificar riesgos y
            adjuntar documentos por país
          </p>
          <AddingRisk handleRisks={handleRisks} addNewRisk={addNewRisk} />
          <div className="adding-project-risks-table">
            <table>
              <tr>
                <th>
                  Documento
                  Fecha
                  Agregado por
                  Tipo
                  Opciones
                </th>
              </tr>
            </table>
          </div>
        </div>
        <p>Ya casi, click en PUBLICAR para guardar información del proyecto </p>
        <div className="adding-project-final-buttons">
          <button type="button" className="btn-return">REGRESAR</button>
          {/* <button type="button" onClick={handleSubmit}
          className="btn-download">Descargar</button> */}
          <button type="submit" className="btn-download">PUBLICAR</button>
        </div>
      </form>
    </div>
  );
}
