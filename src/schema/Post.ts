import { graphql } from 'gatsby'

export const FragPost = graphql`
  fragment FragPost on Post {
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
