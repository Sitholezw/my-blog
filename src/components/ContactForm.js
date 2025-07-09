import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_opk9h66', 'template_nhgte5q', e.target, 'p9t7cTFJM_TjwOZ8i')
      .then(() => alert('Message sent!'))
      .catch(() => alert('Failed to send.'));
    e.target.reset();
  };

  return (
    <section className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark p-8 rounded-xl shadow-md max-w-2xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-6 text-center">
        Contact Me
      </h2>
      <form onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          name="user_subject"
          placeholder="Your Subject"
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition font-semibold"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
// This file defines a contact form component that allows users to send messages.
// It uses EmailJS to send the form data to a specified email service.
// The form includes fields for the user's name, email, subject, and message.
// The form is styled with Tailwind CSS classes for a modern look.  