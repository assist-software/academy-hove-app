import { useForm, Controller } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { Checkbox } from 'primereact/checkbox'
import { Password } from 'primereact/password'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { PAGES_PATHS } from 'common/constants/constants'
import { Button } from 'common/components/Button/Button'
import googleLogo from 'common/assets/google.svg'

import {
  AUTH_PAGE_SUBTITLES,
  AUTH_PAGE_TITLES,
  PRIMARY_BUTTON_TEXT,
  AUTH_I18,
} from 'features/auth/constants/auth-i18-constants'
import { AuthHeading } from '../auth-heading/auth-heading'
import { ErrorCard } from 'common/components/ErrorCard/error-card'

import { useStore } from 'store/store'

import styles from './auth-form.module.scss'

export const LoginForm = () => {
  const { authStore } = useStore()
  const { logIn, formErrorText, logInWithGoogle } = authStore

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
    logIn(data)

    reset()
  }

  const getFormErrorMessage = (name: 'email' | 'password') => {
    return errors[name] && <small className='p-error'>{errors[name]?.message}</small>
  }

  return (
    <>
      <AuthHeading title={AUTH_PAGE_TITLES.login} subtitle={AUTH_PAGE_SUBTITLES.login} />
      {formErrorText && <ErrorCard text={formErrorText} />}

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

          <div className={styles.authFormLoginExtra}>
            <div>
              <Controller
                name='rememberMe'
                control={control}
                render={({ field }) => (
                  <Checkbox inputId={field.name} onChange={(e) => field.onChange(e.checked)} checked={field.value} />
                )}
              />
              <label className={styles.authFormRememberText} htmlFor='rememberMe'>
                {AUTH_I18.rememberMeCheckboxLabel}
              </label>
            </div>
            <Link className={styles.authFormForgotPwd} to='/reset-password'>
              {AUTH_I18.forgotPasswordText}
            </Link>
          </div>

          <Button type='submit' mode='primary' className={styles.authFormButton}>
            {PRIMARY_BUTTON_TEXT.login}
          </Button>
        </form>

        <Button
          onClick={() => {
            logInWithGoogle()
          }}
          icon={<img alt='Google Icon' src={googleLogo} />}
          mode='secondary'
          className={styles.authFormLoginWithGoogle}>
          {AUTH_I18.loginWithGoogleButton}
        </Button>

        <div className={styles.authFormLinkContainer}>
          <p className={styles.authFormLinkText}>
            {AUTH_I18.dontHaveAnAccount}{' '}
            <Link className={styles.authFormLink} to={PAGES_PATHS.SIGN_UP}>
              {AUTH_I18.primaryButtonSignup}
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
