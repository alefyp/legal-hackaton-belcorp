import React from 'react';
import Filters from '../components/filters';
import ProjectsList from '../components/projectList';
import UpdateCard from '../components/updateCard';
import './projectView.css';
import Lupita from '../Assets/Icons/Lupa.svg';

export default function ProjectView() {
  return (
    <div className="container-sections">
      <section className="container-projects">
        <div className="header-projects">
          <h2>Proyectos</h2>
          <Filters />
        </div>
        <div className="card-container">
          <ProjectsList />
          <ProjectsList />
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
