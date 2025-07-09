import React from 'react';

const Modal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg max-w-2xl w-full mx-4 p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold focus:outline-none"
        >
          &times;
        </button>
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2 text-indigo-700">{data.title}</h2>
        <p className="text-gray-700">{data.fullContent}</p>
      </div>
    </div>
  );
};

export default Modal;
