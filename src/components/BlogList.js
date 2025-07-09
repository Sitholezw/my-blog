import React from 'react';
import Button from '@mui/material/Button';

const BlogList = ({ posts, openModal }) => (
  <section className="blog-grid">
    {posts.map(post => (
      <article key={post.id} className="blog-post visible">
        <img src={post.image} alt={post.title} className="blog-image" />
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Button variant="contained" color="primary" className="read-more" onClick={() => openModal(post)}>
          Read More
        </Button>
      </article>
    ))}
  </section>
);

export default BlogList;
