
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // تأكد من أنك تُشير إلى جميع الملفات داخل مجلد src
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      container: {
        center: true,
      },
       spacing: {
        'z': '16px',
      },
      keyframes: {
        wiggle: {
          '0%': {
            transform: 'rotate(0deg)',
            opacity: '1',
          },
          '50%': {
            transform: 'rotate(180deg)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'rotate(360deg)',
            opacity: '0',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s linear  ', 
      },
    },
  },
  plugins: [],
}