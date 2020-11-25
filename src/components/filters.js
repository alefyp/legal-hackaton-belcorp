import React from 'react';
import Grid from '../Assets/Icons/grid.svg';
import List from '../Assets/Icons/list.svg';
import Lupita from '../Assets/Icons/Lupa.svg';

import './filters.css';

export default function Filters() {
  return (
    <div className="container-filters">
      <div className="search-input">
        <img src={Lupita} alt="Buscar" />
        <input placeholder="Buscar por nombre" className="search-input" />
      </div>
      <select className="select-filter">
        <option>Filtrar por:</option>
        <option>Riesgo Alto</option>
        <option>Riesgo Medio</option>
        <option>Riesgo Bajo</option>
      </select>
      <button type="button" className="btn-list"><img src={List} alt="List" /></button>
      <button type="button" className="btn-grid"><img src={Grid} alt="Grid" /></button>
    </div>
  );
}
