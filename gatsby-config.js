export default {
  siteMetadata: {
    title: "Gatsby Blog",
    author: "Sanzhar",
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/content/posts`,
      },
    },
  ],
}
