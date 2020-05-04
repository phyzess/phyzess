import { resolve } from 'path'
import { createFilePath } from 'gatsby-source-filesystem'
import { token, siteConfigPageUrl } from '../nophyConfig'
import Nophy from '@phyzess/nophy'

const notion = new Nophy({
  token,
})

export async function sourceNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  const siteConfig = await notion.fetchPage(siteConfigPageUrl)
  const siteConfigData = siteConfig.getRowData()
  siteConfigData.forEach(configItem => {
    const { id, properties, primaryKey } = configItem
    const primaryCol = properties[primaryKey]
    const rowName = primaryCol.value[0]
    const node = {
      name: primaryCol.colLabel,
      type: `siteConfig_${rowName}`,
      id: createNodeId(`siteConfig_${rowName}_${id}`),
      internal: {
        type: rowName,
        contentDigest: createContentDigest(properties),
      },
    }
    actions.createNode(node)
  })
}

export async function createPages({ graphql, actions }) {
  const { createPage } = actions

  const blogPost = resolve(`./src/templates/blog-post.tsx`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

export function onCreateNode({ node, actions, getNode }) {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `blogs${value}`,
    })
  }
}
