import React from 'react';

const TagFilter = ({ tags, selectedTag, onSelect }) => (
  <div className="flex flex-wrap gap-2 justify-center mb-6">
    {tags.map(tag => (
      <button
        key={tag}
        onClick={() => onSelect(tag)}
        className={`px-4 py-2 rounded-full border text-sm font-medium transition-all
          ${
            selectedTag === tag
              ? 'bg-primary text-white border-primary'
              : 'bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark border-gray-300 dark:border-gray-600 hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white'
          }`}
      >
        {tag}
      </button>
    ))}
  </div>
);

export default TagFilter;
// This component renders a tag filter for blog posts.
// It displays a list of tags as buttons.
// When a tag is selected, it applies a different style to indicate the active state.
// The `onSelect` function is called with the selected tag when a button is clicked.
// The component uses Tailwind CSS for styling, ensuring a consistent look with the rest of the application.
// The tags are displayed in a flexible layout that wraps to fit the available space.
// The selected tag is highlighted with a primary color, while unselected tags have a neutral background.
// The buttons are styled to be visually appealing and user-friendly, with hover effects for better interactivity.
// The component is designed to be reusable, allowing it to be used in different parts of the application
// where tag filtering is needed.