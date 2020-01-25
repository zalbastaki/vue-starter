const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/styles.scss";`
            }
        }
    },

    configureWebpack: {
        plugins: [
            new GoogleFontsPlugin({
                fonts: [
                    { family: 'Iceland' },
                ],
            }),
        ],
    },

};