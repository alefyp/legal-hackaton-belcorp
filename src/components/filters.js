/* eslint-disable react/prop-types */
import React from 'react';
import Select from 'react-select';
import Grid from '../Assets/Icons/grid.svg';
import List from '../Assets/Icons/list.svg';
import Lupita from '../Assets/Icons/Lupa.svg';

import './filters.css';

export default function Filters({
  setGrid, setList, search, setSearch, Api, setProject,
}) {
  const options = [
    { label: 'Mostrar todos', value: 'All', typeFilter: 'All' },
    {
      label: 'Cronológico',
      options: [{ label: 'Ascendente', value: 'Asc', typeFilter: 'Cronologico' },
        { label: 'Descendente', value: 'Desc', typeFilter: 'Cronologico' }],
    },
    {
      label: 'Nivel de riesgo',
      options: [{ label: 'Riesgo Alto', value: 'Alto', typeFilter: 'Nivel' },
        { label: 'Riesgo Medio', value: 'Medio', typeFilter: 'Nivel' },
        { label: 'Riesgo Bajo', value: 'Bajo', typeFilter: 'Nivel' }],
    },
    {
      label: 'Tipo de riesgo',
      options: [{ label: 'Riesgo Laboral', value: 'Riesgo Laboral', typeFilter: 'Tipo' },
        { label: 'Riesgo Reputacional', value: 'Riesgo Reputacional', typeFilter: 'Tipo' },
        { label: 'Riesgo Financiero', value: 'Riesgo Financiero', typeFilter: 'Tipo' },
        { label: 'Riesgo Reputacional', value: 'Riesgo Reputacional', typeFilter: 'Tipo' },
        { label: 'Riesgo Tributario', value: 'Riesgo Tributario', typeFilter: 'Tipo' },
        { label: 'Riesgo de Propiedad Intelectual', value: 'Riesgo de Propiedad Intelectual', typeFilter: 'Tipo' },
        { label: 'Riesgo Ambiental', value: 'Riesgo Ambiental', typeFilter: 'Tipo' },
        { label: 'Riesgo Publicitario', value: 'Riesgo Publicitario', typeFilter: 'Tipo' },
        { label: 'Riesgo de Consumidor', value: 'Riesgo de Consumidor', typeFilter: 'Tipo' },
        { label: 'Riesgo Seguridad de la Información', value: 'Riesgo Seguridad de la Información', typeFilter: 'Tipo' },
        { label: 'Riesgo de Libre Competencia', value: 'Riesgo de Libre Competencia', typeFilter: 'Tipo' }],
    },
  ];
  const searchFunc = (match) => {
    if (match === '') {
      setProject(Api);
    } else {
      const filtroBusqueda = Api.filter((prj) => prj.name.includes(match));
      setProject(filtroBusqueda);
    }
  };
  const typing = (e) => {
    e.persist();
    setSearch(e.target.value);
    searchFunc(e.target.value);
  };
  const arrIdx = [];
  const filterFunc = (event, type) => {
    let arrRisk;
    if (type === 'Tipo') {
      // eslint-disable-next-line max-len
      arrRisk = Api.map((proj) => proj.risks.filter((typeRisk) => typeRisk.type.includes(event)));
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < arrRisk.length; i++) {
        if (arrRisk[i].length !== 0) {
          arrIdx.push(i);
        }
      }
      const otherArr = arrIdx.map((i) => Api[i]);
      setProject(otherArr);
    }
    if (type === 'Nivel') {
      // eslint-disable-next-line max-len
      arrRisk = Api.map((proj) => proj.risks.filter((typeRisk) => typeRisk.level.includes(event)));
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < arrRisk.length; i++) {
        if (arrRisk[i].length !== 0) {
          arrIdx.push(i);
        }
      }
      const otherArr = arrIdx.map((i) => Api[i]);
      setProject(otherArr);
    }
    if (type === 'All') {
      setProject(Api);
    }
    if (type === 'Cronologico' && event === 'Asc') {
      // eslint-disable-next-line max-len
      const arrSortA = Api.sort((lastDate, firstDate) => lastDate.startingDate - firstDate.startingDate);
      setProject(arrSortA);
    }
    if (type === 'Cronologico' && event === 'Desc') {
      // eslint-disable-next-line max-len
      const arrSort = Api.sort((lastDate, firstDate) => lastDate.startingDate - firstDate.startingDate);
      setProject(arrSort.reverse());
    }
  };
  return (
    <div className="container-filters">
      <div className="search-input">
        <img src={Lupita} alt="Buscar" />
        <input placeholder="Buscar por nombre" className="search-input" value={search} onChange={typing} />
      </div>
      <Select
        className="select-filter"
        placeholder="Filtrar por:"
        options={options}
        autoFocus
        isSearchable
        onChange={(e) => filterFunc(e.value, e.typeFilter)}
      />
      <button type="button" className="btn-list" value="list" onClick={() => { setGrid(false); setList(true); }}><img src={List} alt="List" /></button>
      <button type="button" className="btn-grid" value="grid" onClick={() => { setGrid(true); setList(false); }}><img src={Grid} alt="Grid" /></button>
    </div>
  );
}
