import { FC, ReactNode } from 'react'

import styles from './profile-label.module.scss'

interface IProps {
  children: ReactNode
}

export const ProfileLabel: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.profileLabel}>
      <div className={styles.profileLabelChildren}>{children}</div>
    </div>
  )
}
