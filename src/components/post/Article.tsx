import React, { memo } from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { IPage } from '@phyzess/nophy'
import { SectionMap, IArticleSectionProps } from '@components/sections'

type Article = IPage['article']
interface IArticleProps {
  article: Article
}

const useArticleSectionStyle = makeStyles({
  root: {
    margin: '4px 0',
    padding: '0 1.5em',
    textShadow: 'none',
    overflow: 'hidden',
  },
})

const ArticleSection: React.FC<IArticleSectionProps> = ({ section, previous, next, sameWithPrevCount }) => {
  const cls = useArticleSectionStyle()
  const SectionComponent = SectionMap[section.type]
  return (
    <Typography classes={{ root: cls.root }} component='section'>
      {SectionComponent && (
        <SectionComponent section={section} previous={previous} next={next} sameWithPrevCount={sameWithPrevCount} />
      )}
    </Typography>
  )
}

const Article: React.FC<IArticleProps> = memo(({ article }) => {
  let sameWithPrevCount = 0
  return (
    <article>
      {article.map((section, index) => {
        const previous = article[index - 1]
        const next = article[index + 1]
        if (section.type === 'numbered_list') {
          sameWithPrevCount++
        } else {
          sameWithPrevCount = 0
        }
        return (
          <ArticleSection
            key={section.id}
            section={section}
            previous={previous}
            next={next}
            sameWithPrevCount={sameWithPrevCount}
          />
        )
      })}
    </article>
  )
})

export default Article
