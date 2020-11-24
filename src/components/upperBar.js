import React from 'react';
import AddFile from '../Assets/Icons/add-fille.svg';
import Bell from '../Assets/Icons/withoutbell.svg';

import './upperBar.css';

export default function UpperBar() {
  return (
    <>
      <nav className="upperBar">
        <h1>Legal Keeper</h1>
        <ul>
          <li><img src={AddFile} alt="addFile" /></li>
          <li><img src={Bell} alt="alert-bell" /></li>
          <li>imag</li>
          <li>user</li>
        </ul>
      </nav>
    </>
  );
}
