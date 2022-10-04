import { FC, ReactNode, useState } from 'react'

import styles from './profile-show-details.module.scss'

interface IProps {
  title: string
  data: string
  child: ReactNode
}

export const ProfileShowDetails: FC<IProps> = ({ child, title, data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className={styles.profileShowDetails}>
      <div className={styles.profileShowDetailsWrapper}>
        <div className={styles.profileShowDetailsContent}>
          <p className={styles.profileShowDetailsTitle}>{title}</p>
          {!isOpen && <p className={styles.profileShowDetailsData}>{data}</p>}
        </div>
        <p className={styles.profileShowDetailsEdit} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Cancel' : 'Edit'}
        </p>
      </div>
      {isOpen && <div className={styles.profileShowDetailsChild}>{child}</div>}
    </div>
  )
}
