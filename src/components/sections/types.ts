import { IArticleSection, TReadableFormatType, IFlattenFormats } from '@phyzess/nophy'
import { SerializedStyles } from '@emotion/core'

type TSectionType = IArticleSection['type']

export interface IArticleSectionProps {
  section: IArticleSection
  previous?: IArticleSection
  next?: IArticleSection
  // 目前只用于给 number_list 计数用
  sameWithPrevCount?: number
}

export type ISectionMap = {
  [key in TSectionType]: React.FC<IArticleSectionProps>
}

export type TFormatType = Exclude<TReadableFormatType, 'link'>

export interface ILinkFormat extends IFlattenFormats {
  type: 'link'
  url: string
}

export interface IFormat extends IFlattenFormats {
  type: TFormatType
}

export type TGetFormaCSS = (format: IFormat) => SerializedStyles

export type TFormatMap = {
  [key in TFormatType]: TGetFormaCSS
}
