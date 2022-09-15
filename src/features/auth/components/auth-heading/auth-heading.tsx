import logo from 'common/assets/logo-assist.svg'
import styles from './auth-heading.module.scss'

interface IProps {
  title: string
  subtitle: string
}

export const AuthHeadings = ({ title, subtitle }: IProps) => {
  return (
    <div className={styles.authContainer}>
      <div>
        <img src={logo} alt='logo-assist' />
      </div>
      <div className={styles.titlesContainer}>
        <label className={styles.authHeadingColorTitle}>{title}</label>
        <label className={styles.authHeadingColorSubtitle}>{subtitle}</label>
      </div>
    </div>
  )
}
