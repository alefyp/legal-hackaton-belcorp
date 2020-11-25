/* eslint-disable react/prop-types */
import React from 'react';

export default function Recomendaciones({ arr }) {
  return (
    <div>
      {console.log(arr)}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {
              arr.map((element) => (
                <tr key={element}>
                  <td>{element.title}</td>
                  <td>{element.date}</td>
                  <td>{element.content}</td>
                </tr>
              ))
          }

          {/* <tr>
            <td>Sue</td>
            <td>00002</td>
            <td>Red</td>
          </tr>
          <tr>
            <td>Barb</td>
            <td>00003</td>
            <td>Green</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
