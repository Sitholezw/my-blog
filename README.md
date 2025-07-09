# 📝 React Blog App

A modern, responsive blog application built with **React**, **Tailwind CSS**, and **EmailJS** — featuring:

- 🌓 Light/Dark mode
- 🏷️ Tag-based filtering
- 🔍 Search functionality
- 📄 Modal post previews
- 📧 Contact form with EmailJS
- 📰 Newsletter subscription form
- 📱 Fully responsive layout

---

## 🚀 Features

- **Responsive Design** — Mobile-first layout using Tailwind’s grid system
- **Dark Mode** — Toggle UI theme with persistent state
- **Blog Modal** — Read full blog content in a clean overlay
- **Pagination** — View posts in sets of 6 per page
- **Search & Tag Filters** — Dynamically filter posts
- **EmailJS Integration** — Easily send messages via contact form
- **Newsletter Form** — Ready for Mailchimp integration

---

## 📁 Project Structure

my-blog/
├── public/
│ ├── img/ # Static image files
│ └── index.html
├── src/
│ ├── assets/ # (Optional) Fonts, logos, icons
│ ├── components/ # Reusable components (BlogList, Modal, etc.)
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── tailwind.config.js
├── package.json
└── README.md


---

## 🛠️ Technologies Used

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- [Create React App](https://create-react-app.dev/)
- [Vercel / Netlify](https://vercel.com/) for deployment (optional)

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/my-blog.git
cd my-blog

---

#### Install Dependences
-npm install

----

### Set Up EmailJS

Go to EmailJS

Create a service, template, and get your user ID

Replace the placeholders in ContactForm.js:

-emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')

## Start Development Server

npm start

App will run at http://localhost:3000

## 🌐 Deployment

You can deploy the app to Vercel or Netlify with zero configuration.

npm run build

Upload the build/ directory to your chosen platform.

## 🖼️ Image Usage

Place images inside the /public/img/ folder and reference them like:

<img src="/img/example.jpg" alt="Blog cover" />

## 📩 Contact

Feel free to reach out via the Contact Form on the site or EmailJS integration.

## 📄 License

This project is open source and free to use for learning or customization.


Made with ❤️ using React + Tailwind CSS