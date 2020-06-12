import React from 'react'
import { PageProps } from 'gatsby'
import withThemeRoot from '@/theme'
import Layout from '@components/layouts'
import Seo from '@components/seo'

const Playground: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title='playground' />
      playground
    </Layout>
  )
}

export default withThemeRoot(Playground)
