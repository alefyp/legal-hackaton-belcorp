/* eslint-disable react/prop-types */
import React from 'react';
import './addingRisk.css';
// aquí va lo de los riesgos, cada cosita de estaas y al grabar, es un nuevo riesgo
export default function AddingRisk({ handleRisks, addNewRisk }) {
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
  return (
    <>
      <p className="adding-risk-aux_text">1 de 3 Asignar País</p>
      <label htmlFor="risk-countries">
        PAÍSES
        <select
          className="adding-risk-countries"
          onChange={(e) => { handleRisks(e, 'countries'); }}>
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
              <th>&nbsp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label htmlFor="adding-risk-type">
                  <select
                    className="adding-risk-type"
                    onChange={(e) => { handleRisks(e, 'type'); }}>
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
                    className="adding-risk-level"
                    onChange={(e) => { handleRisks(e, 'level'); }}>
                    {riskLevel.map((risk) => (
                      <option key={`${risk}`}>{risk}</option>
                    ))}
                  </select>
                </label>
              </td>
              <td>
                <label htmlFor="adding-risk-date">
                  <input
                    className="adding-risk-date"
                    onChange={(e) => { handleRisks(e, 'date'); }}
                    type="date" />
                </label>
              </td>
              <td>
                <label
                  className="adding-risk-checkbox-container"
                  htmlFor="adding-risk-checkbox">
                  <input
                    className="adding-risk-checkbox"
                    type="checkbox" />
                  <span className="adding-risk-checkmark" />
                </label>
              </td>
              <td>
                <input
                  onChange={(e) => { handleRisks(e, 'projectleader'); }}
                  type="text"
                  placeholder="Persona o área" />
              </td>
              <td>
                eli
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="adding-risk-aux_text">3 de 3 Adjuntar Documentos</p>
      <input type="file" />
      <div className="adding-risk-grabar-section">
        <p>
          Los documentos y riesgos pueden variar de país en país,
          de ser el caso, puedes agregar un nuevo grupo de información
          haciendo clic en el boton GRABAR Y AGREGAR NUEVO, de lo contrario puedes GRABAR.
        </p>
        <button type="button">GRABAR Y AGREGAR NUEVO</button>
        <button onClick={() => addNewRisk()} type="button">GRABAR</button>
      </div>
    </>
  );
}
