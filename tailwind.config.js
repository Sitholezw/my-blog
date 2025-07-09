/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5', // indigo-600
          light: '#6366F1',   // indigo-500
          dark: '#4338CA',    // indigo-700
        },
        background: {
          light: '#F9FAFB',   // light gray
          dark: '#1F2937',    // gray-800
        },
        surface: {
          light: '#FFFFFF',   // white
          dark: '#374151',    // gray-700
        },
        text: {
          light: '#1F2937',   // gray-800
          dark: '#F3F4F6',    // gray-100
        }
      }
    }
  },
  plugins: []
}
// This Tailwind CSS configuration file sets up dark mode support, extends the default theme with custom colors for primary, background, surface, and text, and specifies the content paths for Tailwind to scan for class names. The colors are defined to provide a consistent look across light and dark themes.
// The primary color is set to indigo shades, while background and surface colors are defined for light and dark modes. The text colors are also adjusted for readability in both themes. This setup allows for a cohesive design system that can be easily applied throughout the application, ensuring that components like buttons, forms, and backgrounds maintain a consistent appearance regardless of the theme.
// The `content` array specifies where Tailwind should look for class names, ensuring that it generates the necessary styles based on the classes used in the specified files. The `darkMode: 'class'` setting enables dark mode based on a class, allowing for easy toggling between light and dark themes by adding or removing the `dark` class on the root element.
// The `plugins` array is currently empty, but it can be used to add additional Tailwind CSS plugins in the future for extended functionality, such as forms, typography, or aspect-ratio utilities. This configuration provides a solid foundation for building a responsive and visually appealing application with Tailwind CSS.
// The `extend` property allows for adding custom styles without overriding the default Tailwind styles, making it easy to maintain and update the design system as needed. This approach promotes a modular and scalable design, enabling developers to create reusable components that adhere to the defined color scheme and styling conventions.