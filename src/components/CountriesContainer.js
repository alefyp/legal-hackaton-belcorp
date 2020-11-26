/* eslint-disable react/prop-types */
import React from 'react';
import COL from '../Assets/FlagsSvg/COLOMBIA.svg';
import PER from '../Assets/FlagsSvg/Group 198PER.svg';
import BOL from '../Assets/FlagsSvg/Group 230Bol.svg';
import CHI from '../Assets/FlagsSvg/Group 199CHI.svg';
import GUA from '../Assets/FlagsSvg/Group 231GUA.svg';
import BRA from '../Assets/FlagsSvg/Group 200Brasil.svg';

const icons = [{
  name: 'Colombia',
  path: COL,
}, {
  name: 'Peru',
  path: PER,
}, {
  name: 'Colombia',
  path: BOL,
}, {
  name: 'Chile',
  path: CHI,
}, {
  name: 'Guatemala',
  path: GUA,
}, {
  name: 'Brasil',
  path: BRA,
}];
export default function CountriesContainer({
  // eslint-disable-next-line no-unused-vars
  filterCountry, setFilterCountry, data, setData,
}) {
  const handleClick = () => {
    console.log(filterCountry);// BORRA LINEA 30
    // const newArr = [];
    // data.forEach(((obj) => {
    //   obj.countries.forEach((country) => {
    //     if (country === filterCountry) {
    //       newArr.push(obj);
    //     }
    //   });
    // }));
    // setData(newArr);
  };
  return (
    <div className="countries-container">
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
    </div>
  );
}
