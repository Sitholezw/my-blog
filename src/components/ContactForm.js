import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_opk9h66', 'template_nhgte5q', e.target, 'p9t7cTFJM_TjwOZ8i')
      .then(() => {
        setSuccess(true);
        e.target.reset();
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch(() => {
        alert('❌ Failed to send message.');
      });
  };

  return (
    <section className="py-12 bg-transparent">
      {/* 👇 This matches your global layout container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 👇 This centers the form in the section */}
        <div className="max-w-7xl mx-auto p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-white/5 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-center text-primary dark:text-primary-light mb-6">
            Contact Me
          </h2>

          {success && (
            <div className="mb-4 p-4 text-green-800 bg-green-100 border border-green-300 rounded-md relative">
              ✅ Your message has been sent successfully!
              <button
                onClick={() => setSuccess(false)}
                className="absolute top-2 right-2 text-green-700 hover:text-green-900"
              >
                &times;
              </button>
            </div>
          )}

          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark text-gray-900 dark:text-white"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark text-gray-900 dark:text-white"
            />
            <input
              type="text"
              name="user_subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark text-gray-900 dark:text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full h-32 resize-none px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark text-gray-900 dark:text-white"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-white font-medium py-3 px-6 rounded-md hover:bg-primary-dark transition"
            >
              Send Message
            </button>
          </form>
        </div>
       </div> 
    </section>
  );
};

export default ContactForm;
