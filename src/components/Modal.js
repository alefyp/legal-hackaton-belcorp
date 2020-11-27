/* eslint-disable react/prop-types */
import React from 'react';
import './modal.css';
// import FontAwesome from 'react-fontawesome';
import CloseIcon from '@material-ui/icons/Close';

const Modal = (props) => {
  const { closeModal, children } = props;

  const closeicon = () => (
    <div style={{
      color: 'rgba(0, 0, 0, 0.5)',
      padding: '10px',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: 0,
      position: 'absolute',
      top: '0.3rem',
      right: '0.5rem',
    }}>
      <CloseIcon onClick={closeModal} />

    </div>

  );

  return (
    <div className="overlay">
      <div className="content">
        { closeicon() }
        {children}
      </div>
    </div>
  );
};

export default Modal;
