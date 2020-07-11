// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module "package-without-declarations"

// And to shim assets, use (one file extension per `declare`):
// declare module "*.png"

/**
 * gatsby 内置类型参考：https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/index.d.ts
 */

declare namespace SiteMeta {
  export interface INavItem {
    path: string
    name: string
    as: 'a' | 'route'
  }

  export type TNavList = INavItem[]

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
    navList: TNavList
  }
}

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare module 'gatsby-plugin-gitalk'
