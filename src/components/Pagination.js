import React from 'react';

const Pagination = ({ totalPages, currentPage, onChange }) => {
  if (totalPages <= 1) return null;

  const generatePages = () => {
    const pages = [];
    const maxVisible = 5;

    // Always include first page
    pages.push(1);

    if (currentPage > 3) {
      pages.push('...');
    }

    // Middle pages
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    // Always include last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageItems = generatePages();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
      <div className="flex justify-center items-center gap-2 flex-wrap">
        {pageItems.map((page, index) =>
          page === '...' ? (
            <span key={index} className="px-3 py-2 text-gray-400 dark:text-gray-500 select-none">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onChange(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all font-medium
                ${
                  currentPage === page
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-white/10'
                }
              `}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Pagination;
// This component renders a pagination control for navigating through pages of blog posts.
// It generates page numbers dynamically based on the total number of pages and the current page.
// The pagination control includes ellipses for skipped pages and highlights the current page.