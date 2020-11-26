import React from 'react';

const NewRiskRow = () => {
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

      {/* <td>
        <button type="button" className="add-risk-delete-button">
          <img src={Thrash} alt="delete" />
        </button>
      </td> */}
    </tr>
  );
};

export default NewRiskRow;
