import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "pandoras-purple": "var(--pandoras-purple)",
        "pandoras-orange": "var(--pandoras-orange)",
        "pandoras-orange-50": "var(--pandoras-orange-50)",
        "pandoras-orange-10": "var(--pandoras-orange-10)",
        "pandoras-light-orange": "var(--pandoras-light-orange)",
        "pandoras-teal": "var(--pandoras-teal)",
        "pandoras-lime": "var(--pandoras-lime)",
        "pandoras-pink": "var(--pandoras-pink)",
        "pandoras-light-pink": "var(--pandoras-light-pink)",
        "pandoras-lavender": "var(--pandoras-lavender)",
        "pandoras-lavender-50": "var(--pandoras-lavender-50)",
        "pandoras-jasper": "var(--pandoras-jasper)",
        "pandoras-jasper-50": "var(--pandoras-jasper-50)",
        "pandoras-jasper-70": "var(--pandoras-jasper-70)",
        "pandoras-fuchsia": "var(--pandoras-fuchsia)",
        "white-50": "var(--white-50)",
      },
    },
  },
  plugins: [],
};
export default config;
