/* eslint-disable react/prop-types */
import React from 'react';
// import schema from '../API/data/schema';
import iconFileTypePdf from '../Assets/pdfpdf.svg';
import iconFileTypeWrd from '../Assets/wordword.svg';
import download from '../Assets/downloaddownland.svg';
import view from '../Assets/eye-outlinedview.svg';
import trash from '../Assets/trashbin.svg';

export default function Attachments({ arr }) {
  return (
    <>
      <div>

        <table className="table-reco ">
          <thead>
            <tr>
              <th>Documento</th>
              <th>Fecha</th>
              <th>Agregado por</th>
              <th>Tipo</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {arr
              ? (arr.map((element) => (
                <tr className="table-lines" key={element.title}>
                  <td>{element.title}</td>
                  <td>{element.date}</td>
                  <td>{element.responsable || 'Michelle Rojas'}</td>

                  <td className="trash-cell"><img src={element.type === '.pdf' ? iconFileTypePdf : iconFileTypeWrd} alt={iconFileTypeWrd} /></td>
                  <td className="trash-cell">
                    <a href="https://sun_tile.jpg" download>
                      {/* FALTAAAAAAA!! */}
                      <img src={download} alt="download" />
                    </a>
                    {' '}
                    <img src={view} alt="view" />
                    <img src={trash} alt="trash" />
                  </td>

                </tr>
              ))) : <tr><td>Loading</td></tr>}

          </tbody>
        </table>
      </div>
    </>
  );
}
