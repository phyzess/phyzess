import React from 'react'
import { Container } from '@material-ui/core'
import Gitalk from 'gatsby-plugin-gitalk'
import './style.styl'

interface ICommentProps {
  title: string
  id: string
}

const Comment: React.FC<ICommentProps> = ({ title, id }) => (
  <Container maxWidth='md'>
    <Gitalk
      options={{
        id,
        title,
      }}
    />
  </Container>
)

export default Comment
