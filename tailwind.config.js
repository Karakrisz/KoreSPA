/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#0d9447",
        Secondary: "#3c4a3e",
        Tertiary: "#eaeddb",
        Soft: "#f6edd9",
        Dark: "#231f20",
        Grey: "#ebebeb",
        "Grey-2": "#c1c1c1",
        Light: "#fcfcfc",
        Sale: "#dd2121",
        Rendelheto: "#f3911d"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      },
      boxShadow: {
        Shadow: "0px 2px 6px 0px rgba(0,0,0,0.1)",
        Shadow_Strong: "0px 2px 6px 0px rgba(0,0,0,0.2)"
      },
      borderRadius: {
        "rounded-0": "0rem",
        "rounded-1": "0.3125rem",
        "rounded-2": "0.5rem",
        "rounded-3": "0.625rem",
        "rounded-4": "1.25rem",
        "rounded-5": "1.875rem",
        "rounded-6": "2.6875rem",
        "rounded-7": "3.0625rem",
        "rounded-8": "3.25rem"
      }
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@headlessui/tailwindcss')
  ],
}

