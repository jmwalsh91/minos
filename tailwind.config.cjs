/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#22d3ee",
                   
          "secondary": "#d946ef",
                   
          "accent": "#14b8a6",
                   
          "neutral": "#191D24",
                   
          "base-100": "#2A303C",
                   
          "info": "#3ABFF8",
                   
          "success": "#36D399",
                   
          "warning": "#facc15",
                   
          "error": "#dc2626",
                   },
                  }
                ]
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
