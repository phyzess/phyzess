import React from 'react'
import Gitalk from 'gatsby-plugin-gitalk'

interface ICommentProps {
  title: string
  id: string
}

const Comment: React.FC<ICommentProps> = ({ title, id }) => (
  <Gitalk
    options={{
      id,
      title,
    }}
  />
)

export default Comment
