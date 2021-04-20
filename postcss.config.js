// const tailwindcss = require('tailwindcss');
// module.exports = {
//   plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')],
// };


module.exports = {
    plugins: {
        [process.env.NODE_ENV === 'production' ? 'tailwindcss' : '@tailwindcss/jit']: {},
        autoprefixer: {},
    },
}