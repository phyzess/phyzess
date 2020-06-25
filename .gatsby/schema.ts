export const SchemaPostTypeDef = `
  type Post implements Node {
    article: Article
  }
  type Article {
    html: Html
    format: Format
  }
  type Html {
    checked: [Boolean]
    children: Children
  }
  type Children {
    html: Html
  }
  type Format {
    block_color: String;
    block_aspect_ratio: Number;
    block_full_width: Boolean;
    block_height: Number;
    block_page_width: Boolean;
    block_preserve_scale: Boolean;
    block_width: Number;
    code_wrap: Boolean;
    display_source: String;
    page_icon: String;
    page_cover: String;
    page_cover_position: Number;
  }
`
