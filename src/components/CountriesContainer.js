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
  name: 'Bolivia',
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
  const handleClick = (name) => {
    // console.log(filterCountry);// BORRA LINEA 30
    // console.log(name);
    const newArr = [];
    // console.log(data);
    data.risks.forEach(((obj) => {
      obj.countries.forEach((country) => {
        if (country === name) {
          newArr.push(obj);
        }
      });
    }));
    // console.log(newArr);
    setData(newArr);
  };
  return (
    <div className="countries-container">
      <div>
        <h3 className="subtitleStyle">PAÍSES INVOLUCRADOS</h3>
        <p className="subtitle-description">Selecciona un país para ver los riesgos</p>

      </div>
      {

          icons.map((icon) => (
            <button
              type="button"
              className="Country-icon"
              onClick={(e) => {
                e.preventDefault();
                setFilterCountry(icon.name);
                handleClick(icon.name);
              }}
              key={icon.path}>
              <img src={icon.path} alt={icon.name} />
            </button>
          ))
      }
    </div>
  );
}
