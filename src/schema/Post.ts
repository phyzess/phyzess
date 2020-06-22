import { graphql } from 'gatsby'

export const PostFragment = graphql`
  fragment PostFragment on Post {
    name
    tags
    last_edited_time
    created_time
    rowId
    article {
      type
      html {
        content
      }
    }
  }
`
