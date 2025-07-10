import React, { useEffect, useState } from 'react';
import { X, Heart, HeartOff, Share2, Check } from 'lucide-react';

const Modal = ({ data, onClose }) => {
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (data) {
      setShow(true);
      setLiked(false);
      setLikeCount(Math.floor(Math.random() * 50)); // mock count
    }
  }, [data]);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 250);
  };

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => prev + (liked ? -1 : 1));
  };

  const handleShare = () => {
    const url = `${window.location.origin}/#post-${data.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
        {/* Close */}
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

        {/* Like + Share */}
        <div className="flex gap-6 pt-4 border-t border-gray-200 dark:border-gray-700 items-center">
          {/* Like */}
          <button
            onClick={toggleLike}
            className="flex items-center gap-1 text-sm text-primary hover:scale-105 transition"
          >
            {liked ? (
              <Heart className="text-red-500 fill-red-500" size={18} />
            ) : (
              <HeartOff size={18} />
            )}
            {likeCount} Like{likeCount !== 1 && 's'}
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="flex items-center gap-1 text-sm text-primary hover:scale-105 transition"
          >
            {copied ? (
              <>
                <Check size={18} className="text-green-500" /> Copied!
              </>
            ) : (
              <>
                <Share2 size={18} /> Share
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
// This component renders a modal for displaying blog post details.
// It includes features like liking the post, sharing the post link, and closing the modal.
// The modal appears with a fade-in effect and can be closed by clicking outside or on the close button.
// The like button toggles the like state and updates the like count.
// The share button copies the post link to the clipboard and shows a confirmation message.
// The modal is responsive and adapts to different screen sizes, ensuring a good user experience on both desktop and mobile devices.
// The component uses Tailwind CSS for styling and Lucide icons for the