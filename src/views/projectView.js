// eslint-disable-next-line max-len
// import React, { useEffect, useState } from 'react';
import React, { useState, useEffect } from 'react';
import Filters from '../components/filters';
import ProjectCards from '../components/projectCards';
import ProjectsList from '../components/projectList';
// import { gettingData } from '../API/authentications';
import UpdateCard from '../components/updateCard';
import './projectView.css';
// import Lupita from '../Assets/Icons/Lupa.svg';
// import schema from '../API/data/schema';

import {
  listenAllDocs,
} from '../API/crud';

export default function ProjectView() {
  const [project, setProject] = useState([]);
  const [stateApi, setStateApi] = useState([]);

  useEffect(() => {
    listenAllDocs(setProject, 'projectos');
    listenAllDocs(setStateApi, 'projectos');
  }, []);

  // const api = schema;

  const [grid, setGrid] = useState(true);
  const [list, setList] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <div className="container-sections">
      <section className="container-projects">
        <div className="header-projects">
          <h2>Proyectos</h2>
          <Filters
            Api={stateApi}
            setGrid={setGrid}
            setList={setList}
            search={search}
            setProject={setProject}
            setSearch={setSearch}
          />
        </div>
        <div className="scrolling-Box">
          {list === false && grid === true ? project.map((proj) => (
            <ProjectCards key={`${proj.name}Card`} project={proj} />
          )) : null }
          {list === true && grid === false ? project.map((proj) => (
            <ProjectsList key={`${proj.name}List`} project={proj} />
          )) : null}
        </div>
      </section>
      <section className="container-updates">
        <div className="container-header-updates">
          <h2>Actividad reciente</h2>
        </div>
        <div className="container-cards">
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
        </div>
      </section>
    </div>
  );
}
