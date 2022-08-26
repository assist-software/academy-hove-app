import { useStore } from 'store/store'
import { observer } from 'mobx-react-lite'
import { AuthForm } from '../features/auth/components/auth-form/auth-form'

import styles from '../styles/login-page.module.scss'
import coverImage from '../common/assets/login-image.png'

export const AuthPage = observer(() => {
  const { authStore } = useStore()
  const { logIn } = authStore

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPageForm}>
        <AuthForm logIn={logIn} type='signup' />
      </div>
      <img className={styles.loginPageCover} src={coverImage} alt='cover'></img>
    </div>
  )
})
