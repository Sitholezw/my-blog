import React from 'react';

const Modal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>&times;</button>
        <img src={data.image} alt={data.title} className="modal-image" />
        <h2 className="modal-title">{data.title}</h2>
        <p>{data.fullContent}</p>
      </div>
    </div>
  );
};

export default Modal;
