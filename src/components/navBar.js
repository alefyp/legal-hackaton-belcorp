// Any component that wants auth state
import React from 'react';

import './navBar.css';

export default function NavBar() {
  return (
    <>
      <nav className="navBar">
        <ul>
          <li>Proyectos</li>
          <li>Agregar</li>
          <li>Perfil</li>
          <li>Salir</li>
        </ul>
      </nav>
    </>
  );
}
