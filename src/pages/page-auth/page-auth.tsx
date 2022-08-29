import { observer } from 'mobx-react-lite'
import { useStore } from 'store/store'

import { AuthForm } from 'features/auth'
import { FullAuthPageTypes } from 'features/auth'
import { ResetPasswdForm } from 'features/reset-passwd'

import coverImage from 'common/assets/login-image.png'

import styles from './page-auth.module.scss'

interface Props {
  type: FullAuthPageTypes
}

export const AuthPage = observer(({ type }: Props) => {
  const { authStore } = useStore()
  const { logIn, signUp, resetPassword, sendResetPasswordRequest } = authStore

  return (
    <div className={styles.authPage}>
      <div className={styles.authPageForm}>
        {type === 'reset' ? (
          <ResetPasswdForm sendResetPasswordRequest={sendResetPasswordRequest} resetPassword={resetPassword} />
        ) : (
          <AuthForm logIn={logIn} signUp={signUp} type={type} />
        )}
      </div>
      <img className={styles.authPageCover} src={coverImage} alt='cover'></img>
    </div>
  )
})
