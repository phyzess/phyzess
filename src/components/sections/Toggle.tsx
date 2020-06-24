import React from 'react'
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, makeStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { getSectionComponent } from './index'
import { IArticleSectionProps } from './types'

const useStyles = makeStyles({
  panelRoot: {
    margin: '25px',
    '&.Mui-expanded': {
      margin: '25px',
      '&:first-child': {
        margin: '25px',
      },
      '&:last-child': {
        margin: '25px',
      },
    },
  },
  detailRoot: {
    flexDirection: 'column',
  },
})

const Toggle: React.FC<IArticleSectionProps> = ({ section: { html }, sameWithPrevCount }) => {
  const cls = useStyles()
  const { content, children } = html[0]
  const hasChildren = children && children.length > 0
  const customPanelRoot = sameWithPrevCount === 0 ? cls.panelRoot : ''
  return (
    <ExpansionPanel classes={{ root: customPanelRoot }}>
      <ExpansionPanelSummary expandIcon={hasChildren && <ExpandMoreIcon />}>
        <Typography>{content}</Typography>
      </ExpansionPanelSummary>
      {hasChildren && (
        <ExpansionPanelDetails classes={{ root: cls.detailRoot }}>
          {children?.map((child, index) => {
            const Component = getSectionComponent(child)
            return <Component key={index} section={child} />
          })}
        </ExpansionPanelDetails>
      )}
    </ExpansionPanel>
  )
}

export default Toggle
