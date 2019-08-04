module.exports = {
  siteMetadata: {
    title: 'Gatsby and Tailwind CSS',
    description: 'Sample app built using Gatsby and Tailwind CSS',
    keywords: 'gatsby, tailwindcss, react, javascript',
    siteUrl: 'https://gatsby-tailwindcss.netlify.com',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    'gatsby-transformer-remark',
  ],
}
