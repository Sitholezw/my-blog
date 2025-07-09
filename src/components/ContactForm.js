import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_opk9h66', 'template_nhgte5q', e.target, 'p9t7cTFJM_TjwOZ8i')
      .then(() => alert('Message sent!'))
      .catch(() => alert('Failed to send.'));
    e.target.reset();
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <input type="text" name="user_subject" placeholder="Your Subject here" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
