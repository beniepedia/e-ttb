const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                slide: {
                    '0%': { bottom: '-5rem' },
                    '100%': { bottom: '0' },
                }
            },
            animation: {
                slide: 'slide 1s ease',
            }
        },
    },

    plugins: [require('daisyui')],

    daisyui: {
        themes: ["light", "dark"],
    },
};
