import { useForm, Controller } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'

import classNames from 'classnames'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'

import { ErrorCard } from 'common/components/ErrorCard/error-card'
import { PAGES_PATHS } from 'common/constants/constants'

import { ResetPasswordDetails } from 'features/auth'
import { AuthHeading } from 'features/auth/components/auth-heading/auth-heading'
import { PRIMARY_RESET_BUTTON_TEXT, AUTH_I18 } from 'features/auth/constants/auth-i18-constants'

import styles from './auth-reset-form.module.scss'
interface Props {
  resetPassword: ({ email, password, oobCode }: ResetPasswordDetails) => void
  sendResetPasswordRequest: ({ email }: { email: string }) => void
  formErrorText: string | null
}

export const ResetPasswdForm = ({ sendResetPasswordRequest, resetPassword, formErrorText }: Props) => {
  const [searchParams] = useSearchParams()

  const mode = !searchParams.get('oobCode') ? 'SEND_LINK' : 'CHANGE_PWD'

  const defaultValues = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues })

  const onSubmit = (data: any) => {
    if (mode === 'CHANGE_PWD') {
      resetPassword({ ...data, oobCode: searchParams.get('oobCode') })
      reset()
      return
    }
    sendResetPasswordRequest(data)
  }

  const getFormErrorMessage = (name: 'email' | 'password' | 'confirmPassword') => {
    return errors[name] && <small className='p-error'>{errors[name]?.message}</small>
  }

  return (
    <>
      <AuthHeading title={AUTH_I18.RESET_PAGE_TITLE} subtitle={AUTH_I18.RESET_PAGE_SUBTITLE} />
      {formErrorText && <ErrorCard text={formErrorText} />}

      <div className={styles.resetPasswdForm}>
        <form onSubmit={handleSubmit(onSubmit)} className='p-fluid'>
          {mode === 'SEND_LINK' && (
            <div className={styles.resetPasswdField}>
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
                        'p-invalid': fieldState.error,
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
          )}
          {mode === 'CHANGE_PWD' && (
            <>
              <div className={styles.resetPasswdField}>
                <span className='p-float-label p-input-icon-right'>
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

                  <label htmlFor='password' className={classNames({ 'p-error': !!errors.email })}>
                    {AUTH_I18.PASSWORD}
                  </label>
                </span>
                {getFormErrorMessage('password')}
              </div>
              <div className={styles.resetPasswdField}>
                <span className='p-float-label p-input-icon-right'>
                  <Controller
                    name='confirmPassword'
                    control={control}
                    rules={{ required: AUTH_I18.REQUIRED_PASSWORD_ERROR }}
                    render={({ field, fieldState }) => (
                      <Password
                        feedback={false}
                        id={field.name}
                        toggleMask
                        {...field}
                        className={classNames({
                          'p-invalid': fieldState.error,
                        })}
                      />
                    )}
                  />

                  <label htmlFor='confirmPassword' className={classNames({ 'p-error': !!errors.email })}>
                    {AUTH_I18.CONFIRM_PASSWORD}
                  </label>
                </span>
                {getFormErrorMessage('confirmPassword')}
              </div>
            </>
          )}

          <Button type='submit' className={styles.authFormButton} label={PRIMARY_RESET_BUTTON_TEXT[mode]} />

          <p className={styles.resetPasswdLink}>
            <Link className={styles.resetPasswdLink} to={PAGES_PATHS.LOG_IN}>
              {AUTH_I18.BACK_TO_LOGIN}
            </Link>
          </p>
        </form>
      </div>
    </>
  )
}
