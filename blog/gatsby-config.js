module.exports = {
    siteMetadata: {
        title: `My Blogs Site Example`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: `http://localhost:1337`,
                contentTypes: [
                    // List of the Content Types you want to be able to request from Gatsby.
                    `article`,
                    `user`,
                ],
            },
        },
    ],
};