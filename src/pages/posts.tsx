import React from 'react'
import { PageProps, useStaticQuery, graphql } from 'gatsby'
import withRoot from '@/root'
import Layout from '@components/layouts'
import Seo from '@components/seo'
import PostList from '@components/posts/PostList'

const Posts: React.FC<PageProps> = () => {
  const {
    siteMeta: { pageSize },
    allPost: { nodes },
  } = useStaticQuery(graphql`
    query {
      siteMeta {
        pageSize
      }
      allPost(sort: { order: DESC, fields: created_time }) {
        nodes {
          ...FragPost
        }
      }
    }
  `)
  return (
    <Layout>
      <Seo title='posts' />
      <PostList pageSize={pageSize} posts={nodes} />
    </Layout>
  )
}

export default withRoot(Posts)
