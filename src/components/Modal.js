import React from 'react';
import { X } from 'lucide-react'; // Optional icon for close

const Modal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 py-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 space-y-4 animate-fade-in transition-all"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
        >
          <X size={20} />
        </button>

        <img
          src={data.image}
          alt={data.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h2 className="text-2xl font-bold text-primary dark:text-primary-light">{data.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{data.fullContent}</p>
      </div>
    </div>
  );
};

export default Modal;
// This component renders a modal with the full content of a blog post.
// It includes a close button, an image, the title, and the full content of the post.
// The modal is displayed when a user clicks the "Read More" button on a blog post  