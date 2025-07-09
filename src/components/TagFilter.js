import React from 'react';

const TagFilter = ({ tags, selectedTag, onSelect }) => (
  <div className="tag-filter">
    {tags.map(tag => (
      <button
        key={tag}
        className={selectedTag === tag ? "active" : ""}
        onClick={() => onSelect(tag)}
      >
        {tag}
      </button>
    ))}
  </div>
);

export default TagFilter;
