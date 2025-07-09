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
    <section className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Contact Me</h2>
      <form onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="user_subject"
          placeholder="Your Subject"
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition font-semibold"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
