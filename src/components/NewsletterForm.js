import React from 'react';

const NewsletterForm = () => (
  <section className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark p-8 rounded-xl shadow-md max-w-xl mx-auto mt-12 text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-primary-light mb-6">
      Subscribe to our Newsletter
    </h2>
    <form
      action="https://YOUR_MAILCHIMP_URL"
      method="post"
      target="_blank"
      className="flex flex-col sm:flex-row gap-4 items-center justify-center"
    >
      <input
        type="email"
        name="EMAIL"
        placeholder="Your email"
        required
        className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition font-semibold"
      >
        Subscribe
      </button>
    </form>
  </section>
);

export default NewsletterForm;
// This component renders a newsletter subscription form.
// It includes an input field for the user's email and a submit button. 