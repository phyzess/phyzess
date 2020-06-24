import React from 'react'
import PhyzessEquation from '@components/equation'
import { IArticleSectionProps } from './types'

const Equation: React.FC<IArticleSectionProps> = ({ section }) => {
  return <PhyzessEquation math={section.html[0].content} />
}

export default Equation
