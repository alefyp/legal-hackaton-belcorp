/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import trash from '../Assets/Icons/trash.svg';
import schema from '../API/data/schema';
import './Risk.css';

export default function Risks({ arr }) {
  const initialState = schema[0].risks;
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(initialState);// recibo solo uno
  return (
    <>

      <table className="table-reco">
        <thead>
          <tr>
            <th>Tipo de Riesgo</th>
            <th>Nivel de Riesgo</th>
            <th>Fecha</th>
            <th>Se asumió riesgo</th>
            <th>Responsable</th>
          </tr>
        </thead>
        <tbody>
          {arr
            ? (arr.map((element, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr className="table-lines" key={`${element.type}${i}`}>
                <td>{element.type}</td>
                <td>
                  {/* eslint-disable-next-line max-len */}
                  <span className={`riskTab ${element.level === 'Alto' ? 'red' : element.level === 'Medio' ? 'yellow' : 'green'}`}>
                    {' '}
                    Riesgo
                    {' '}
                    {element.level}
                  </span>
                </td>
                <td>{element.date}</td>
                <td>
                  {element.responsable
                    ? <input type="checkbox" defaultChecked />
                    : <input type="checkbox" disabled />}

                </td>
                <td>{element.responsable || '-----'}</td>
                <td className="trash-cell"><img src={trash} alt="trash" /></td>
              </tr>
            )))
            : <tr><td>Loading</td></tr>}

        </tbody>
      </table>
    </>
  );
}
