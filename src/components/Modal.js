import React, { useEffect, useState } from 'react';
import { X, Heart, Share2 } from 'lucide-react';

const Modal = ({ data, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (data) {
      setShow(true);
    }
  }, [data]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 250); // match the transition duration
  };

  if (!data) return null;

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 py-8 transition-opacity duration-300 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 space-y-4 transition-all duration-300 transform ${
          show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
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

        {/* Like and Share */}
        <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button className="flex items-center gap-1 text-sm text-primary hover:scale-105 transition">
            <Heart size={18} /> Like
          </button>
          <button className="flex items-center gap-1 text-sm text-primary hover:scale-105 transition">
            <Share2 size={18} /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
// This component renders a modal for displaying detailed blog post content.
// It includes a close button, an image, title, full content, and like/share buttons.
// The modal appears with a fade-in effect and can be closed by clicking outside or on the close button.
// The component uses Tailwind CSS for styling and supports dark mode.
// The modal's visibility is controlled by the `data` prop, and it uses a transition effect for smooth appearance and disappearance.
// The `onClose` function is called when the modal is closed, allowing the parent component to reset the modal state.
// The modal also includes a backdrop that darkens the background when open, enhancing focus on the modal content.
// The like and share buttons are styled for a consistent look and feel, with hover effects for interactivity.
// The modal is responsive, adapting to different screen sizes while maintaining a maximum width and height.
// The content is scrollable if it exceeds the maximum height, ensuring usability on smaller screens.
// The component is designed to be reusable and can be integrated into any part of the application where detailed content needs to be displayed in a modal format.
// It lever