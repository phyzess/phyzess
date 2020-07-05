import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '@components/layouts'
import Seo from '@components/seo'

const Playground: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Seo title='playground' />
    </Layout>
  )
}

export default Playground
