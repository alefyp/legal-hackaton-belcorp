/* eslint-disable react/prop-types */
import React from 'react';
// import { useHistory } from 'react-router-dom';
import { signOut } from '../API/authentications';
import NavBar from '../components/navBar';

export default function Dashboard() {
//   const history = useHistory();
  return (
    <>
      <NavBar />
      <p>Dashboard</p>
      <button
        type="button"
        onClick={signOut}>
        signOut

      </button>
    </>
  );
}
