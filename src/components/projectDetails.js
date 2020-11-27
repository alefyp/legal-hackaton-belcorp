import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';

// import { getADocument } from '../API/crud';
import './projectDetails.css';
import Recomendaciones from './recomendaciones';
import obj from '../API/data/schema';
import Risks from './Risks';
import Attachments from './attachments';
import CountriesContainer from './CountriesContainer';
import Modal from './Modal';
import MyDocument from './MyDocument';
// import schema from

export default function projectDetails() {
  const [filterCountry, setFilterCountry] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [object, setObject] = useState(obj[0]);// projecto
  const [risks, setRisks] = useState([]); // Risks
  // const [prueba, setPrueba] = useState({});
  const history = useHistory();
  const { id } = useParams();
  // const [project, setProject] = useState({});
  const [status, setStatus] = useState(false);
  const [reco, setReco] = useState('');

  useEffect(() => {
    // console.log(project);
    if (id) {
      // getADocument(id, 'projectos')
      //   .then((doc) => (doc.exists ? console.log(doc) : console.log('No such document!')))
      //   .catch((error) => console.log('Error getting document:', error));
      // console.log(prueba);
    }
    // console.log(prueba);
  }, [id]);

  // const handleClick = (e) => {
  //   e.preventDefault();
  // };
  return (
    <section className="project-details">
      <div className="project-details-container">

        { status && (
        <Modal closeModal={() => setStatus(false)}>
          {' '}
          <h3 className="modal-content M-title">{reco.title}</h3>
          <h6 className="modal-content">{reco.author || 'Michelle Rojas'}</h6>
          <h6 className="modal-content">{reco.date}</h6>
          <p className="modal-content">{reco.content}</p>
        </Modal>
        )}
        <h3 className="inlineBlocks">PROYECTO</h3>
        <h4 className="inlineBlocks">
          {object.name}
        </h4>
        <div>
          <h3 className="subtitleStyle">DESCRIPCIÓN</h3>
          <p className="scrolling-Box-description">
            {object.description}
          </p>
        </div>
        <div className="description-details">
          <h6>Cliente</h6>
          <span>{object.owner || 'Maria Cristina Paredes'}</span>
          <h6>Area</h6>
          <span>{object.area || 'Ventas' }</span>
          <h6>Fecha de lanzamiento</h6>
          <span>{object.date || '10/06/2020'}</span>
        </div>
        <h3 className="subtitleStyle">RECOMENDACIONES</h3>
        <p className="subtitle-description">
          Aquí podrás ver las recomendaciones u observaciones de este proyecto
        </p>

        <Recomendaciones
          arr={object.recomendations}
          setStatus={setStatus}
          setReco={setReco}
        />
        <CountriesContainer
          filterCountry={filterCountry}
          setFilterCountry={setFilterCountry}
          data={object}
          setData={setRisks}

          />
        {console.log(risks)}
        <Risks arr={risks} filterCountry={filterCountry} />
        <h3 className="subtitleStyle">ARCHIVOS ADJUNTOS</h3>
        <p className="subtitle-description">Descarga, revisa o elimina</p>

        <Attachments arr={risks} />
        <div className="button-box-layout">
          <button
            type="button"
            onClick={() => history.goBack()}
            className="back details-button">
            REGRESAR

          </button>
          <div className="download details-button">
            <PDFDownloadLink document={<MyDocument project={object} risks={risks} />} fileName={`${object.name}.pdf`}>
              {({
                loading,
              }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
          </div>
          {/* <button
            type="button"
            className="download details-button"
            // onClick={handleClick}
            >
            DESCARGAR
          </button> */}

        </div>
        <MyDocument project={object} risks={risks} />
        {/* <View style={styles.section}>
        <Text>Section #2</Text>
      </View> */}

      </div>

    </section>
  );
}
