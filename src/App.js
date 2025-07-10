import React, { useState, useEffect } from 'react';
//import './App.css';
import BlogList from './components/BlogList';
import ContactForm from './components/ContactForm';
import Modal from './components/Modal';
import NewsletterForm from './components/NewsletterForm';
import Pagination from './components/Pagination';
import TagFilter from './components/TagFilter';
//import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  
  // State + Logic (Enhanced)
const [blogPosts, setBlogPosts] = useState([
 {
    id: 1,
    title: "Welcome to My Blog",
    content: "This is my first blog post. Stay tuned for more!",
    fullContent: "Welcome to my first blog post where I’ll be sharing my journey into tech, design, and development. Stay tuned for more updates and articles!",
    image: "./img/python.jpeg",
    tags: ["Intro"]
  },
  {
    id: 2,
    title: "React is Awesome",
    content: "React makes building UIs a breeze.",
    fullContent: "React makes building UIs a breeze. With components, hooks, and state management, it's a powerful tool for developers. If you're building SPAs, React is a must-learn.",
    image: "./img/reactcon2.jpeg",
    tags: ["React", "Frontend"]
  },
  {
    id: 3,
    title: "CSS Tips & Tricks",
    content: "Mastering layout with Flexbox and Grid.",
    fullContent: "Modern CSS is powerful. With Flexbox and Grid, you can build complex layouts with minimal code. Learn to combine utility-first frameworks like Tailwind to go even further.",
    image: "./img/css.jpeg",
    tags: ["CSS", "Frontend", "Design"]
  },
  {
    id: 4,
    title: "Using EmailJS in React",
    content: "Send emails from your forms easily.",
    fullContent: "EmailJS lets you send emails directly from your React app without backend code. It’s perfect for contact forms and newsletters. Learn how to integrate it safely and effectively.",
    image: "./img/reacticon.jpeg",
    tags: ["React", "Forms", "EmailJS"]
  },
  {
    id: 5,
    title: "Dark Mode in Tailwind CSS",
    content: "Add dark mode in minutes using Tailwind.",
    fullContent: "Tailwind’s dark mode support is class-based and easy to implement. Learn how to toggle themes with React and create a consistent, modern UI for any user preference.",
    image: "./img/darkmode.jpeg",
    tags: ["Tailwind", "DarkMode", "UI"]
  },
  {
    id: 6,
    title: "Beginner JavaScript Mistakes",
    content: "Avoid these common beginner errors.",
    fullContent: "From forgetting to declare variables to misunderstanding closures, these are the mistakes every JavaScript beginner makes. Let’s break them down and improve together.",
    image: "./img/js.jpeg",
    tags: ["JavaScript", "Beginner", "Tips"]
  },
  {
    id: 7,
    title: "What is the MERN Stack?",
    content: "A fullstack combo: MongoDB, Express, React, Node.",
    fullContent: "The MERN stack is a popular tech stack for building modern web applications. It uses MongoDB, Express.js, React, and Node.js for a powerful fullstack experience.",
    image: "./img/npm.jpeg",
    tags: ["MERN", "Fullstack", "JavaScript"]
  },
  {
    id: 8,
    title: "Deploying React with Vercel",
    content: "Push your app live in seconds.",
    fullContent: "Vercel offers a seamless experience for deploying React apps. Connect your GitHub repo, set the build command, and your site is live. Fast, reliable, and free for hobby use.",
    image: "./img/vercel.jpeg",
    tags: ["Deployment", "Vercel", "React"]
  },
   {
    id: 9,
    title: "What is CUT-LMS",
    content: "Apply your leave online hustle free.",
    fullContent: "This site offers employees to apply for their leave days in th comfort of their home, work offices or anywhere as long as there is an internet connection.",
    image: "./img/Cut.png",
    tags: ["Php", "mui", "React"]
  },
  {
    id: 10,
    title: "What is CUT-LMS",
    content: "Apply your leave online hustle free.",
    fullContent: "This site offers employees to apply for their leave days in th comfort of their home, work offices or anywhere as long as there is an internet connection.",
    image: "./img/Cut.png",
    tags: ["Php", "mui", "React"]
  }
  // Add more posts as needed
]);

const [modalData, setModalData] = useState(null);
const [currentPage, setCurrentPage] = useState(1);
const postsPerPage = 9; // Number of posts per page
const [searchQuery, setSearchQuery] = useState("");
const [selectedTag, setSelectedTag] = useState("All");

const allTags = ["All", ...new Set(blogPosts.flatMap(post => post.tags ?? []))];

useEffect(() => {
  setCurrentPage(1); // Reset to page 1 when filters change
}, [searchQuery, selectedTag]);

const filteredPosts = blogPosts.filter(post =>
  (selectedTag === "All" || (post.tags ?? []).includes(selectedTag)) &&
  (
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (post.fullContent?.toLowerCase().includes(searchQuery.toLowerCase()))
  )
);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

const openModal = (post) => setModalData(post);
const closeModal = () => setModalData(null);


  return (
  <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark px-4 py-8">
    <Header /> 
    {/*<ThemeToggle />*/}
       <header className="text-center mb-10">
      {/*<h1 className="text-4xl font-bold text-primary dark:text-primary-light">My Blog</h1>*/}
    </header>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <input
        type="text"
        placeholder="Search blog posts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <TagFilter tags={allTags} selectedTag={selectedTag} onSelect={setSelectedTag} />
      <BlogList posts={currentPosts} openModal={openModal} />
      <Pagination totalPages={totalPages} currentPage={currentPage} onChange={setCurrentPage} />
      <ContactForm />
     {/* <NewsletterForm />*/}
    </div>

    <Modal data={modalData} onClose={closeModal} />
    <Footer />
  </div>
);
};
export default App;
// This is the main App component that renders the blog application.
// It includes a header, search input, tag filter, blog list, pagination, contact form, and newsletter form.
// The modal is used to display detailed content of a blog post when the "Read More" button is clicked.
// The app uses Tailwind CSS for styling and supports dark mode.
// The `ThemeToggle` component allows users to switch between light and dark themes.}
