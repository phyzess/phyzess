export interface ISiteMetaData {
  title: string
  description: string
  siteUrl: string
  copyrightName: string
  copyrightUrl: string
  pageSize: number
  netlifyUrl: string
  useComment: boolean
  commentDisqusShortName: string
  useSearch: boolean
  icon: {
    name: string
    url: string
  }
  avatar: {
    name: string
    url: string
  }
}

export interface INavItem {
  path: string
  name: string
  as: 'a' | 'route'
}
