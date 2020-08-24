/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
    const { setWebpackConfig } = actions;
    if (stage === "build-html") {
        setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /OwlCarousel/,
                        use: loaders.null(),
                    }
                ]
            },
            externals: {
                jquery: 'jQuery', // important: 'Q' capitalized
            },
        })
    }
}