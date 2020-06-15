import React from 'react'
import { PageProps } from 'gatsby'
import withRoot from '@/root'
import Layout from '@components/layouts'

const Post: React.FC<PageProps> = ({ pageContext }) => {
  console.log('===Log Start===')
  console.log(pageContext)
  console.log('---Log End---')
  return <Layout>1</Layout>
}

export default withRoot(Post)
