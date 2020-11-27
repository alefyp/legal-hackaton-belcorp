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
    { label: 'Mostrar todos' },
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

  const filterFunc = (event, type) => {
    let arrRisk;
    let otherArr;
    if (type === 'Tipo') {
      // eslint-disable-next-line max-len
      arrRisk = Api.map((proj) => proj.risks.filter((typeRisk) => typeRisk.type.includes(event)));
      arrRisk.map((proj) => {
        if (proj === []) {
          return otherArr;
        }
        return otherArr.push(proj);
      });
      console.log(otherArr);
    /*   arrRisk.forEach((risk) => {
        if (risk !== []) {
          otherArr.push(risk);
        }
      }); */
    }
    if (type === 'Nivel') {
      // eslint-disable-next-line max-len
      arrRisk = Api.map((proj) => proj.risks.filter((typeRisk) => typeRisk.level.includes(event)));
      console.log(arrRisk);
    }
    if (type === 'Cronologico') {
      // eslint-disable-next-line max-len
      arrRisk = Api.sort((lastDate, firstDate) => {
        if (lastDate.startingDate > firstDate.startingDate) { return 1; } return -1;
      });
      if (event === 'Desc') {
        arrRisk.reverse();
      }
    }
    return otherArr;
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
