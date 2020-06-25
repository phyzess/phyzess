export const SchemaPostTypeDef = `
  type Post implements Node {
    article: [Article]
  }
  type Article {
    id: String
    type: String
    version: Int
    html: [Html]
    format: BlockFormat
  }
  type Html {
    caption: String
    content: String
    description: String
    language: String
    link: String
    tagType: String
    checked: Boolean
    format: [HtmlFormat]
    children: Children
  }
  type Children {
    id: String
    type: String
    version: Int
    html: [Html]
    format: BlockFormat
  }
  type BlockFormat {
    block_color: String
    block_aspect_ratio: Float
    block_full_width: Boolean
    block_height: Float
    block_page_width: Boolean
    block_preserve_scale: Boolean
    block_width: Float
    bookmark_icon: String
    bookmark_cover: String
    code_wrap: Boolean
    display_source: String
    page_icon: String
    page_cover: String
    page_cover_position: Float
  }
  type HtmlFormat {
    type: String
    url: String
    color: String
    equation: String
  }
`
