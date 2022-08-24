import { observer } from 'mobx-react-lite'
import { AuthForm } from '../features/auth/components/auth-form/auth-form'
import { Button } from 'primereact/button'
import { useStore } from 'store/store'
import coverImage from '../common/assets/login-image.png'
import googleLogo from '../common/assets/google.svg'
import ASSISTLogo from '../common/assets/logo-assist.svg'

import styles from '../styles/login-page.module.scss'
import classNames from 'classnames'

export const AuthPage = observer(() => {
  const { authStore } = useStore()
  const { logIn } = authStore

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPageForm}>
        <div className={styles.loginPageHeader}>
          <img className={styles.loginPageASSISTLogo} alt='ASSIST Logo' src={ASSISTLogo} />
          <h1 className={styles.loginPageTitle}>Create account</h1>
          <h3 className={styles.loginPageSubitle}>Sign up for free and become a member.</h3>
        </div>

        <Button
          icon={<img alt='' src={googleLogo} />}
          iconPos='left'
          label='Sign up with Google'
          className={classNames('p-button-outlined', styles.loginPageSignWithGoogle)}
        />
        <div className={styles.loginPageDivider}>
          <hr className={styles.loginPageDividerLine} /> OR <hr className={styles.loginPageDividerLine} />
        </div>
        <AuthForm logIn={logIn} type='signup' />
      </div>
      <img className={styles.loginPageCover} src={coverImage} alt='cover'></img>
    </div>
  )
})
