import React from 'react'
import { PageProps } from 'gatsby'
import withThemeRoot from '@components/HOC/withThemeRoot'
import Layout from '@components/layouts'
import Landing from '@components/bios/Landing'
import Seo from '@components/seo'

const PhyzessIndex: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title='home' />
      <Landing />
    </Layout>
  )
}

export default withThemeRoot(PhyzessIndex)
