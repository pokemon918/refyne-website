/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                SharpGrotesk18: ['SharpGrotesk18', 'sans-serif'],
                SharpGrotesk20: ['SharpGrotesk20', 'sans-serif'],
            },
            animation: {
                animationDelay: {
                    2500: '2500ms',
                    3500: '3500ms',
                },
            },
            keyframes: {
                moveDot1: {
                    '0%, 80%': {
                        transform: 'translateX(-50%) translateY(30%)',
                    },
                    '100%': {
                        transform: 'translateX(-50%) translateY(-50%)',
                    },
                },
                moveDot11: {
                    '0%': {
                        transform: 'translateX(-50%) translateY(-50%)',
                    },
                    '20%, 100%': {
                        transform: 'translateX(-50%) translateY(30%)',
                    },
                },
                moveDot2: {
                    '0%': {
                        transform: 'translateX(0) translateY(10%)',
                    },
                    '70%': {
                        transform: 'translateX(0) translateY(10%)',
                    },
                    '85%': {
                        transform: 'translateX(0) translateY(-50%)',
                    },
                    '100%': { transform: 'translateX(-50%) translateY(-50%)' },
                },
                moveDot21: {
                    '0%': { transform: 'translateX(-50%) translateY(-50%)' },
                    '15%': {
                        transform: 'translateX(0) translateY(-50%)',
                    },
                    '30%': {
                        transform: 'translateX(0) translateY(10%)',
                    },
                    '100%': {
                        transform: 'translateX(0) translateY(10%)',
                    },
                },
                caseStudy: {
                    '0%': {
                        transform: 'rotate(0deg) scale(1)',
                        color: 'black',
                    },
                    '25%': {
                        transform: 'rotate(-10deg) scale(1)',
                        color: '#ff6b39',
                    },
                    '50%': {
                        transform: 'rotate(-10deg) scale(0.7)',
                        color: '#ff6b39',
                    },
                    '100%': {
                        transform: 'rotate(-10deg) scale(1.1)',
                        color: '#ff6b39',
                    },
                },
                dotDivideFader: {
                    '0%': {
                        opacity: 1,
                    },
                    '50%': {
                        opacity: 0.25,
                    },
                    '100%': {
                        opacity: 1,
                    },
                },
                footerImgAnimation: {
                    '0%': {
                        left: '-25%',
                    },
                    '100%': {
                        left: '100%',
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwindcss-animation-delay'),
    ],
})
