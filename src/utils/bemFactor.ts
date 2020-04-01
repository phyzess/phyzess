type BemFactor = (
  blockName: string
) => (eleName?: string, modifierName?: string) => string

const bemFactor: BemFactor = (blockName) => (elemName, modifierName) => {
  const element = elemName ? `__${elemName}` : ''
  const modifier = modifierName ? `--${modifierName}` : ''
  return `phyzess-${blockName}${element}${modifier}`
}

export default bemFactor
