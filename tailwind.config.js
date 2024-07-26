/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: {
                    soft: "hsl(215, 51%, 70%)",
                },
                cyan: {
                    DEFAULT: "hsl(178, 100%, 50%)",
                },
                dark: {
                    main: "hsl(217, 54%, 11%)",
                    card: "hsl(216, 50%, 16%)",
                    line: "hsl(215, 32%, 27%)",
                },
            },
        },
    },
    plugins: [],
};
