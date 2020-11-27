/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Agregar from '../Assets/Icons/add-icon-black.svg';
import Thrash from '../Assets/Icons/trash.svg';
import './addingRisk.css';
// aquí va lo de los riesgos, cada cosita de estaas y al grabar, es un nuevo riesgo
export default function AddingRisk() {
  // const riskTableResult = [];
  const riskTypes = [
    'Riesgo Laboral',
    'Riesgo Reputacional',
    'Riesgo Financiero',
    'Riesgo Tributario',
    'Riesgo de Propiedad Intelectual',
    'Riesgo Ambiental',
    'Riesgo Publicitario',
    'Riesgo de Consumidor',
    'Riesgo Seguridad de la Información',
    'Riesgo de Libre Competencia'];

  const riskLevel = ['Riesgo Alto', 'Riesgo Medio', 'Riesgo Bajo'];

  const RiskList = (
    <>
      <div>
        <label htmlFor="adding-risk-type">
          <select
            required
            className="adding-risk-type">
            <option hidden value="">Elije una opción</option>
            {riskTypes.map((risk) => (
              <option key={`${risk}`}>{risk}</option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label htmlFor="adding-risk-level">
          <select
            required
            className="adding-risk-levl">
            <option hidden value="">Elije una opción</option>
            {riskLevel.map((risk) => (
              <option key={`${risk}`}>{risk}</option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label htmlFor="adding-risk-date">
          <input
            required
            className="adding-risk-date"
            type="date" />
        </label>
      </div>

      <div>
        <label
          className="adding-risk-checkbox-container"
          htmlFor="adding-risk-checkbox">
          <input
            required
            className="adding-risk-checkbox"
            type="checkbox" />
          <span className="adding-risk-checkmark" />
        </label>
      </div>

      <div>
        <label htmlFor="adding-risk-projectleader">
          <input
            className="adding-risk-projectleader"
            required
            type="text"
            placeholder="Persona o área" />
        </label>
      </div>

      <div>
        <button type="button" className="add-risk-delete-button">
          <img src={Thrash} alt="delete" />
        </button>
      </div>
    </>
  );

  console.log(RiskList);

  const [riskMatrix, setRiskMatrix] = useState([RiskList]);

  console.log(riskMatrix);

  const addNewRiskLine = () => {
    // eslint-disable-next-line no-shadow
    setRiskMatrix((riskMatrix) => [...riskMatrix, RiskList]);
    console.log(riskMatrix);
  };

  // const [riskTableRows, setriskTableRows] = useState([]);
  // AQUÍ HAGO MI ROW, VAMOS A VER SI NO TERMINO LLORANDO AAAAAAAAAAAH
  return (
    <div className="adding-project-new-risk">
      <p>
        En esta sección recuerda que puedes registrar, clasificar riesgos y
        adjuntar documentos por país
      </p>
      <p className="adding-risk-aux_text">1 de 3 Asignar País</p>

      <label htmlFor="risk-countries">
        PAÍSES
        <select
          required
          className="adding-risk-countries">
          <option hidden value="">Selecciona un país</option>
          <option value="Peru">Perú</option>
          <option value="Colombia">Colombia</option>
          <option value="Chile">Chile</option>
          <option value="Brazil">Brasil</option>
        </select>
      </label>

      <p className="adding-risk-aux_text">2 de 3 Asignar Riesgos</p>
      <ul>
        {riskMatrix.map((alefy, idx) => <li key={idx}>{alefy}</li>)}
      </ul>
      <button type="button" onClick={() => addNewRiskLine()} className="new-line-add-risk">
        <img className="add-risk-add-new" src={Agregar} alt="add-new" />
        AGREGAR NUEVA LÍNEA
      </button>
      <p className="adding-risk-aux_text">3 de 3 Adjuntar Documentos</p>
      <div className="adding-risk-attachments">
        <table>
          <thead>
            <tr>
              <th>Documento</th>
              <th>Fecha</th>
              <th>Agregado por</th>
              <th>Tipo</th>
              <th>Opciones</th>
            </tr>
          </thead>
        </table>
        <button type="button" className="new-line-add-risk">
          <img className="add-risk-add-new" src={Agregar} alt="add-new" />
          AGREGAR NUEVO DOCUMENTO
        </button>
        <div className="adding-risk-grabar-section">
          <p>
            Los documentos y riesgos pueden variar de país en país,
            de ser el caso, puedes agregar un nuevo grupo de información
            haciendo clic en el boton GRABAR Y AGREGAR NUEVO, de lo contrario puedes GRABAR.
          </p>
          <button type="button">GRABAR Y AGREGAR NUEVO</button>
          <button type="button">GRABAR</button>
        </div>
      </div>
    </div>
  );
}
