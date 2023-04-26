/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{svelte,ts}"],
    theme: {
        extend: {
            animation: {
                "fade-slow": "fade 5s ease-in-out",
            },
            keyframes: {
                fade: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                svgDraw: {
                    to: { "stroke-dashoffset": "0" },
                },
                drawLine: {
                    to: { height: "var(--animation-height)" },
                },
            },
        },
    },
    plugins: [],
};
