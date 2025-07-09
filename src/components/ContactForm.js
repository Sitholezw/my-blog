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
  <section className="bg-surface-light dark:bg-surface-dark py-12">
  <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold text-primary dark:text-primary-light mb-6 text-center">
      Contact Me
    </h2>
    <form onSubmit={sendEmail} className="space-y-6">
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="input-field"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="input-field"
      />
      <input
        type="text"
        name="user_subject"
        placeholder="Subject"
        required
        className="input-field"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="input-field h-32 resize-none"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-primary-dark transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

);

};

export default ContactForm;
// This file defines a contact form component that allows users to send messages.
// It uses EmailJS to send the form data to a specified email service.
// The form includes fields for the user's name, email, subject, and message.
// The form is styled with Tailwind CSS classes for a modern look.  