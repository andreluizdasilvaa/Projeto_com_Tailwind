/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["public/**/*.{html,js}"],
    theme: {
        fontFamily: {
            roboto: ["Roboto"],
        },
        extend: {
            colors: {
                Tomato: "hsl(4, 100%, 67%)",
                Dark_Slate_Grey: "hsl(234, 29%, 20%)",
                Charcoal_Grey: "hsl(235, 18%, 26%)",
                Grey: "hsl(231, 7%, 60%)",
                White: "hsl(0, 0%, 100%)",
            },
        },
        boxShadow: {
            button_Principal: "3px 5px 12px hsl(4, 100%, 67%)",
        },
    },
    plugins: [],
};

