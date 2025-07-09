import React from 'react';

const NewsletterForm = () => (
  <section className="bg-surface-light dark:bg-surface-dark py-12">
  <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">
      Subscribe to Our Newsletter
    </h2>
    <p className="text-sm text-text-light dark:text-text-dark mb-6">
      Stay up to date with our latest posts and announcements.
    </p>
    <form
      action="https://YOUR_MAILCHIMP_URL"
      method="post"
      target="_blank"
      className="flex flex-col sm:flex-row gap-4"
    >
      <input
        type="email"
        name="EMAIL"
        placeholder="Your email address"
        required
        className="input-field flex-1"
      />
      <button
        type="submit"
        className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition"
      >
        Subscribe
      </button>
    </form>
  </div>
</section>

);


export default NewsletterForm;
// This component renders a newsletter subscription form.
// It includes an input field for the user's email and a submit button. 