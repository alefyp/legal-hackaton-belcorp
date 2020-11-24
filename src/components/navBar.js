// Any component that wants auth state
import React from 'react';

import './navBar.css';

export default function NavBar() {
  return (
    <>
      <nav className="navBar">
        <ul>
          <li>Proyectos</li>
          <li>Nuevo Proyectos</li>
          <li>Usuario</li>
        </ul>
      </nav>
    </>
  );
}
