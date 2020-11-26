/* eslint-disable react/prop-types */
import React from 'react';
// import schema from '../API/data/schema';
import iconFileTypePdf from '../Assets/pdfpdf.svg';
import iconFileTypeWrd from '../Assets/wordword.svg';
import download from '../Assets/downloaddownland.svg';
import view from '../Assets/eye-outlinedview.svg';
import trash from '../Assets/trashbin.svg';

export default function Attachments({ arr }) {
  const newArr = arr.map((e) => e.attachments).flat();
  // const validateArr = newArr || <h1>no items</h1>;
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
              ? (newArr.map((element, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <tr className="table-lines" key={`${i}${element.title}`}>
                  {console.log(element)}
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
              )))
              : <tr><td>Loading</td></tr>}

          </tbody>
        </table>
      </div>
    </>
  );
}
