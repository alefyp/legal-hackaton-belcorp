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

  useEffect(() => {
    listenAllDocs(setProject, 'projectos');
  }, []);

  // const api = schema;
  // console.log(api);
  const [grid, setGrid] = useState(true);
  const [list, setList] = useState(false);
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState('');
  const [kind, setKind] = useState('');
  const [sort, setSort] = useState('');

  return (
    <div className="container-sections">
      <section className="container-projects">
        <div className="header-projects">
          <h2>Proyectos</h2>
          <Filters
            Api={project}
            setGrid={setGrid}
            setList={setList}
            search={search}
            setProject={setProject}
            setSearch={setSearch}
            level={level}
            kind={kind}
            sort={sort}
            setLevel={setLevel}
            setKind={setKind}
            setSort={setSort}
          />
        </div>
        <div className="card-container">
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
        <UpdateCard />
      </section>
    </div>
  );
}
