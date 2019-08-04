require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Gatsby, ButterCMS and Tailwind CSS',
    description: 'Sample app built using Gatsby, ButterCMS and TailwindCSS',
    keywords: 'gatsby, buttercms, react, javascript',
    siteUrl: 'https://gatsby-buttercms-app.netlify.com/',
    author: {
      name: 'Nirmalya Ghosh',
      url: 'https://www.nirmalyaghosh.com',
      email: 'nirmalya.email@gmail.com',
    },
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-buttercms',
      options: {
        authToken: process.env.GATSBY_BUTTER_CMS_API_KEY,
      },
    },
  ],
}
