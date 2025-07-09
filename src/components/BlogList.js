import React from 'react';

const BlogList = ({ posts, openModal }) => (
  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {posts.map(post => (
      <article
        key={post.id}
        className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark rounded-lg shadow-md overflow-hidden transition hover:scale-[1.02]"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col gap-2">
          <h2 className="text-xl font-bold text-primary dark:text-primary-light">
            {post.title}
          </h2>
          <p className="text-sm">{post.content}</p>
          <button
            onClick={() => openModal(post)}
            className="mt-auto self-start bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Read More
          </button>
        </div>
      </article>
    ))}
  </section>
);

export default BlogList;
// This component renders a list of blog posts.
// Each post is displayed as a card with an image, title, content snippet, and a "Read More" button.
// The cards are styled with Tailwind CSS for a modern look and feel.
// The "Read More" button opens a modal with the full content of the post when clicked.
// The component uses a responsive grid layout that adapts to different screen sizes.
// The posts are passed as a prop, allowing for dynamic content rendering.
// The component is designed to be reusable, making it easy to integrate into different parts of the application.
// The use of Tailwind CSS classes ensures a consistent design language across the application.
// The component is optimized for performance, rendering only the necessary elements.