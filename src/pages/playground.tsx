import React from 'react'
import Layout from '@components/layouts'
import Seo from '@/components/seo'

const Playground = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title='playground' />
      playground
    </Layout>
  )
}

export default Playground
