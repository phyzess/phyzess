import React, { useEffect, useCallback } from 'react'
import { navigate, PageProps } from 'gatsby'
import { Layout, Line, Path } from './styled'

const NotFoundPage: React.FC<PageProps> = () => {
  const navigateToHome = useCallback((e) => {
    if (e.keyCode === 27) {
      navigate('/')
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', navigateToHome)
    return () => {
      window.removeEventListener('keydown', navigateToHome)
    }
  }, [])

  return (
    <Layout>
      <Line>
        <Path>~/404</Path>The page you requested cannot be found right meow.
      </Line>
      <Line>
        <Path>~/404</Path>Press 「esc」to go home.
      </Line>
      <Line waiting>
        <Path>~/404</Path>
      </Line>
    </Layout>
  )
}

export default NotFoundPage
