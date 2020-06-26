import { graphql } from 'gatsby'

/**
 * @todo 看能不能抽一个嵌套的 children fragment 出来
 */
export const ArticleFragment = graphql`
  fragment ArticleFragment on Article {
    id
    type
    version
    html {
      caption
      checked
      content
      description
      language
      link
      tagType
      children {
        id
        type
        version
        html {
          caption
          checked
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
      bookmark_icon
      bookmark_cover
    }
  }
`
