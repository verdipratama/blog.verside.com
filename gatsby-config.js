module.exports = {
    siteMetadata: {
        title: `verdipratama`,
        description: `Personal github web and blog by Verdi Pratama`,
        author: `@verdipratama`,
        name: `Verdi Pratama`,
        tagline: `a study note from a man who write a code`,
        siteUrl: `https://dev.verside.com`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-autolink-headers`,
                    `gatsby-remark-smartypants`,
                    `gatsby-remark-prismjs`,
                    {
                        resolve: `gatsby-remark-copy-linked-files`,
                        options: {
                            ignoreFileExtensions: [],
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                            sizeByPixelDensity: true,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#60B0F4`,
                theme_color: `#60B0F4`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-135917039-1',
                head: true,
            },
        },

        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                output: `/sitemap.xml`,
            },
        },
    ],
}