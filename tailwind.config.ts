import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#18163C", // Yankees Blue
                secondary: "#47217B", // Blue-Violet
                accent: "#ED058A", // Mexican Pink
                highlight: "#FB6269", // Pastel Red
                neutral: "#7DC9CF", // Chinese Silver
            },
            fontFamily: {
                sans: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
