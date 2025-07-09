import React, { useState, useEffect } from 'react';
//import './App.css';
import BlogList from './components/BlogList';
import ContactForm from './components/ContactForm';
import Modal from './components/Modal';
import NewsletterForm from './components/NewsletterForm';
import Pagination from './components/Pagination';
import TagFilter from './components/TagFilter';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';



function App() {
  const blogPosts = [
    {
      id: 1,
      title: "Welcome to My Blog",
      content: "This is my first blog post. Stay tuned for more!",
      fullContent: "Full content of the welcome blog post...",
      image: "https://via.placeholder.com/600x300?text=Welcome+to+My+Blog",
      tags: ["Intro"]
    },
    {
      id: 2,
      title: "React is Awesome",
      content: "React makes building UIs a breeze.",
      fullContent: "React makes building UIs a breeze. With components, hooks, and state management, it's a powerful tool for developers.",
      image: "https://via.placeholder.com/600x300?text=React+is+Awesome",
      tags: ["React", "Frontend"]
    }
  ];

  const [modalData, setModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = ["All", ...new Set(blogPosts.flatMap(post => post.tags || []))];

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedTag === "All" || (post.tags && post.tags.includes(selectedTag))) &&
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       post.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const openModal = (post) => setModalData(post);
  const closeModal = () => setModalData(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Blog</h1>
      </header>

      <input
        type="text"
        placeholder="Search blog posts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <TagFilter tags={allTags} selectedTag={selectedTag} onSelect={setSelectedTag} />
      <BlogList posts={currentPosts} openModal={openModal} />
      <Pagination totalPages={totalPages} currentPage={currentPage} onChange={setCurrentPage} />
      <ContactForm />
      <NewsletterForm />
      <Modal data={modalData} onClose={closeModal} />
    </div>
  );
}

export default App;
