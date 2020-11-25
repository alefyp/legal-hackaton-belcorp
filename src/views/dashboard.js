/* eslint-disable react/prop-types */
import React from 'react';
import NavBar from '../components/navBar';
import UpperBar from '../components/upperBar';
import './dashboard.css';

export default function Dashboard() {
  return (
    <div className="container-dashboard">
      <NavBar />
      <div className="Container-upper">
        <UpperBar />
      </div>
    </div>
  );
}
