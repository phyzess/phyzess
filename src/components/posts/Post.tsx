import React from 'react'
import { PageProps } from 'gatsby'

const Post: React.FC<PageProps> = ({ pageContext }) => {
  return <div>{pageContext.post.name}</div>
}

export default Post
