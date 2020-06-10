import React from 'react'
import PostListItem from './PostListItem'
import { IPost } from './types'

export interface IPostListProps {
  pageSize: number
  posts: IPost[]
}

const PostList: React.FC<IPostListProps> = ({ pageSize, posts }) => {
  return (
    <div>
      {posts.map((_) => (
        <PostListItem key={_.rowId} postMeta={_} />
      ))}
    </div>
  )
}

export default PostList
