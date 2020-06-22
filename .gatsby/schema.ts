export const SchemaPostTypeDef = `
  type Post implements Node {
    article: Article
  }
  type Article {
    html: Html
  }
  type Html {
    checked: [Boolean]
    children: Children
  }
  type Children {
    html: Html
  }
`
