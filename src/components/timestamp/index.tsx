import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import DateRangeIcon from '@material-ui/icons/DateRange'
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { $colorTextDefault } from '@/root/theme'

const useStyle = makeStyles({
  root: {
    marginLeft: '0.3em',
    height: '20px',
    fontSize: '1em',
    color: $colorTextDefault,
  },
})

const TimestampWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
`

interface ITimestampProps {
  timestamp: number
}
const Timestamp: React.FC<ITimestampProps> = ({ timestamp }) => {
  const cls = useStyle()
  return (
    <TimestampWrapper>
      <DateRangeIcon fontSize='small' style={{ color: $colorTextDefault }} />
      <Typography variant='h6' component='span' classes={{ root: cls.root }}>
        {dayjs(timestamp).format('MMM DD, YYYY')}
      </Typography>
    </TimestampWrapper>
  )
}

export default Timestamp
