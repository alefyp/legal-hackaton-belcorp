/* eslint-disable react/prop-types */
import React from 'react';

export default function AddingRisk({ handleRisks }) {
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
      <select
        onChange={(e) => { handleRisks(e); }}>
        <option hidden value="">Elije una opción</option>
        {riskTypes.map((risk) => (
          <option key={`${risk}`}>{risk}</option>
        ))}
      </select>
      <select>
        {riskLevel.map((risk) => (
          <option key={`${risk}`}>{risk}</option>
        ))}
      </select>
      <input type="date" />
      <input type="checkbox" />
      <input type="text" placeholder="Persona o área" />
      <button type="button">Borrar</button>
    </>
  );
}
