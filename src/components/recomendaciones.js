/* eslint-disable react/prop-types */
import React from 'react';
import './recomendaciones.css';
// import schema from '../API/data/schema';
// import Modal from './Modal';

export default function Recomendaciones({ arr, setStatus, setReco }) {
  return (
    <div className="scrolling-Box-temporal">
      <table className="table-reco ">
        <thead>
          <tr>
            <th>Sumilla</th>
            <th>Autor</th>
            <th>Fecha</th>
            <th>     </th>
          </tr>
        </thead>
        <tbody>
          {arr
            ? (arr.map((element) => (
              <tr className="table-lines" key={element.title}>
                <td>{element.title}</td>
                <td>{element.author || 'Ana Paz'}</td>
                <td>{element.date}</td>

                <td>
                  <button
                    type="button"
                    className="table-button"
                    onClick={() => {
                      setStatus(true);
                      setReco(element);
                    }}>
                    Ver mas
                  </button>

                </td>
                {/* <td>{element.content}</td> */}

              </tr>
            ))) : <tr><td>Loading</td></tr>}

        </tbody>
      </table>
    </div>
  );
}
