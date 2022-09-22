import { observer } from 'mobx-react-lite'

import coverImage from 'common/assets/login-image.png'

import { FormErrorResetter, FullAuthPageTypes, ResetPasswordWrapper, SignInForm, LoginForm } from 'features/auth'

import styles from './page-auth.module.scss'

interface Props {
  type: FullAuthPageTypes
}

export const PageAuth = observer(({ type }: Props) => {
  return (
    <div className={styles.authPage}>
      <div className={styles.authPageForm}>
        <FormErrorResetter />
        {type === 'reset' && <ResetPasswordWrapper />}
        {type === 'login' && <LoginForm />}
        {type === 'signup' && <SignInForm />}
      </div>
      <img className={styles.authPageCover} src={coverImage} alt='cover'></img>
    </div>
  )
})
