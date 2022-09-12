import { useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from 'store/store'
import { useEffect } from 'react'

import { ResetPasswdForm } from 'features/reset-passwd'
import { FullAuthPageTypes } from 'features/auth'
import { AuthForm } from 'features/auth'

import coverImage from 'common/assets/login-image.png'

import styles from './page-auth.module.scss'

interface Props {
  type: FullAuthPageTypes
}

export const AuthPage = observer(({ type }: Props) => {
  const location = useLocation()

  const { authStore } = useStore()
  const { sendResetPasswordRequest, setFormErrorText, logInWithGoogle, resetPassword, formErrorText, signUp, logIn } =
    authStore

  useEffect(() => {
    setFormErrorText(null)
  }, [location.pathname])

  return (
    <div className={styles.authPage}>
      <div className={styles.authPageForm}>
        {type === 'reset' ? (
          <ResetPasswdForm
            formErrorText={formErrorText}
            sendResetPasswordRequest={sendResetPasswordRequest}
            resetPassword={resetPassword}
          />
        ) : (
          <AuthForm
            logInWithGoogle={logInWithGoogle}
            formErrorText={formErrorText}
            logIn={logIn}
            signUp={signUp}
            type={type}
          />
        )}
      </div>
      <img className={styles.authPageCover} src={coverImage} alt='cover'></img>
    </div>
  )
})
