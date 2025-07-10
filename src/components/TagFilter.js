import React from 'react';

const TagFilter = ({ tags, selectedTag, onSelect }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap gap-3 justify-center sm:justify-start py-6">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onSelect(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border
              ${
                selectedTag === tag
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-white/10'
              }
            `}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
// This component renders a tag filter for blog posts.
// It displays a list of tags as buttons, allowing users to filter posts by tag.
// The selected tag is highlighted, and clicking a tag calls the `onSelect` function with the tag name.
// The component uses Tailwind CSS for styling and supports dark mode.  