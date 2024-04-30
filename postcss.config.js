// postcss.config.js
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('nativewind/postcss') // Upewnij się, że jest to odpowiednio skonfigurowane
    ]
};
