import React from 'react'
import { IArticleSection } from '@phyzess/nophy'
import { ISectionMap, IArticleSectionProps } from './types'
import Quote from './Quote'
import { Header, SubHeader, SubSubHeader } from './SubHeader'
import Text from './Text'
import Image from './Image'
import List from './List'
import Divider from './Divider'
import Code from './Code'
import Page from './Page'
import Toggle from './Toggle'
import Equation from './Equation'

export const NotSupport: React.FC<IArticleSectionProps> = ({ section: { type } }) => <div> 「{type}」 Not Support</div>

/**
 * 目前由于没想好方案，gatsby 的 graphql 查询出来的最多只嵌套了一层
 */
export const SectionMap: ISectionMap = {
  header: Header,
  sub_header: SubHeader,
  sub_sub_header: SubSubHeader,
  quote: Quote,
  text: Text,
  image: Image,
  numbered_list: List,
  bulleted_list: List,
  to_do: List,
  divider: Divider,
  code: Code,
  page: Page,
  toggle: Toggle,
  equation: Equation,
  // 未支持的区分类型
  collection_view_page: NotSupport,
  table_of_contents: NotSupport,
  callout: NotSupport,
  bookmark: NotSupport,
}

export const getSectionComponent = (section: IArticleSection) => SectionMap[section.type]

export { IArticleSectionProps } from './types'
