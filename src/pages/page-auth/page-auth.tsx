import { observer } from 'mobx-react-lite'
import { useStore } from 'store/store'

import { AuthPageTypes } from 'features/auth/models/auth-models'
import { AuthForm } from '../../features/auth/components/auth-form/auth-form'

import coverImage from 'common/assets/login-image.png'

import styles from './page-auth.module.scss'

interface Props {
  type: AuthPageTypes
}

export const AuthPage = observer(({ type }: Props) => {
  const { authStore } = useStore()
  const { logIn, signUp } = authStore

  return (
    <div className={styles.authPage}>
      <div className={styles.authPageForm}>
        <AuthForm logIn={logIn} signUp={signUp} type={type} />
      </div>
      <img className={styles.authPageCover} src={coverImage} alt='cover'></img>
    </div>
  )
})
