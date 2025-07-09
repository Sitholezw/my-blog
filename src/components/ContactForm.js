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
        setTimeout(() => setSuccess(false), 5000); // Auto-hide after 5s
      })
      .catch(() => {
        alert('❌ Failed to send message.');
      });
  };

  return (
    <section className="py-12">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-surface-dark p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-primary dark:text-primary-light mb-6 text-center">
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
// This component renders a contact form with fields for name, email, subject, and message.
// It uses EmailJS to send the form data to a specified email service.
// The form includes success feedback that appears when the message is sent successfully. 