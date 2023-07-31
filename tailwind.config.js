module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: ['class', '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    }
};