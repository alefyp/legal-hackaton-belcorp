import React from 'react';
import Grid from '../Assets/Icons/grid.svg';
import List from '../Assets/Icons/list.svg';

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
        <button type="button"><img src={List} alt="List" /></button>
        <button type="button"><img src={Grid} alt="Grid" /></button>
      </nav>
    </div>
  );
}
