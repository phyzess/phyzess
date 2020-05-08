import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '@components/layouts'
import Seo from '@/components/seo'
// import { rhythm } from '@utils/typography'

// export const pageQuery = graphql`
//   query {
//       siteMeta {
//         title
//       }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `

const Blog = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title='blog' />
      blog
    </Layout>
  )
}

export default Blog
