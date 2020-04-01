import React from 'react'
import Layout from '@components/layouts'
import LandingBio from '@components/bios/LandingBio'
import Seo from '@/components/seo'

const PhyzessIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title='home' />
      <LandingBio />
    </Layout>
  )
}

export default PhyzessIndex
