import React from 'react';
import Filters from '../components/filters';
import './projectView.css';
import ProjectsCard from '../components/projectCards';
import UpdateCard from '../components/updateCard';
// import {
//   // listenAllDocs,
//   sendCCI,
// } from '../API/crud';
// import schema from '../API/data/schema';

export default function ProjectView() {
  // const [projectsData, setProjectsData] = useState([]);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // listenAllDocs(setProjectsData);
  //   sendCCI(schema);
  // }, []);
  return (
    <div className="container-sections">
      <section className="container-projects">
        <div className="header-projects">
          <h2>Proyectos</h2>
          <Filters />
        </div>
        <div className="card-container">
          <ProjectsCard />
          {/* <ProjectsCard projectsData={projectsData} /> */}
        </div>
      </section>
      <section className="container-updates">
        <h2>Actualizaciones</h2>
        <UpdateCard />
      </section>
    </div>
  );
}
