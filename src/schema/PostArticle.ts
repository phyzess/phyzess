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
    format {
      page_icon
      display_source
      code_wrap
      block_aspect_ratio
      block_color
      block_full_width
      block_height
      block_page_width
      block_preserve_scale
      block_width
    }
  }
`
