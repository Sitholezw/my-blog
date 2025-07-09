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
        className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition font-semibold"
      >
        Subscribe
      </button>
    </form>
  </section>
);

export default NewsletterForm;
