import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface ISeoProps {
  title: string
  description?: string
  lang?: string
  meta?: any[]
}

const Seo: React.FC<ISeoProps> = ({
  description = '',
  lang = 'zh-CN',
  meta = [],
  title,
}) => {
  const { siteMeta } = useStaticQuery(
    graphql`
      query {
        siteMeta {
          title
          description
        }
      }
    `
  )

  const metaDescription = description || siteMeta.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMeta.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        // {
        //   name: `twitter:creator`,
        //   content: siteMeta.social.twitter,
        // },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default Seo
