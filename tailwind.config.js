/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        biketheme: {
          primary: '#1e40af',
          secondary: '#be123c',
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#1f2937",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
