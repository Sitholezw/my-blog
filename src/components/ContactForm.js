import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, User, MessageSquareText, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [toast, setToast] = useState(null); // success or error

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_opk9h66', 'template_nhgte5q', e.target, 'p9t7cTFJM_TjwOZ8i')
      .then(() => {
        showToast('success', 'Message sent successfully!');
        e.target.reset();
      })
      .catch(() => showToast('error', 'Failed to send. Try again.'));
  };

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="bg-white/80 dark:bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-8 space-y-6 transition-all">
        <h2 className="text-2xl font-bold text-center text-primary dark:text-primary-light">Contact Me</h2>

        <form onSubmit={sendEmail} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-4 text-gray-400 dark:text-gray-500" size={16} />
            <input
              type="text"
              name="user_name"
              required
              placeholder=" "
              className="peer w-full pl-10 pt-6 pb-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <label className="absolute left-10 top-2 text-xs text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-4 text-gray-400 dark:text-gray-500" size={16} />
            <input
              type="email"
              name="user_email"
              required
              placeholder=" "
              className="peer w-full pl-10 pt-6 pb-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <label className="absolute left-10 top-2 text-xs text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Your Email
            </label>
          </div>

          {/* Subject */}
          <div className="relative">
            <MessageSquareText className="absolute left-3 top-4 text-gray-400 dark:text-gray-500" size={16} />
            <input
              type="text"
              name="user_subject"
              required
              placeholder=" "
              className="peer w-full pl-10 pt-6 pb-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <label className="absolute left-10 top-2 text-xs text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Subject
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 pt-4 pb-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-6 bg-primary text-white rounded-md hover:bg-primary-dark transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 flex items-center gap-2 px-4 py-3 rounded-md text-sm shadow-lg transition-all animate-fade-in
            ${
              toast.type === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }
          `}
        >
          {toast.type === 'success' ? (
            <CheckCircle size={18} className="text-green-600" />
          ) : (
            <AlertCircle size={18} className="text-red-600" />
          )}
          {toast.message}
        </div>
      )}
    </section>
  );
};

export default ContactForm;
// This component renders a contact form for users to send messages.
// It includes fields for name, email, subject, and message.
// The form uses EmailJS to send the message and displays a toast notification on success or failure.
// The toast notification appears at the bottom right corner and disappears after 3 seconds.
// The form is styled with Tailwind CSS and includes icons from Lucide for better user experience.
// The form is responsive and adapts to different screen sizes, ensuring a good user experience on both desktop and mobile devices.
// The component uses a state variable to manage the toast notification visibility and content.
// The form fields are styled with a focus effect that highlights the input when active.
// The component uses Lucide icons for visual cues, enhancing the form's usability.