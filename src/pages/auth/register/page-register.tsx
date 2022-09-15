import { AuthHeadings } from 'features/auth/components/auth-heading/auth-heading'
import { Splitter, SplitterPanel } from 'primereact/splitter'
import authImage from 'common/assets/login-image.png'
import styles from '../login/page-login.module.scss'
import { AuthRegister } from 'features/auth/components/auth-register/auth-register'
export const PageRegister = () => {
  return (
    <div>
      <Splitter gutterSize={0} style={{ height: '100vh' }}>
        <SplitterPanel className={styles.leftContainer}>
          <AuthHeadings title='Create account' subtitle='Sign up for free and become a member.' />
          <AuthRegister />
        </SplitterPanel>
        <SplitterPanel className={styles.rightContainer}>
          <img src={authImage} alt='Page Image' className={styles.loginImage} />
        </SplitterPanel>
      </Splitter>
    </div>
  )
}
