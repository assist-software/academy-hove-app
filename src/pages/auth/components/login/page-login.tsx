import { AuthHeadings } from 'features/auth/components/auth-heading/auth-heading'
import { AuthLogin } from 'features/auth/components/auth-login/auth-login'
import { Splitter, SplitterPanel } from 'primereact/splitter'
import authImage from 'common/assets/login-image.png'
import { PAGES_AUTH_CONSTANTS } from 'pages/auth/constants/pages-auth-constants'
import { AUTH_ALT_IMAGE } from 'pages/auth/constants/pages-auth-constants'
import styles from '../../styles/auth-pages.module.scss'

export const PageLogin = () => {
  return (
    <>
      <Splitter gutterSize={0} style={{ height: '100vh' }}>
        <SplitterPanel className={styles.leftContainer}>
          <AuthHeadings
            title={PAGES_AUTH_CONSTANTS.PAGE_LOGIN_TITLE}
            subtitle={PAGES_AUTH_CONSTANTS.PAGE_LOGIN_TITLE}
          />
          <div>
            <AuthLogin />
          </div>
        </SplitterPanel>
        <SplitterPanel className={styles.rightContainer}>
          <img src={authImage} alt={AUTH_ALT_IMAGE.ALT_IMG} className={styles.loginImage} />
        </SplitterPanel>
      </Splitter>
    </>
  )
}
