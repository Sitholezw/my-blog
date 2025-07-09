import React from 'react';

const NewsletterForm = () => (
  <section className="bg-white p-8 rounded-xl shadow-md max-w-xl mx-auto mt-12 text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6">
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
         className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white border dark:border-gray-600 px-4 py-2 rounded"
      />
      <button
        type="submit"
       className="bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600"
      >
        Subscribe
      </button>
    </form>
  </section>
);

export default NewsletterForm;
