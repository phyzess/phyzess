import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import Tag from './Tag'

interface ITagGroupProps {
  tags: string | string[]
  style?: React.CSSProperties
}

const StyledTagGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1em;
`

const TagGroup: React.FC<ITagGroupProps> = ({ tags, style }) => {
  let tagArray: string[] = []
  if (typeof tags === 'string') {
    tagArray = useMemo(() => tags.split(','), [tags])
  } else if (tags) {
    tagArray = tags
  }

  return (
    <StyledTagGroup style={style}>
      {tagArray.map((tag) => (
        <Tag key={tag} tag={tag} style={{ marginLeft: 10 }} />
      ))}
    </StyledTagGroup>
  )
}

export default TagGroup
