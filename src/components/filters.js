/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
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

  const searchFunc = () => {
    const filtroBusqueda = Api.filter((prj) => prj.name.includes(search));
    console.log(filtroBusqueda);
    return setProject(filtroBusqueda);
  };

  const filterFunc = (event, type) => {
    if (type === 'Tipo') {
      // eslint-disable-next-line max-len
      const arrRisk = Api.map((risk) => risk.risks.filter((typeRisk) => typeRisk.type.includes(event)));
      console.log(arrRisk);
    }
    if (type === 'Nivel') {
      // eslint-disable-next-line max-len
      Api.map((risk) => risk.risks.filter((typeRisk) => typeRisk.level.includes(event)));
    }
    if (type === 'Cronologico') {
      // eslint-disable-next-line max-len
      Api.map((risk) => risk.sort());
    }
    console.log(event);
  };

  useEffect(() => {
    setProject(Api);
  }, [setSearch, search]);
  return (
    <div className="container-filters">
      <div className="search-input">
        <img src={Lupita} alt="Buscar" />
        <input placeholder="Buscar por nombre" className="search-input" value={search} onChange={async (e) => { e.persist(); await setSearch(e.target.value); console.log(e.target.value); searchFunc(); }} />
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
