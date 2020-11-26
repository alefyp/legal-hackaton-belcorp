/* eslint-disable react/prop-types */
import React from 'react';
// import { searchData } from '../API/authentications';
import Grid from '../Assets/Icons/grid.svg';
import List from '../Assets/Icons/list.svg';
import Lupita from '../Assets/Icons/Lupa.svg';

import './filters.css';

export default function Filters({
  setGrid, setList, setSearch, search, project, setProject,
}) {
  return (
    <div className="container-filters">
      <div className="search-input">
        <img src={Lupita} alt="Buscar" />
        <input placeholder="Buscar por nombre" className="search-input" onChange={async (e) => { setSearch(e.target.value); setProject(project.filter((prj) => prj.name.includes(search))); }} />
      </div>
      <select className="select-filter">
        <button type="button">Nivel de riesgo</button>
        <select>
          <optgroup label="">
            <option>Riesgo Alto</option>
            <option>Riesgo Medio</option>
            <option>Riesgo Bajo</option>
          </optgroup>
        </select>
        <option disabled>──────────</option>
        <optgroup label="Tipo de riesgo">
          <option>Riesgo Alto</option>
          <option>Riesgo Medio</option>
          <option>Riesgo Bajo</option>
        </optgroup>
        <option disabled>──────────</option>
        <optgroup label="Cronológico">
          <option>Ascendente</option>
          <option>Descendente</option>
        </optgroup>
      </select>
      <button type="button" className="btn-list" value="list" onClick={() => { setGrid(false); setList(true); }}><img src={List} alt="List" /></button>
      <button type="button" className="btn-grid" value="grid" onClick={() => { setGrid(true); setList(false); }}><img src={Grid} alt="Grid" /></button>
    </div>
  );
}
