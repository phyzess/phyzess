import React from 'react'
import styled from '@emotion/styled'
import PostListItem from './PostListItem'
import { IPost } from './types'

const PostListWrapper = styled.div`
  padding: 2em 0;
`

export interface IPostListProps {
  pageSize: number
  posts: IPost[]
}

const PostList: React.FC<IPostListProps> = ({ pageSize, posts }) => {
  return (
    <PostListWrapper>
      {posts.map((_, index) => (
        <PostListItem key={_.rowId} postMeta={_} last={index === posts.length - 1} />
      ))}
    </PostListWrapper>
  )
}

export default PostList
