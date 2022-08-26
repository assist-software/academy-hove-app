import styles from './Divider.module.scss'

interface Props {
  children: any
}

export const Divider = ({ children }: Props) => {
  return (
    <div className={styles.divider}>
      <hr className={styles.dividerLine} /> {children} <hr className={styles.dividerLine} />
    </div>
  )
}
