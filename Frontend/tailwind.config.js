/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-skyblue-rgb': 'rgb(226, 239, 234)',
        'custom-blue-rgb': 'rgb(0, 43, 128)',
        'custom-pink-rgb': 'rgb(199, 77, 214)',
        'custom-lightblue-rgb': 'rgb(72, 179, 216)',
        'custom-darkblue-rgb': 'rgb(25, 30, 64)',
        'custom-lightgray-rgb': 'rgb(242, 242, 242)',
      },
      boxShadow: {
        'custom-inset-2xl': 'inset 0 -50px 50px -35px rgb(0 0 0 / 0.25)',
        'custom-leftservicesShadow-inset': 'inset 350px 0px 40px -30px rgba(0, 0, 0, 0.25)',
        'custom-rightservicesShadow-inset': 'inset -350px 0px 40px -30px rgba(0, 0, 0, 0.25)',
      },
      height: {
        'custom-height-600px': '600px',
        'custom-height-500px': '500px',
        'custom-height-700px': '700px',
      },
      backgroundImage: {
        'custom-image': "url('./src/assets/dotted.png')",
      },
      borderRadius: {
        '100rem': '100rem',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "daisy-",  // Add a prefix to DaisyUI classes
  },
}

