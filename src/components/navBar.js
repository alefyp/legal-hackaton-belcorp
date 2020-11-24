import React from 'react';
import Logo from '../Assets/Icons/Logo-Belcorp.svg';
import Proyectos from '../Assets/Icons/Proyectos.svg';
import Agregar from '../Assets/Icons/Agregar.svg';
import Perfil from '../Assets/Icons/Perfil.svg';
import Salir from '../Assets/Icons/Salir.svg';

import './navBar.css';

export default function NavBar() {
  return (
    <>
      <nav className="navBar">
        <ul>
          <li><img src={Logo} alt="Logo" className="Logo" /></li>
          <li><img src={Proyectos} alt="Proyectos" /></li>
          <li><img src={Agregar} alt="Agregar" /></li>
          <li><img src={Perfil} alt="Perfil" /></li>
          <li><img src={Salir} alt="Salir" /></li>
        </ul>
      </nav>
    </>
  );
}
