import styles from './profile-label.module.scss'

export const ProfileLabel = ({ children }: any) => {
  return (
    <div className={styles.profileContent}>
      <div className={styles.profileLabel}>{children}</div>
    </div>
  )
}
