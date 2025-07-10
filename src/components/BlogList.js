import React from 'react';

const BlogList = ({ posts, openModal }) => (
  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map((post) => (
      <article
        key={post.id}
        className="bg-white dark:bg-white/5 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-5 space-y-2">
          <h2 className="text-xl font-bold text-primary dark:text-primary-light">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
            {post.content}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary dark:bg-primary/20"
              >
                #{tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => openModal(post)}
            className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
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
// Each post is displayed in a card format with an image, title, content preview, tags, and a "Read More" button.
// The "Read More" button opens a modal with the full content of the post when clicked.
// The component uses Tailwind CSS for styling and supports dark mode.
// The posts are passed as props, and the `openModal` function is called with the post data when the button is clicked.
// The tags are displayed as rounded badges with a primary background color.