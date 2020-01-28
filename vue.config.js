module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/styles.scss";`
            }
        }
    },

    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/i,
                    use: 'raw-loader',
                },
            ],
        },
    },
};