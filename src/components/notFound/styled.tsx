import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/core'

export const blink = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0
  }
`

const triangle = css`
  display: inline-block;
  width: 0;
  height: 0;
  border: 11px solid transparent;
`

export const Layout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 2.5em 1em;
  background-color: rgba(4, 30, 38, 1);
`

export const Line = styled.div<{ waiting?: boolean }>`
  display: flex;
  flex-flow: row;
  justify-content: flex;start;
  align-items: center;
  margin-bottom: 0.75em;
  height: 22px;
  line-height: 22px;
  color: #14c332;
  font-size: 0.8em;
  font-family: AndaleMono, monospace;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: pre-wrap;

  :before {
    content: 'phyzess';
    display: inline-block;
    padding: 0 0.5em;
    height: 100%;
    color: rgba(102, 121, 124, 1);
    background-color: rgba(10, 41, 50, 1);
  }

  :after {
    content: '';
    align-self: flex-end;
    display: ${({ waiting }) => (waiting ? 'inline-block' : 'none')};
    vertical-align: -0.15em;
    width: 0.75em;
    height: 0.05em;
    background: #14c332;
    box-shadow: 1px 1px 1px rgba(31, 240, 66, 0.65), -1px -1px 1px rgba(31, 240, 66, 0.65),
      1px -1px 1px rgba(31, 240, 66, 0.65), -1px 1px 1px rgba(31, 240, 66, 0.65);
    animation: ${blink} 1.25s steps(1) infinite;
  }
`

export const Path = styled.span`
  display: inline-block;
  position: relative;
  margin-right: 20px;
  padding: 0 0.5em 0 20px;
  color: rgba(10, 41, 51, 1);
  background-color: rgba(32, 117, 199, 1);

  :before {
    content: '';
    position: absolute;
    left: 0;
    ${triangle}
    border-left-color: rgba(10, 41, 50, 1);
  }

  :after {
    content: '';
    position: absolute;
    right: -22px;
    ${triangle}
    border-left-color: rgba(32, 117, 199, 1);
  }
`
