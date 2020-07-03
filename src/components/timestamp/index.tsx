import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import DateRangeIcon from '@material-ui/icons/DateRange'
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { useTheme, ITheme, IThemedProps } from '@root/theme'

const useStyle = (theme: ITheme) =>
  makeStyles({
    time: {
      height: '20px',
      color: theme.neuTextDefault,
      fontSize: '1em',
    },
    marginRoot: {
      marginRight: '0.3em',
      color: theme.neuTextDefault,
      fontSize: '1em',
    },
  })()

const TimestampWrapper = styled.span<IThemedProps>`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: '0.3em';
`

interface ITimestampProps {
  timestamp: number
  noIcon?: boolean
  prefix?: string
}

const Timestamp: React.FC<ITimestampProps> = ({ timestamp, noIcon, prefix }) => {
  const theme = useTheme()
  const cls = useStyle(theme)
  return (
    <TimestampWrapper>
      {!noIcon && <DateRangeIcon fontSize='small' classes={{ root: cls.marginRoot }} />}
      {prefix && (
        <Typography variant='h6' component='span' classes={{ root: cls.marginRoot }}>
          {prefix}
        </Typography>
      )}
      <Typography variant='h6' component='span' classes={{ root: cls.time }}>
        {dayjs(timestamp).format('MMM DD, YYYY')}
      </Typography>
    </TimestampWrapper>
  )
}

export default Timestamp
