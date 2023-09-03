module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://gatsby-starter-portfolio-minimal-theme.netlify.app/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "My Minimal Portfolio", // Used in manifest.json
          shortName: "Portfolio", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        // blogSettings: {
        //   entityName: "",
        //   path: "", // Defines the slug for the blog listing page
        //   usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article
        // },
        //// googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
          {
            name: `Slackside One`,
            file: `https://fonts.googleapis.com/css2?family=Slackside+One&display=swap`,
          },
          {
            name: `La Belle Aurore`,
            file: `https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap`,
          },
          {
            name: `Yuji Boku`,
            file: `https://fonts.googleapis.com/css2?family=Yuji+Boku&display=swapp`,
          },
        ],
      },
    },
  ],
};
