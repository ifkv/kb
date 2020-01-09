module.exports = {
  siteMetadata: {
    title: `AI Helps Support`,
    author: `Dominik Ferber`,
    // You'd normally use a description like
    // "Advice and answers by the MyCompany-Team"
    description: `Чем мы можем помочь вам сегодня?`,
    siteUrl: `https://help.dferber.de/`,
    language: "ru",
    texts: {
      allCollectionsText: "Все разделы",
      searchPlaceholderText: "Введите ваш вопрос…",
      lastModifiedText: "Отредактировано",
      publishedOnText: "Опубликовано",
      writtenByText: "Автор:",
      articlesInCollectionZeroText: "статей в этом разделе",
      articlesInCollectionOneText: "статья в этом разделе",
      articlesInCollectionTwoText: "статей в этом разделе",
      articlesInCollectionMultipleText: "статей в этом разделе",
    },
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsYaml`,
    "MarkdownRemark.frontmatter.collection": `CollectionsYaml`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-simple-analytics",
    "gatsby-remark-embed-video",
    "gatsby-remark-responsive-iframe",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: `mappings`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
        resolve: "gatsby-remark-embed-video",
        options: {
          width: 800,
          ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
          height: 400, // Optional: Overrides optional.ratio
          related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
          noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
          urlOverrides: [
            {
              id: 'youtube',
              embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
            }
          ] //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
        }
        },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Help Center`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],

}
