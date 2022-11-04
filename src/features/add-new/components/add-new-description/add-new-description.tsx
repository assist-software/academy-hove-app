import { FC, ReactNode } from 'react'

import styles from './add-new-description.module.scss'

interface IProps {
  title: string
  text: string
  children?: ReactNode
}

export const AddNewDescription: FC<IProps> = ({ title, text, children }) => {
  return (
    <div className={styles.addNewDescription}>
      <div className={styles.addNewDescriptionDetails}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.addNewDescriptionChildren}>{children}</div>
    </div>
  )
}
