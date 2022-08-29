import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox'
import { useForm, Controller } from 'react-hook-form'

import {
  AUTH_PAGE_SUBTITLES,
  AUTH_PAGE_TITLES,
  PRIMARY_BUTTON_TEXT,
  AUTH_I18,
} from 'features/auth/constants/auth-i18-constants'
import { PAGES_PATHS } from 'common/constants/constants'
import { Divider } from 'common/components/Divider/Divider'
import { AuthPageTypes, UserLogInDetails, UserSignUpDetails } from 'features/auth/models/auth-models'
import { AUTH_PAGE_TYPES } from 'features/auth/constants/auth-constants'

import googleLogo from 'common/assets/google.svg'
import ASSISTLogo from 'common/assets/logo-assist.svg'

import styles from './auth-form.module.scss'

interface Props {
  logIn: ({ email, password, rememberMe }: UserLogInDetails) => void
  signUp: ({ email, password }: UserSignUpDetails) => void
  type: AuthPageTypes
}

export const AuthForm = ({ type, logIn, signUp }: Props) => {
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
    switch (type) {
      case AUTH_PAGE_TYPES.LOGIN:
        return logIn(data)
      case AUTH_PAGE_TYPES.SIGNUP:
        return signUp(data)
    }
    reset()
  }

  const getFormErrorMessage = (name: 'email' | 'password') => {
    return errors[name] && <small className='p-error'>{errors[name]?.message}</small>
  }

  return (
    <>
      <div className={styles.authFormHeader}>
        <img className={styles.authFormASSISTLogo} alt='ASSIST Logo' src={ASSISTLogo} />
        <h1 className={styles.authFormTitle}>{AUTH_PAGE_TITLES[type]}</h1>
        <h3 className={styles.authFormSubitle}>{AUTH_PAGE_SUBTITLES[type]}</h3>
      </div>

      {type === AUTH_PAGE_TYPES.SIGNUP && (
        <>
          <Button
            icon={<img alt='Google Icon' src={googleLogo} />}
            iconPos='left'
            label={AUTH_I18.signtWithGoogleButton}
            className={classNames(styles.authFormSignWithGoogle, 'p-button-outlined')}
          />
          <Divider children={AUTH_I18.dividerText} />
        </>
      )}

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
                      'p-invalid': fieldState.invalid,
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

          {type === AUTH_PAGE_TYPES.LOGIN && (
            <div className={styles.authFormLoginExtra}>
              <div>
                <Controller
                  name='rememberMe'
                  control={control}
                  rules={{ required: true }}
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
          )}

          <Button type='submit' className={styles.authFormButton} label={PRIMARY_BUTTON_TEXT[type]} />
        </form>
        {type === AUTH_PAGE_TYPES.LOGIN && (
          <Button
            icon={<img alt='Google Icon' src={googleLogo} />}
            iconPos='left'
            label={AUTH_I18.loginWithGoogleButton}
            className={classNames('p-button-outlined', styles.authFormLoginWithGoole)}
          />
        )}

        <div className={styles.authFormLinkContainer}>
          {type === AUTH_PAGE_TYPES.SIGNUP ? (
            <p className={styles.authFormLinkText}>
              {AUTH_I18.allreadyHaveAcc}{' '}
              <Link className={styles.authFormLink} to={PAGES_PATHS.LOG_IN}>
                {AUTH_I18.titleLogin}
              </Link>
            </p>
          ) : (
            <p className={styles.authFormLinkText}>
              {AUTH_I18.dontHaveAnAccout}{' '}
              <Link className={styles.authFormLink} to={PAGES_PATHS.SIGN_UP}>
                {AUTH_I18.primaryButtonSignup}
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  )
}
