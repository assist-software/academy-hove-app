import { AuthHeadings } from 'features/auth/components/auth-heading/auth-heading'
import { AuthLogin } from 'features/auth/components/auth-login/auth-login'
import { Splitter, SplitterPanel } from 'primereact/splitter'
import authImage from 'common/assets/login-image.png'

import styles from './page-login.module.scss'

export const PageLogin = () => {
  return (
    <div>
      <Splitter gutterSize={0} style={{ height: '100vh' }}>
        <SplitterPanel className={styles.leftContainer}>
          <AuthHeadings title='Log in' subtitle='Enter your account details below.' />
          <div>
            <AuthLogin />
          </div>
        </SplitterPanel>
        <SplitterPanel className={styles.rightContainer}>
          <img src={authImage} alt='Page Image' className={styles.loginImage} />
        </SplitterPanel>
      </Splitter>
    </div>
  )
}
