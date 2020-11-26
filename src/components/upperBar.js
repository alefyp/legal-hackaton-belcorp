import React from 'react';
import AddFile from '../Assets/Icons/add-fille.svg';
import Bell from '../Assets/Icons/withoutbell.svg';

import './upperBar.css';

export default function UpperBar() {
  const newUser = JSON.parse(localStorage.getItem('newUser'));
  console.log(newUser);
  return (
    <>
      <nav className="upperBar">
        <h1>Legal Keeper</h1>
        <ul>
          <li><img src={AddFile} alt="addFile" /></li>
          <li><img src={Bell} alt="alert-bell" /></li>
          <li><img src={newUser.photoURL} alt="img-person" /></li>
          <li>{newUser.displayName}</li>
        </ul>
      </nav>
    </>
  );
}
