/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import COL from '../Assets/FlagsSvg/COLOMBIA.svg';
// import PER from '../Assets/FlagsSvg/Group 198PER.svg';
// import BOL from '../Assets/FlagsSvg/Group 230Bol.svg';
// import CHI from '../Assets/FlagsSvg/Group 199CHI.svg';
// import GUA from '../Assets/FlagsSvg/Group 231GUA.svg';
// import BRA from '../Assets/FlagsSvg/Group 200Brasil.svg';
import trash from '../Assets/Icons/trash.svg';
import schema from '../API/data/schema';
import './Risk.css';

// const icons = [{
//   name: 'Colombia',
//   path: COL,
// }, {
//   name: 'Peru',
//   path: PER,
// }, {
//   name: 'Colombia',
//   path: BOL,
// }, {
//   name: 'Chile',
//   path: CHI,
// }, {
//   name: 'Guatemala',
//   path: GUA,
// }, {
//   name: 'Brasil',
//   path: BRA,
// }];

export default function Risks({ arr }) {
  const initialState = schema[0].risks;
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(initialState);// recibo solo uno
  //   const [filterCountry, setFilterCountry] = useState('');
  //   const handleClick = () => {
  //     console.log(filterCountry);
  //     const newArr = [];
  //     data.forEach(((obj) => {
  //       obj.countries.forEach((country) => {
  //         if (country === filterCountry) {
  //           newArr.push(obj);
  //         }
  //       });
  //     }));
  //     setData(newArr);
  //   };
  return (
    <>
      {/* <div className="countries-container">
        <div>
          <h3 className="subtitleStyle">PAÍSES INVOLUCRADOS</h3>
          <p className="subtitle-description">Selecciona un país para ver los riesgos</p>

        </div>
        {
        //               icons.map((icon) => (
        //                 <div className="Country-icon" key={icon.path}>
        //                   <img src={icon.path} alt={icon.name} />
        //                   <input
        //                     type="button"
        //                     value={icon.name}
        //                     onClick={handleClick}
        // />
        //                 </div>
        //               ))

          icons.map((icon) => (
            <button
              type="button"
              className="Country-icon"
              onClick={(e) => {
                e.preventDefault();
                setFilterCountry(icon.name);
                handleClick();
              }}
              key={icon.path}>
              <img src={icon.path} alt={icon.name} />
            </button>
          ))
      }
      </div> */}

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
            ))) : <tr><td>Loading</td></tr>}

        </tbody>
      </table>
    </>
  );
}
