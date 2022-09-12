//REACT IMPORTS
import React from 'react'
//CLASSNAME IMPORT
import classnames from 'classnames/bind'
//STYLING IMPORT
import styles from './Typography.module.scss'

const typoMapping: any = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  bodyNormal: 'p',
  bodySmall: 'p',
  bodyTiny: 'p',
}

const cx = classnames.bind(styles)
interface typoProps {
  variant: string
  color: string
  typoText: string
}

export const Typography: React.FC<typoProps> = ({ variant, color, typoText }) => {
  const TypographyComponent = variant ? typoMapping[variant] : 'p'
  return <TypographyComponent className={cx(variant, color)}>{typoText}</TypographyComponent>
}
