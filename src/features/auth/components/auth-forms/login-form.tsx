import { useForm, Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'

import classNames from 'classnames'
import { Checkbox } from 'primereact/checkbox'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { useStore } from 'store/store'

import googleLogo from 'common/assets/google.svg'
import { Button } from 'common/components/Button/Button'
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
      <AuthHeading title={AUTH_PAGE_TITLES.LOGIN} subtitle={AUTH_PAGE_SUBTITLES.LOGIN} />
      {formErrorText && <ErrorCard text={formErrorText} />}

      <div className={styles.authForm}>
        <form onSubmit={handleSubmit(onSubmit)} className='p-fluid'>
          <div className={styles.authFormField}>
            <span className='p-float-label p-input-icon-right'>
              <Controller
                name='email'
                control={control}
                rules={{
                  required: AUTH_I18.REQUIRED_EMAIL_ERROR,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: AUTH_I18.INVALID_EMAIL_ERROR,
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
                rules={{ required: AUTH_I18.REQUIRED_PASSWORD_ERROR }}
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
            <p className={styles.authFormInputNote}>{AUTH_I18.PASSWORD_CONSTRAINT}</p>
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
                {AUTH_I18.REMEMBER_ME_CHECKBOX_LABEL}
              </label>
            </div>
            <Link className={styles.authFormForgotPwd} to='/reset-password'>
              {AUTH_I18.FORGOT_PASSWORD_TEXT}
            </Link>
          </div>

          <Button type='submit' mode='primary' className={styles.authFormButton}>
            {PRIMARY_BUTTON_TEXT.LOGIN}
          </Button>
        </form>

        <Button
          onClick={() => {
            logInWithGoogle()
          }}
          icon={<img alt='Google Icon' src={googleLogo} />}
          mode='secondary'
          className={styles.authFormLoginWithGoogle}>
          {AUTH_I18.LOGIN_WITH_GOOGLE_BUTTON}
        </Button>

        <div className={styles.authFormLinkContainer}>
          <p className={styles.authFormLinkText}>
            {AUTH_I18.DONT_HAVE_AN_ACCOUNT}{' '}
            <Link className={styles.authFormLink} to={PAGES_PATHS.SIGN_UP}>
              {AUTH_I18.PRIMARY_BUTTON_SIGNUP}
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
