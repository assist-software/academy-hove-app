import { useEffect } from 'react'
import { useStore } from 'store/store'
import { observer } from 'mobx-react-lite'
import { useLocation, useNavigate } from 'react-router-dom'

import { AuthForm } from 'features/auth'
import { FullAuthPageTypes } from 'features/auth'
import { ResetPasswdForm } from 'features/reset-passwd'

import coverImage from 'common/assets/login-image.png'

import styles from './page-auth.module.scss'

interface Props {
  type: FullAuthPageTypes
}

export const AuthPage = observer(({ type }: Props) => {
  const location = useLocation()
  const navigator = useNavigate()

  const { authStore } = useStore()
  const {
    logIn,
    signUp,
    resetPassword,
    sendResetPasswordRequest,
    setFormErrorText,
    formErrorText,
    user,
    logInWithGoogle,
  } = authStore

  useEffect(() => {
    setFormErrorText(null)
  }, [location.pathname])

  useEffect(() => {
    if (user?.email) navigator('/', { replace: true })
  }, [user])

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
