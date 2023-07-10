/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkBackground: {
          DEFAULT: "#1A1A1A",
          topaccent: "#383838",
          bottomaccent: "#000000",
          50: "#4D4D4D",
        },

        lightBackground: {
          DEFAULT: "#F2F2F2",
          topaccent: "#E8E8E8",
          bottomaccent: "#F0F4FF",
          50: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
