/* eslint-disable react/prop-types */
import React from 'react';
import Agregar from '../Assets/Icons/add-icon-black.svg';
import Thrash from '../Assets/Icons/trash.svg';
import './addingRisk.css';
// aquí va lo de los riesgos, cada cosita de estaas y al grabar, es un nuevo riesgo
export default function AddingRisk({ handleRisks, addNewRisk }) {
  const newUser = JSON.parse(localStorage.getItem('newUser'));
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

  const temporalRisk = {};

  const newRisk = (e, key) => {
    temporalRisk[key] = e.target.value;
    console.log(temporalRisk);
  };

  handleRisks(newRisk);

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
          className="adding-risk-countries"
          onChange={(e) => { newRisk(e, 'countries'); }}>
          <option hidden value="">Selecciona un país</option>
          <option value="Peru">Perú</option>
          <option value="Colombia">Colombia</option>
          <option value="Chile">Chile</option>
          <option value="Brazil">Brasil</option>
        </select>
      </label>

      <p className="adding-risk-aux_text">2 de 3 Asignar Riesgos</p>

      <div className="risk-table">
        <table>
          <thead>
            <tr>
              <th>Tipo de riesgo</th>
              <th>Nivel de riesgo</th>
              <th>Fecha</th>
              <th>Se asumió el riesgo</th>
              <th>Responsable</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label htmlFor="adding-risk-type">
                  <select
                    required
                    className="adding-risk-type"
                    onChange={(e) => { newRisk(e, 'type'); }}>
                    <option hidden value="">Elije una opción</option>
                    {riskTypes.map((risk) => (
                      <option key={`${risk}`}>{risk}</option>
                    ))}
                  </select>
                </label>
              </td>

              <td>
                <label htmlFor="adding-risk-level">
                  <select
                    required
                    className="adding-risk-level"
                    onChange={(e) => { newRisk(e, 'level'); }}>
                    {riskLevel.map((risk) => (
                      <option key={`${risk}`}>{risk}</option>
                    ))}
                  </select>
                </label>
              </td>

              <td>
                <label htmlFor="adding-risk-date">
                  <input
                    required
                    className="adding-risk-date"
                    onChange={(e) => { newRisk(e, 'date'); }}
                    type="date" />
                </label>
              </td>

              <td>
                <label
                  className="adding-risk-checkbox-container"
                  htmlFor="adding-risk-checkbox">
                  <input
                    required
                    className="adding-risk-checkbox"
                    type="checkbox" />
                  <span className="adding-risk-checkmark" />
                </label>
              </td>

              <td>
                <input
                  required
                  onChange={(e) => { newRisk(e, 'responsable'); }}
                  type="text"
                  placeholder="Persona o área" />
              </td>

              <td>
                <button type="button" className="add-risk-delete-button">
                  <img src={Thrash} alt="delete" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <button type="button" className="new-line-add-risk" onClick={() => addNewRiskRow()}>
          <img className="add-risk-add-new" src={Agregar} alt="add-new" />
          AGREGAR NUEVA LÍNEA
        </button> */}
      </div>

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
          <tbody>
            <td>
              <input type="file" />
            </td>
            <td>
              <input type="date" />
            </td>
            <td>
              <p>{newUser.displayName}</p>
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <button type="button" className="add-risk-delete-button">
                <img src={Thrash} alt="delete" />
              </button>
            </td>
          </tbody>
        </table>
        <button type="button" className="new-line-add-risk">
          <img className="add-risk-add-new" src={Agregar} alt="add-new" />
          AGREGAR NUEVO DOCUMENTO
        </button>
      </div>
      <div className="adding-risk-grabar-section">
        <p>
          Los documentos y riesgos pueden variar de país en país,
          de ser el caso, puedes agregar un nuevo grupo de información
          haciendo clic en el boton GRABAR Y AGREGAR NUEVO, de lo contrario puedes GRABAR.
        </p>
        <button type="button">GRABAR Y AGREGAR NUEVO</button>
        <button onClick={() => addNewRisk(temporalRisk)} type="button">GRABAR</button>
      </div>
    </div>
  );
}
