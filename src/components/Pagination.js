import React from 'react';

const Pagination = ({ totalPages, currentPage, onChange }) => (
  <div className="flex flex-wrap justify-center mt-10 gap-2">
    {Array.from({ length: totalPages }, (_, index) => {
      const page = index + 1;
      const isActive = currentPage === page;

      return (
        <button
          key={page}
          onClick={() => onChange(page)}
          className={`px-4 py-2 rounded-lg border transition 
            ${
              isActive
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-indigo-100'
            }`}
        >
          {page}
        </button>
      );
    })}
  </div>
);

export default Pagination;
// This component renders a pagination control with buttons for each page.