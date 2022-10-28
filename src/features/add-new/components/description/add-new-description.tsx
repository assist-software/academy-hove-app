import { FC } from 'react'

import styles from './add-new-description.module.scss'

interface IProps {
  title: string
  text: string
  children?: any
}

export const AddNewDescription: FC<IProps> = ({ title, text, children }) => {
  return (
    <div className={styles.description}>
      <div className={styles.descriptionDetails}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.descriptionChildren}>{children}</div>
    </div>
  )
}
