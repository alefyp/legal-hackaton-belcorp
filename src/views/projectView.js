// eslint-disable-next-line max-len
// import React, { useEffect, useState } from 'react';
import React, { useState, useEffect } from 'react';
import Filters from '../components/filters';
import ProjectCards from '../components/projectCards';
import ProjectsList from '../components/projectList';
// import { gettingData } from '../API/authentications';
import UpdateCard from '../components/updateCard';
import './projectView.css';
import photo1 from '../Assets/photos/alessandraVinateaAlePhoto.svg';
import photo2 from '../Assets/photos/michelleFujiiphotos.png';
import photo3 from '../Assets/photos/fiammaDeVinateaphotos.png';
import photo4 from '../Assets/photos/Alexandra Rojasphotos.png';

import proj1 from '../Assets/projectImg/tienda-onlineprojImg.svg';
import proj2 from '../Assets/projectImg/asesorprojImg.svg';
import proj4 from '../Assets/projectImg/crecerprojImg.svg';
import proj6 from '../Assets/projectImg/sociasprojImg.svg';
import proj3 from '../Assets/projectImg/esika-conmigoprojImg.svg';

import {
  listenAllDocs,
} from '../API/crud';

export default function ProjectView() {
  const [project, setProject] = useState([]);
  const [stateApi, setStateApi] = useState([]);

  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    listenAllDocs(setProject, 'projectos');
    listenAllDocs(setStateApi, 'projectos');
    listenAllDocs(setUpdates, 'Actualizaciones');
  }, []);

  // const api = schema;

  const [grid, setGrid] = useState(true);
  const [list, setList] = useState(false);
  const [search, setSearch] = useState('');
  const arrPhoto = [photo4, photo2, photo3, photo1, photo2];
  const arrProject = [proj1, proj6, proj4, proj2, proj3];
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
          {list === false && grid === true ? project.map((proj, i) => (
            <ProjectCards key={`${proj.name}Card`} project={proj} ph={arrProject[i]} />
          )) : null }
          {list === true && grid === false ? project.map((proj, i) => (
            <ProjectsList key={`${proj.name}List`} project={proj} ph={arrProject[i]} />
          )) : null}
        </div>
      </section>
      <section className="container-updates">
        <div className="container-header-updates">
          <h2>Actividad reciente</h2>
        </div>
        <div className="container-cards">
          {
            updates.map((proj, i) => (
              <UpdateCard key={`${proj.update}updt`} project={proj} ph={arrPhoto[i]} />
            ))
            }
        </div>
      </section>
    </div>
  );
}
