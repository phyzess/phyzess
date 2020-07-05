import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '@components/layouts'
import Landing from '@components/bios/Landing'
import Seo from '@components/seo'

const PhyzessIndex: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Seo title='home' />
      <Landing />
    </Layout>
  )
}

export default PhyzessIndex
