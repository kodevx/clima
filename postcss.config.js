const tailwindcss = require("tailwindcss");

module.exports = {
    // corePlugins: {
    //     preflight: false,
    // },
    plugins:[
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer')
    ]
}