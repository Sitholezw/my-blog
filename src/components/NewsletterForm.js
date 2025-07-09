import React from 'react';

const NewsletterForm = () => (
  <section className="newsletter-section">
    <h2>Subscribe to our Newsletter</h2>
    <form action="https://YOUR_MAILCHIMP_URL" method="post" target="_blank">
      <input type="email" name="EMAIL" placeholder="Your email" required />
      <button type="submit">Subscribe</button>
    </form>
  </section>
);

export default NewsletterForm;
