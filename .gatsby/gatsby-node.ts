import { resolve } from 'path'
import dotenv from 'dotenv'
import dayjs from 'dayjs'
import downloader from 'image-downloader'
import Nophy, { parseImageUrl } from '@phyzess/nophy'
import { SchemaPostTypeDef } from './schema'
import { ISiteMetaData, INavItem } from './types'

if (process.env.NODE_ENV === 'development' || /deploy:local/.test(process.env.npm_config_argv)) {
  dotenv.config({
    path: `.env.development`,
  })
}

const notion = new Nophy({
  token: process.env.PHYZESS_NOTION_TOKEN,
})

const navList: INavItem[] = [
  {
    path: '/posts',
    name: 'Posts',
    as: 'route',
  },
  {
    path: '/playground',
    name: 'Playground',
    as: 'route',
  },
]

const getSiteConfigFromNotion = async (): Promise<ISiteMetaData> => {
  const siteConfigFromNotion = await notion.fetchPage(process.env.PHYZESS_SITE_CONFIG_URL)
  const siteConfigData = siteConfigFromNotion.getRowData()

  let siteConfig = {} as ISiteMetaData
  for (const { valueType, name, value, image } of siteConfigData) {
    switch (valueType) {
      case 'text':
        siteConfig[name] = value
        break
      case 'number':
        siteConfig[name] = parseInt(value, 10)
        break
      case 'boolean':
        siteConfig[name] = Boolean(value) && value === '1'
        break
      case 'image':
        if (image.url) {
          let path: string
          if (name === 'avatar') {
            path = `static/avatar.png`
          } else if (name === 'icon') {
            path = `static/favicon.ico`
          }
          const options = {
            url: parseImageUrl(image.url),
            dest: path,
          }
          await downloader.image(options)
          siteConfig[name] = image
        }
        break
    }
  }

  return siteConfig
}

const getPostsFromNotion = async () => {
  const postListPage = await notion.fetchPage(process.env.PHYZESS_POST_LIST_URL)
  return postListPage.loadPages((_) => _.status === 'completed')
}

export async function sourceNodes({ actions: { createNode }, createNodeId, createContentDigest }) {
  console.log('🍑 fetching site config data start >>>')
  const siteConfig = await getSiteConfigFromNotion()
  console.log('🍑 fetching site config data complete <<<')

  console.log('🍑 generating site meta start >>>')
  const siteCopyrightName = siteConfig.copyrightName
  const siteMeta = {
    ...siteConfig,
    navList,
  }
  createNode({
    ...siteMeta,
    name: `siteMeta_${siteCopyrightName}`,
    type: `siteMeta_${siteCopyrightName}`,
    id: createNodeId(`siteConfig@${dayjs().valueOf()}`),
    internal: {
      type: `siteMeta`,
      contentDigest: createContentDigest(siteMeta),
    },
  })
  console.log('🍑 generating site meta complete <<<')

  console.log('🍑 fetching post list data start >>>')
  const posts = await getPostsFromNotion()
  console.log('🍑 fetching post list data complete >>>')

  console.log('🍑 generating posts start >>>')
  posts.forEach((post) =>
    createNode({
      ...post,
      id: createNodeId(`post-${post.rowId}@${dayjs().valueOf()}`),
      parent: null,
      children: [],
      internal: {
        type: `Post`,
        content: JSON.stringify(post),
        contentDigest: createContentDigest(post),
      },
    })
  )
  console.log('🍑 generating posts end <<<')
}

export async function createPages({ graphql, actions }) {
  const { createPage } = actions
  const blogPost = resolve(`./src/components/post/index.tsx`)
  const { data, errors } = await graphql(`
    {
      allPost(sort: { order: DESC, fields: created_time }) {
        nodes {
          id
          name
        }
      }
    }
  `)
  if (errors) {
    throw errors
  }
  const {
    allPost: { nodes },
  } = data
  // Create blog post pages.
  nodes.forEach(({ id, name }, index) => {
    const previous = index === nodes.length - 1 ? null : nodes[index + 1]
    const next = index === 0 ? null : nodes[index - 1]
    createPage({
      path: `posts/${name}`,
      component: blogPost,
      context: {
        id,
        name,
        previous,
        next,
      },
    })
  })
}

export function createSchemaCustomization({ actions }) {
  const { createTypes } = actions
  createTypes(SchemaPostTypeDef)
}
