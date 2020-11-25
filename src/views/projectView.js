import React, { useEffect, useState } from 'react';
import Filters from '../components/filters';
import ProjectCards from '../components/projectCards';
import ProjectsList from '../components/projectList';
import { gettingData } from '../API/authentications';
import UpdateCard from '../components/updateCard';
import './projectView.css';
import Lupita from '../Assets/Icons/Lupa.svg';

export default function ProjectView() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    gettingData('projects').then((doc) => {
      const proyectos = doc.docs.map((algo) => ({ id: algo.id, ...algo.data() }));
      setProject(proyectos);
    });
  }, []);
  console.log(project);
  return (
    <div className="container-sections">
      <section className="container-projects">
        <div className="header-projects">
          <h2>Proyectos</h2>
          <Filters />
        </div>
        <div className="card-container">
          {project.map((proj) => (
            <ProjectCards key={`${proj}card`} project={proj} />
          ))}
          <ProjectsList />
        </div>
      </section>
      <section className="container-updates">
        <div className="container-header-updates">
          <h2>Actualizaciones</h2>
          <button type="button"><img src={Lupita} alt="search-update" /></button>
        </div>
        <UpdateCard />
      </section>
    </div>
  );
}
