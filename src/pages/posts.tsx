import React from 'react'
import { PageProps, useStaticQuery, graphql } from 'gatsby'
import withThemeRoot from '@/theme'
import Layout from '@components/layouts'
import Seo from '@components/seo'
import PostList from '@components/posts/PostList'

const Posts: React.FC<PageProps> = ({ location }) => {
  const {
    siteMeta: { pageSize },
    posts: { postList },
  } = useStaticQuery(graphql`
    query {
      siteMeta {
        pageSize
      }
      posts {
        postList {
          name
          last_edited_time
          created_time
          rowId
          article {
            type
            html {
              content
            }
          }
        }
      }
    }
  `)
  return (
    <Layout location={location}>
      <Seo title='posts' />
      <PostList pageSize={pageSize} posts={postList} />
    </Layout>
  )
}

export default withThemeRoot(Posts)
