import ASSISTLogo from 'common/assets/logo-assist.svg'

import styles from './auth-heading.module.scss'

interface Props {
  title: string
  subtitle: string
}

export const AuthHeading = ({ title, subtitle }: Props) => {
  return (
    <div className={styles.authHeadingHeader}>
      <img className={styles.authHeadingASSISTLogo} alt='ASSIST Logo' src={ASSISTLogo} />
      <h1 className={styles.authHeadingTitle}>{title}</h1>
      <h3 className={styles.authHeadingSubitle}>{subtitle}</h3>
    </div>
  )
}
