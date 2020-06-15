import React from 'react'
import { PageProps } from 'gatsby'
import withRoot from '@/root'
import Layout from '@components/layouts'
import Seo from '@components/seo'

const Playground: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Seo title='playground' />
      playground
    </Layout>
  )
}

export default withRoot(Playground)
