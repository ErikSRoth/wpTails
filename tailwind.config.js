/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: {
      enabled: true,
      content: ['./**/*.php']
    },
    theme: {},
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/container-queries'),
    ]
  }