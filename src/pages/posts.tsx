import React from 'react'
import { PageProps, useStaticQuery, graphql } from 'gatsby'
import Layout from '@components/layouts'
import Seo from '@components/seo'
import PostList from '@/components/postList'

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
          ...PostFragment
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

export default Posts
