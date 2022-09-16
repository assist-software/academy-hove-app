import { AuthHeadings } from 'features/auth/components/auth-heading/auth-heading'
import { Splitter, SplitterPanel } from 'primereact/splitter'
import authImage from 'common/assets/login-image.png'
import { AuthResetPass } from 'features/auth/components/auth-reset-pass/auth-reset-pass'
import { PAGES_AUTH_CONSTANTS } from 'pages/auth/constants/pages-auth-constants'
import { AUTH_ALT_IMAGE } from 'pages/auth/constants/pages-auth-constants'
import styles from '../../styles/auth-pages.module.scss'

export const PageResetPass = () => {
  return (
    <>
      <Splitter gutterSize={0} style={{ height: '100vh' }}>
        <SplitterPanel className={styles.leftContainer}>
          <AuthHeadings
            title={PAGES_AUTH_CONSTANTS.PAGE_RESET_PASS_TITLE}
            subtitle={PAGES_AUTH_CONSTANTS.PAGE_RESET_PASS_SUBTITLE}
          />
          <AuthResetPass />
        </SplitterPanel>
        <SplitterPanel className={styles.rightContainer}>
          <img src={authImage} alt={AUTH_ALT_IMAGE.ALT_IMG} className={styles.loginImage} />
        </SplitterPanel>
      </Splitter>
    </>
  )
}
