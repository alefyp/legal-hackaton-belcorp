import React from 'react';

import './upperBar.css';

export default function UpperBar() {
  const newUser = JSON.parse(localStorage.getItem('newUser'));
  console.log(newUser);
  return (
    <>
      <nav className="upperBar">
        <h1>Legal Keeper</h1>
        <ul>
          <li><img src={newUser.photoURL} alt="img-person" /></li>
          <li>{newUser.displayName}</li>
        </ul>
      </nav>
    </>
  );
}
