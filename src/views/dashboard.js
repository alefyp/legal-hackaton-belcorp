/* eslint-disable react/prop-types */
import React from 'react';
import { signOut } from '../API/authentications';
import NavBar from '../components/navBar';
import UpperBar from '../components/upperBar';
import Filters from '../components/filters';
import './dashboard.css';

export default function Dashboard() {
  return (
    <div className="container-dashboard">
      <NavBar />
      <div className="Container-upper">
        <UpperBar />
        <h2>Proyectos</h2>
        <Filters />
      </div>
      <button
        type="button"
        onClick={signOut}>
        signOut

      </button>
    </div>
  );
}
