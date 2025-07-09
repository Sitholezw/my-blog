import React from 'react';

const BlogList = ({ posts, openModal }) => (
  <section className="grid md:grid-cols-2 gap-8">
    {posts.map((post) => (
      <article
        key={post.id}
        className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
        
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-700 mb-4">{post.content}</p>
          <button
            onClick={() => openModal(post)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
          >
            Read More
          </button>
        </div>
      </article>
    ))}
  </section>
);

export default BlogList;
