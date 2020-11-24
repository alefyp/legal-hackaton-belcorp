import React from 'react';

export default function Filters() {
  return (
    <div className="conatiner-filters">
      <nav>
        <input placeholder="Buscar por nombre" />
        <select>
          <option>Filtrar por:</option>
          <option>Riesgo Alto</option>
          <option>Riesgo Medio</option>
          <option>Riesgo Bajo</option>
        </select>
        <button type="button">lista</button>
        <button type="button">Cuadricula</button>
      </nav>
    </div>
  );
}
