import { observer } from 'mobx-react-lite'

import coverImage from 'common/assets/login-image.png'

import {
  FormErrorResetter,
  FullAuthPageTypes,
  LoginFormWrapper,
  ResetPasswordWrapper,
  SignInFormWrapper,
} from 'features/auth'

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
        {type === 'login' && <LoginFormWrapper />}
        {type === 'signup' && <SignInFormWrapper />}
      </div>
      <img className={styles.authPageCover} src={coverImage} alt='cover'></img>
    </div>
  )
})
