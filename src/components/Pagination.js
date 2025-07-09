import React from 'react';

const Pagination = ({ totalPages, currentPage, onChange }) => (
  <div className="flex flex-wrap justify-center gap-2 mt-10">
    {Array.from({ length: totalPages }, (_, index) => {
      const page = index + 1;
      const isActive = currentPage === page;

      return (
        <button
          key={page}
          onClick={() => onChange(page)}
          className={`px-4 py-2 rounded-lg border transition font-medium
            ${
              isActive
                ? 'bg-primary text-white border-primary'
                : 'bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark border-gray-300 dark:border-gray-600 hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white'
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
// It highlights the current page and applies different styles for active and inactive pages.
// The `onChange` function is called with the selected page number when a button is clicked.
// The component uses Tailwind CSS for styling, ensuring a consistent look with the rest of the application 