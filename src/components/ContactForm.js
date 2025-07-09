import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(() => {
        setSuccess(true);
        e.target.reset();
      })
      .catch(() => {
        alert('Failed to send message');
      });
  };

  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-md bg-white/10 dark:bg-white/5 p-8 rounded-xl shadow-xl border border-white/20">
          <h2 className="text-2xl font-bold text-center text-primary dark:text-primary-light mb-6">
            Contact Me
          </h2>

          {success && (
            <p className="mb-4 text-green-500 text-center font-medium">
              ✅ Message sent successfully!
            </p>
          )}

          <form onSubmit={sendEmail} className="space-y-6">
            {['user_name', 'user_email', 'user_subject'].map((field, index) => (
              <div key={index} className="relative">
                <input
                  type={field === 'user_email' ? 'email' : 'text'}
                  name={field}
                  required
                  placeholder=" "
                  className="floating-input peer"
                />
                <label className="floating-label">
                  {field
                    .replace('user_', '')
                    .replace('_', ' ')
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </label>
              </div>
            ))}
            <div className="relative">
              <textarea
                name="message"
                placeholder=" "
                required
                rows={4}
                className="floating-input peer resize-none"
              />
              <label className="floating-label">Your Message</label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition"
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
// It uses EmailJS to send the form data to a specified email address.
// The form includes validation and displays a success message upon successful submission.  