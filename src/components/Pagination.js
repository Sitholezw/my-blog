import React from 'react';

const Pagination = ({ totalPages, currentPage, onChange }) => (
  <div className="pagination">
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
        onClick={() => onChange(index + 1)}
      >
        {index + 1}
      </button>
    ))}
  </div>
);

export default Pagination;
