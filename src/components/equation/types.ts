export type Mode = 'block' | 'inline'

export interface IEquationProps {
  math: string
  mode?: Mode
}

export interface IError {
  mode: Mode
}

export interface IEquation {
  html: string
  error?: string
}

export interface IEquationItem {
  html: string
}
