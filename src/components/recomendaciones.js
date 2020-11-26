/* eslint-disable react/prop-types */
import React from 'react';
import './recomendaciones.css';
import schema from '../API/data/schema';

export default function Recomendaciones({ arr }) {
  return (
    <div className="scrolling-Box">
      {/* {console.log(arr)} */}
      <table className="table-reco ">
        <thead>
          <tr>
            <th>Recomendacion</th>
            <th>Author</th>
            <th>Fecha</th>
            <th>     </th>
          </tr>
        </thead>
        <tbody>
          {!arr
            ? (schema[0].recomendations.map((element) => (
              <tr className="table-lines" key={element.title}>
                <td>{element.title}</td>
                <td>{element.author || 'Michelle Rojas'}</td>
                <td>{element.date}</td>
                <td><button type="button" className="table-button">Ver mas</button></td>
                {/* <td>{element.content}</td> */}

              </tr>
            ))) : <tr><td>Loading</td></tr>}

        </tbody>
      </table>
    </div>
  );
}
