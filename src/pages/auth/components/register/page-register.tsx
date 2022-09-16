import { AuthHeadings } from 'features/auth/components/auth-heading/auth-heading'
import { Splitter, SplitterPanel } from 'primereact/splitter'
import authImage from 'common/assets/login-image.png'
import { AuthRegister } from 'features/auth/components/auth-register/auth-register'
import { PAGES_AUTH_CONSTANTS } from 'pages/auth/constants/pages-auth-constants'
import styles from '../../styles/auth-pages.module.scss'

export const PageRegister = () => {
  return (
    <>
      <Splitter gutterSize={0} style={{ height: '100vh' }}>
        <SplitterPanel className={styles.leftContainer}>
          <AuthHeadings
            title={PAGES_AUTH_CONSTANTS.PAGE_REGISTER_TITLE}
            subtitle={PAGES_AUTH_CONSTANTS.PAGE_REGISTER_SUBTITLE}
          />
          <AuthRegister />
        </SplitterPanel>
        <SplitterPanel className={styles.rightContainer}>
          <img src={authImage} alt={PAGES_AUTH_CONSTANTS.ALT_IMG} className={styles.loginImage} />
        </SplitterPanel>
      </Splitter>
    </>
  )
}
