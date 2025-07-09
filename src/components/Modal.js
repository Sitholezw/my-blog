import React from 'react';

const Modal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark rounded-xl shadow-lg max-w-2xl w-full mx-4 p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-red-500 text-2xl font-bold focus:outline-none"
        >
          &times;
        </button>
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-primary dark:text-primary-light">
          {data.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">{data.fullContent}</p>
      </div>
    </div>
  );
};

export default Modal;
// This component renders a modal with detailed content.
// It displays an image, title, and full content of a blog post.
// The modal can be closed by clicking the close button or outside the modal area.
// It uses Tailwind CSS for styling and supports dark mode.
// The modal is positioned fixed to cover the entire viewport with a semi-transparent background.
// The modal content is centered and has a maximum width for better readability.
// The close button is styled to be prominent and user-friendly.