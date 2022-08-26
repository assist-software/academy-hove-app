import classNames from 'classnames'
import { UtilService } from 'common/services/util-service'
import { FC } from 'react'
import style from './button.module.scss'

interface IButton {
  children: JSX.Element | string
  modifier: 'primary' | 'secondary' | 'delete' | 'custom'
}

export const Button: FC<IButton> = ({ children, modifier }) => {
  return (
    <button className={classNames(style.button, style[`button${UtilService.capitalizeFirstLetter(modifier)}`])}>
      {children}
    </button>
  )
}
