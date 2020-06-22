import { graphql } from 'gatsby'

/**
 * @todo 看能不能抽一个嵌套的 children fragment 出来
 */
export const PostArticleFragment = graphql`
  fragment PostArticleFragment on PostArticle {
    id
    type
    version
    html {
      caption
      # checked
      content
      language
      tagType
      children {
        id
        type
        version
        html {
          caption
          # checked
          content
          tagType
          format {
            type
          }
        }
      }
      format {
        type
        url
      }
    }
  }
`
