import styled from '@emotion/styled'
import { css } from '@emotion/core'

const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0.5rem;
`

export const LayoutWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const Main = styled('main')`
  margin-top: 2.5rem;
  padding: 0.5rem;
  min-height: 40rem;
`

export const HeaderWrapper = styled('header')`
  ${flex}
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 2.5rem;
  font-size: 1.2rem;
  z-index: 9900;

  & .phyzess-link {
    color: rgba(0, 0, 0, 1);

    &:hover {
      color: #006d75;
    }
  }
`

export const FooterWrapper = styled('footer')`
  ${flex}
`
