import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import AddingRisk from '../components/addingRisk';
import './addingProject.css';

export default function addingProject() {
  const db = firebase.firestore();
  console.log(db);
  const [projectData, setProjectData] = useState({});
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

  const handleRisks = (e) => {
    console.log(projectRisks, e);
    projectRisks.push(e);
    setProjectRisks(projectRisks);
  };

  return (
    <div className="container-adding-project">
      <h1>Nuevo Proyecto</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="project-name">
          Nombre:
          <input
            type="text"
            placeholder="Ingresa nombre del proyecto"
            className="project-name"
            onChange={(e) => { handleChanges(e, 'name'); }}
          />
        </label>
        <label htmlFor="project-description">
          Descripción:
          <textarea
            onChange={(e) => { handleChanges(e, 'description'); }}
            className="project-description" />
        </label>
        <label htmlFor="project-client-name">
          Cliente:
          <input
            onChange={(e) => { handleChanges(e, 'clientname'); }}
            placeholder="¿Quién hizo la solicitud?"
            type="text"
            className="project-client-name" />
        </label>
        <label htmlFor="project-start-date">
          Fecha de Lanzamiento:
          <input
            onChange={(e) => { handleChanges(e, 'startdate'); }}
            type="date"
            className="project-start-date" />
        </label>

        <h2> En esta sección, puedes registrar, clasificar riesgo  y adjuntar documentos.</h2>
        <div>
          <h3>Paises involucrados</h3>
          <select onChange={(e) => { handleChanges(e, 'countries'); }}>
            <option hidden value="">Selecciona un país</option>
            <option value="Peru">Perú</option>
            <option value="Colombia">Colombia</option>
            <option value="Chile">Chile</option>
            <option value="Brazil">Brazil</option>
          </select>
        </div>
        <div className="risk-table">
          <table>
            <tr>
              <th>Tipo de riesgo</th>
              <th>Nivel de riesgo</th>
              <th>Fecha</th>
              <th>Se asumió el riesgo</th>
              <th>Responsable</th>
            </tr>
          </table>
          <AddingRisk handleRisks={handleRisks} />
        </div>
        <div className="attach-doc">
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
        <button type="button" className="btn-return">Regresar</button>
        {/* <button type="button" onClick={handleSubmit}
        className="btn-download">Descargar</button> */}
        <button type="submit" className="btn-download">Publicar</button>
      </form>
    </div>
  );
}
