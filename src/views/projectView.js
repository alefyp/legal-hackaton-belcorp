// eslint-disable-next-line max-len
// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import Filters from '../components/filters';
import ProjectCards from '../components/projectCards';
import ProjectsList from '../components/projectList';
// import { gettingData } from '../API/authentications';
import UpdateCard from '../components/updateCard';
import './projectView.css';
import schema from '../API/data/schema';

export default function ProjectView() {
  const api = schema;
  console.log(api);
  const [grid, setGrid] = useState(true);
  const [list, setList] = useState(false);
  const [project, setProject] = useState(api);
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState('');
  const [kind, setKind] = useState('');
  const [sort, setSort] = useState('');

  /*   useEffect(() => {
    gettingData('projects').then((doc) => {
      const proyectos = doc.docs.map((algo) => ({ id: algo.id, ...algo.data() }));
      setProject(proyectos);
    });
  }, []); */
  console.log(project);
  return (
    <div className="container-sections">
      <section className="container-projects">
        <div className="header-projects">
          <h2>Proyectos</h2>
          <Filters
            setGrid={setGrid}
            setList={setList}
            setSearch={setSearch}
            search={search}
            project={project}
            setProject={setProject}
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
          {search}
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
