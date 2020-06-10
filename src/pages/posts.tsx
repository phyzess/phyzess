import React from 'react'
import { PageProps, Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '@components/layouts'
import Seo from '@components/seo'
import PostList from '@components/posts/PostList'
// import { rhythm } from '@utils/typography'

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

export default Posts
