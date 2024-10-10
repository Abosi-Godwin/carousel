/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "my-color-1": "#f1f9fe",
                "my-color-10": "#0d577f"
            },
            width: {
                "9/10": "90%"
            },
            fontFamily:{
              montserrat: ['Montserrat', 'sans-serif']
            },
            backgroundImage: {
                "bg-image": "url('./src/assets/SliderImages/bg.jpg')"
            }
        }
    },
    plugins: []
};
