/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: {
      enabled: true,
      content: [
        './**/*.php',
        './node_modules/tw-elements/dist/js/**/*.js',
      ]
      
    },
    theme: {},
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/container-queries'),
      require("tw-elements/dist/plugin.cjs"),
    ],
    darkMode: 'class'
  }