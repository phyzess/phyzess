import React from 'react'
import { Checkbox, makeStyles } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { $colorTextSecondary } from '@root/theme'
import { getSectionComponent } from './index'
import Text from './Text'
import { IArticleSectionProps } from './types'

const useStyles = makeStyles({
  checkboxRoot: {
    padding: 0,
    cursor: 'initial',
  },
})

const ListItem = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: flex-start;
`

const ListStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 4px;
  width: 24px;
  min-height: 1.5em;
  padding-right: 2px;
`

const ListContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 1.5em;
`

const checkedCSS = css`
  text-decoration: line-through;
  color: ${$colorTextSecondary};
`

const List: React.FC<IArticleSectionProps> = (props) => {
  const {
    section: { html, type },
    sameWithPrevCount,
  } = props

  const cls = useStyles()
  const children = html[0].children

  return (
    <ListItem>
      <ListStyle>
        {type === 'bulleted_list' && <FiberManualRecordIcon style={{ fontSize: '0.6em' }} />}
        {type === 'numbered_list' && sameWithPrevCount}
        {type === 'to_do' && (
          <Checkbox color='primary' size='small' classes={{ root: cls.checkboxRoot }} checked={html[0].checked} />
        )}
      </ListStyle>
      <ListContent>
        <Text {...props} css={html[0].checked && checkedCSS} />
        {children &&
          children.length !== 0 &&
          children.map((child, index) => {
            const Component = getSectionComponent(child)
            return <Component key={index} section={child} />
          })}
      </ListContent>
    </ListItem>
  )
}

export default List
