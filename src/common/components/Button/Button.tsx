import classNames from 'classnames'
import { Button as BaseButton } from 'primereact/button'

interface Props {
  mode: 'primary' | 'secondary' | 'tertiary' | 'danger'
  className?: string
  children: string
  [key: string]: any
}

export const Button = ({ mode, className, children, ...extra }: Props) => {
  const classLookUp = {
    primary: '',
    secondary: 'p-button-outlined',
    tertiary: 'p-button-text',
    danger: 'p-button-danger',
  }

  return <BaseButton label={children} className={classNames(className, classLookUp[mode])} {...extra} />
}
