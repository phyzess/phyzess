import React, { useState, useLayoutEffect, useRef } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { parseImageUrl } from '@phyzess/nophy'
import useImage from '@hooks/useImage'
import throttle from '@utils/throttle'
import imgError from '@/../static/image-error.png'
import { IArticleSectionProps } from './types'

const ImageWrapper = styled.div`
  margin: 0.5em auto;
  width: 90%;
  max-width: 960px;
  align-self: center;
`

const ImageErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
`

const ImageErrorInner = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${imgError});
  background-size: contain;
  background-position: center center;
`

const imageCSS = css`
  display: block;
  width: 100%;
  object-fit: cover;
  border: 0;
  border-radius: 0.5em;
  pointer-events: auto;
`

const captionCSS = css`
  padding: 0.5em 1em;
  font-size: 12px;
`

interface IInnerImageProps {
  src: string
  caption?: string
}

const ImageError: React.FC<{}> = () => (
  <ImageErrorWrapper>
    <ImageErrorInner />
    <Typography css={captionCSS} component='p'>
      图片加载错误
    </Typography>
  </ImageErrorWrapper>
)

const SkeletonPlaceholder: React.FC<{}> = () => (
  <>
    <Skeleton css={imageCSS} variant='rect' animation='wave' height={200} />
    <Skeleton variant='text' />
  </>
)

const InnerImage: React.FC<IInnerImageProps> = ({ src: source, caption }) => {
  const { src, loading, error } = useImage(parseImageUrl(source))

  return (
    <>
      {loading && !error ? <SkeletonPlaceholder /> : <img css={imageCSS} src={src} />}
      {error && <ImageError />}
      <Typography css={captionCSS} component='p'>
        {caption}
      </Typography>
    </>
  )
}

/**
 *
 * @todo 添加懒加载和 skeleton
 */
const Image: React.FC<IArticleSectionProps> = ({
  section: {
    html: [{ content, caption }],
  },
}) => {
  const parentRef = useRef<HTMLDivElement>(null)
  const [showImage, setShowImage] = useState(false)

  useLayoutEffect(() => {
    const viewportEl = document.querySelector('.phyzess-layout__wrapper') as HTMLElement
    const eleScrolledIn = document.querySelector('.phyzess-layout__main') as HTMLElement

    const handleOnScroll = throttle(() => {
      if (parentRef.current && !showImage) {
        const { offsetHeight: viewportHeight } = viewportEl
        const { top } = parentRef.current.getBoundingClientRect()
        if (top <= viewportHeight) {
          setShowImage(true)
        }
      }
    }, 500)

    eleScrolledIn?.addEventListener('scroll', handleOnScroll)
  }, [])

  return (
    <ImageWrapper ref={parentRef}>
      {showImage ? <InnerImage src={parseImageUrl(content)} caption={caption} /> : <SkeletonPlaceholder />}
    </ImageWrapper>
  )
}

export default Image
