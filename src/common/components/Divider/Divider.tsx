import classNames from 'classnames'
import styles from './Divider.module.scss'

interface Props {
  children?: string
  [key: string]: any
}

export const Divider = ({ children, ...props }: Props) => {
  const lineClassName = !props.className ? styles.dividerLine : styles.dividerLessLine

  return (
    <div className={classNames(!props.className ? styles.divider : styles.dividerLess)}>
      <hr {...props} className={classNames(lineClassName, { [props.className]: !!props.className })} />
      {children && (
        <>
          {children}
          <hr {...props} className={classNames(lineClassName, { [props.className]: !!props.className })} />
        </>
      )}
    </div>
  )
}
