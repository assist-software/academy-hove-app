import { useForm, Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'

import classNames from 'classnames'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { useStore } from 'store/store'

import googleLogo from 'common/assets/google.svg'
import { Button } from 'common/components/Button/Button'
import { Divider } from 'common/components/Divider/Divider'
import { ErrorCard } from 'common/components/ErrorCard/error-card'
import { PAGES_PATHS } from 'common/constants/constants'

import { AuthHeading } from 'features/auth/components/auth-heading/auth-heading'
import {
  AUTH_PAGE_SUBTITLES,
  AUTH_PAGE_TITLES,
  PRIMARY_BUTTON_TEXT,
  AUTH_I18,
} from 'features/auth/constants/auth-i18-constants'

import styles from './auth-form.module.scss'

export const SignInForm = () => {
  const { authStore } = useStore()
  const { signUp, formErrorText, logInWithGoogle } = authStore

  const defaultValues = {
    email: '',
    password: '',
    rememberMe: false,
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues })

  const onSubmit = (data: any) => {
    signUp(data)

    reset()
  }

  const getFormErrorMessage = (name: 'email' | 'password') => {
    return errors[name] && <small className='p-error'>{errors[name]?.message}</small>
  }

  return (
    <>
      <AuthHeading title={AUTH_PAGE_TITLES.signup} subtitle={AUTH_PAGE_SUBTITLES.signup} />
      {formErrorText && <ErrorCard text={formErrorText} />}

      <>
        <Button
          onClick={() => {
            logInWithGoogle()
          }}
          icon={<img alt='Google Icon' src={googleLogo} />}
          className={styles.authFormSignWithGoogle}
          mode='secondary'>
          {AUTH_I18.signWithGoogleButton}
        </Button>
        <Divider children={AUTH_I18.dividerText} />
      </>

      <div className={styles.authForm}>
        <form onSubmit={handleSubmit(onSubmit)} className='p-fluid'>
          <div className={styles.authFormField}>
            <span className='p-float-label p-input-icon-right'>
              <Controller
                name='email'
                control={control}
                rules={{
                  required: AUTH_I18.requiredEmailError,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: AUTH_I18.invalidEmailError,
                  },
                }}
                render={({ field, fieldState }) => (
                  <InputText
                    id={field.name}
                    {...field}
                    className={classNames({
                      'p-invalid': fieldState.invalid,
                    })}
                  />
                )}
              />
              <label htmlFor='email' className={classNames({ 'p-error': !!errors.email })}>
                Email
              </label>
            </span>
            {getFormErrorMessage('email')}
          </div>
          <div className={styles.authFormField}>
            <span className='p-float-label'>
              <Controller
                name='password'
                control={control}
                rules={{ required: AUTH_I18.requiredPasswordError }}
                render={({ field, fieldState }) => (
                  <Password
                    feedback
                    id={field.name}
                    {...field}
                    toggleMask
                    className={classNames({
                      'p-invalid': fieldState.error,
                    })}
                  />
                )}
              />
              <label htmlFor='password' className={classNames({ 'p-error': errors.password })}>
                Password
              </label>
            </span>
            {getFormErrorMessage('password')}
            <p className={styles.authFormInputNote}>{AUTH_I18.passwordConstraint}</p>
          </div>

          <Button type='submit' mode='primary' className={styles.authFormButton}>
            {PRIMARY_BUTTON_TEXT.signup}
          </Button>
        </form>

        <div className={styles.authFormLinkContainer}>
          <p className={styles.authFormLinkText}>
            {AUTH_I18.alreadyHaveAcc}{' '}
            <Link className={styles.authFormLink} to={PAGES_PATHS.LOG_IN}>
              {AUTH_I18.titleLogin}
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
