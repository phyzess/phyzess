import styled from '@emotion/styled'
import { css } from '@emotion/core'

const flex = css`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`

export const LayoutWrapper = styled.div`
  ${flex}
  flex-flow: column nowrap;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`

export const Main = styled('main')`
  flex: 1;
  position: relative;
  padding: 0.5rem 0;
  width: 100%;
  min-height: 40rem;
  overflow: auto;
`

export const HeaderWrapper = styled('header')`
  ${flex}
  flex-basis: 2.5em;
  flex-shrink: 0;
  padding: 0 20px;
  font-size: 1.2rem;
  z-index: 9999;
`

export const FooterWrapper = styled('footer')`
  ${flex}
  justify-content: center;
  padding: 0.5rem;
`
