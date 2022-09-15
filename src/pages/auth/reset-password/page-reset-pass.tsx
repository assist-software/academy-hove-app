import { AuthHeadings } from 'features/auth/components/auth-heading/auth-heading'
import { Splitter, SplitterPanel } from 'primereact/splitter'
import authImage from 'common/assets/login-image.png'
import styles from '../login/page-login.module.scss'
import { AuthResetPass } from 'features/auth/components/auth-reset-pass/auth-reset-pass'

export const PageResetPass = () => {
  return (
    <div>
      <Splitter gutterSize={0} style={{ height: '100vh' }}>
        <SplitterPanel className={styles.leftContainer}>
          <AuthHeadings title='Reset password' subtitle='Create a new password for your account.' />
          <AuthResetPass />
        </SplitterPanel>
        <SplitterPanel className={styles.rightContainer}>
          <img src={authImage} alt='Page Image' className={styles.loginImage} />
        </SplitterPanel>
      </Splitter>
    </div>
  )
}
