/* eslint-disable react/prop-types */
import React from 'react';
import NavBar from '../components/navBar';
import UpperBar from '../components/upperBar';
import Filters from '../components/filters';
import './dashboard.css';
import ProjectsCard from '../components/projectCards';
import UpdateCard from '../components/updateCard';

export default function Dashboard() {
  return (
    <div className="container-dashboard">
      <NavBar />
      <div className="Container-upper">
        <UpperBar />
        <div className="container-sections">
          <section className="container-projects">
            <div className="header-projects">
              <h2>Proyectos</h2>
              <Filters />
            </div>
            <div className="card-container">
              <ProjectsCard />
            </div>
          </section>
          <section className="container-updates">
            <h2>Actualizaciones</h2>
            <UpdateCard />
          </section>
        </div>
      </div>
    </div>
  );
}
