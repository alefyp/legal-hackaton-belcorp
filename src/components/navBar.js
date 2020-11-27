import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Logo from '../Assets/Icons/Logo-Belcorp.svg';
import Proyectos from '../Assets/Icons/Proyectos.svg';
import Agregar from '../Assets/Icons/Agregar.svg';
import Perfil from '../Assets/Icons/Perfil.svg';
import Salir from '../Assets/Icons/Salir.svg';

import ProjectDetails from './projectDetails';
import ProjectView from '../views/projectView';
import AddingProject from '../views/addingProject';
import { signOut } from '../API/authentications';

import './navBar.css';

export default function NavBar(viewComponent, setViewComponent) {
  console.log(viewComponent, setViewComponent);
  return (
    <Router>
      <nav className="navBar">
        <ul>
          <li>
            {/* <Link to="/dashboard"> */}
            <img src={Logo} alt="Logo" className="Logo" />
            {/* </Link> */}
          </li>
          <li>
            <Link to="/dashboard">
              <img src={Proyectos} alt="Proyectos" />
            </Link>
          </li>
          <li>
            <Link to="/Agregar">
              <img src={Agregar} alt="Agregar" />
            </Link>
          </li>
          <li>
            <Link to="/Perfil">
              <img src={Perfil} alt="Perfil" />
            </Link>
          </li>
          <li
            onClick={signOut}
            role="presentation"
            >
            <img src={Salir} alt="Salir" />
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/dashboard">
          <ProjectView />
        </Route>
        <Route path="/Agregar">
          <AddingProject />
        </Route>
        <Route path="/dashboard/project:id">
          <ProjectDetails />

        </Route>
        {/* <Route path="/Salir">
          <h2>/Salir</h2>
        </Route> */}
      </Switch>
    </Router>
  );
}
