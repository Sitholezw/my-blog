import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState(null);

  const handleSubscribe = (e) => {
  e.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    setToast({ type: 'error', message: 'Please enter a valid email address.' });
    return;
  }

  // Simulate success response
  setToast({ type: 'success', message: 'Subscribed successfully!' });
  setEmail('');
  setTimeout(() => setToast(null), 3000);
};

  return (
    <footer className="bg-white/80 dark:bg-white/10 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-12 shadow-inner">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-center text-primary dark:text-primary-light">
          Subscribe to Our Newsletter
        </h2>

        <form onSubmit={handleSubscribe} className="relative space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-4 text-gray-400 dark:text-gray-500" size={16} />
            <input
              type="email"
              name="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              required
              className="peer w-full pl-10 pt-6 pb-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <label className="absolute left-10 top-2 text-xs text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Your Email
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-6 bg-primary text-white rounded-md hover:bg-primary-dark transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 flex items-center gap-2 px-4 py-3 rounded-md text-sm shadow-lg transition-all animate-fade-in z-50
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
    </footer>
  );
};

export default NewsletterForm;
// This component renders a newsletter subscription form.
// It includes an email input field and a submit button.
// When the form is submitted, it validates the email and shows a toast notification for success or error.
// The toast notification appears at the bottom right corner and disappears after 3 seconds.