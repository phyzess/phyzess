import React from 'react'
import { IArticleSectionProps } from './types'

const Bookmark: React.FC<IArticleSectionProps> = ({ section }) => {
  console.log('===Log Start===')
  console.log(section)
  console.log('---Log End---')
  return <div />
}

export default Bookmark
