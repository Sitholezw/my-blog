import React from 'react';

const TagFilter = ({ tags, selectedTag, onSelect }) => (
  <div className="flex flex-wrap justify-center gap-3 my-6">
    {tags.map((tag) => (
      <button
        key={tag}
        onClick={() => onSelect(tag)}
        className={`px-4 py-2 rounded-full border text-sm transition 
          ${
            selectedTag === tag
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-indigo-100'
          }`}
      >
        {tag}
      </button>
    ))}
  </div>
);

export default TagFilter;
// This component renders a tag filter with buttons for each tag.