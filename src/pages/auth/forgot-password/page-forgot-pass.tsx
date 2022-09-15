import { AuthHeadings } from 'features/auth/components/auth-heading/auth-heading'
import { Splitter, SplitterPanel } from 'primereact/splitter'
import authImage from 'common/assets/login-image.png'
import styles from '../login/page-login.module.scss'
import { AuthForgotPass } from 'features/auth/components/auth-forgot-pass/auth-forgot-pass'

export const PageForgotPass = () => {
  return (
    <div>
      <Splitter gutterSize={0} style={{ height: '100vh' }}>
        <SplitterPanel className={styles.leftContainer}>
          <AuthHeadings title='Forgot password' subtitle='Password reset link sent to you email address.' />
          <AuthForgotPass />
        </SplitterPanel>
        <SplitterPanel className={styles.rightContainer}>
          <img src={authImage} alt='Page Image' className={styles.loginImage} />
        </SplitterPanel>
      </Splitter>
    </div>
  )
}
