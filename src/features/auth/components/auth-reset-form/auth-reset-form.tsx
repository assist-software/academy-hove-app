import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button'
import { Password } from 'primereact/password'
import { InputText } from 'primereact/inputtext'
import { ResetPasswordDetails } from 'features/auth'
import { useForm, Controller } from 'react-hook-form'
import { PRIMARY_RESET_BUTTON_TEXT, AUTH_I18 } from 'features/auth/constants/auth-i18-constants'

import { useQuery } from 'common/hooks/useQuerry'
import { PAGES_PATHS } from 'common/constants/constants'

import ASSISTLogo from 'common/assets/logo-assist.svg'

import styles from './auth-reset-form.module.scss'
interface Props {
  resetPassword: ({ email, password, oobCode }: ResetPasswordDetails) => void
  sendResetPasswordRequest: ({ email }: { email: string }) => void
}

export const ResetPasswdForm = ({ sendResetPasswordRequest, resetPassword }: Props) => {
  let querry = useQuery()

  const mode = !querry.get('oobCode') ? 'sendLink' : 'changePwd'

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
    if (mode === 'changePwd') {
      resetPassword({ ...data, oobCode: querry.get('oobCode') })
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
      <div className={styles.resetPasswdHeader}>
        <img className={styles.resetPasswdASSISTLogo} alt='ASSIST Logo' src={ASSISTLogo} />
        <h1 className={styles.resetPasswdTitle}>{AUTH_I18.resetPageTitle}</h1>
        <h3 className={styles.resetPasswdSubitle}>{AUTH_I18.resetPageSubtitle}</h3>
      </div>

      <div className={styles.resetPasswdForm}>
        <form onSubmit={handleSubmit(onSubmit)} className='p-fluid'>
          {mode === 'sendLink' && (
            <div className={styles.resetPasswdField}>
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
          )}
          {mode === 'changePwd' && (
            <>
              <div className={styles.resetPasswdField}>
                <span className='p-float-label p-input-icon-right'>
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

                  <label htmlFor='password' className={classNames({ 'p-error': !!errors.email })}>
                    {AUTH_I18.password}
                  </label>
                </span>
                {getFormErrorMessage('password')}
              </div>
              <div className={styles.resetPasswdField}>
                <span className='p-float-label p-input-icon-right'>
                  <Controller
                    name='confirmPassword'
                    control={control}
                    rules={{ required: AUTH_I18.requiredPasswordError }}
                    render={({ field, fieldState }) => (
                      <Password
                        feedback={false}
                        id={field.name}
                        toggleMask
                        {...field}
                        className={classNames({
                          'p-invalid': fieldState.invalid,
                        })}
                      />
                    )}
                  />

                  <label htmlFor='confirmPassword' className={classNames({ 'p-error': !!errors.email })}>
                    {AUTH_I18.confirmPassword}
                  </label>
                </span>
                {getFormErrorMessage('confirmPassword')}
              </div>
            </>
          )}

          <Button type='submit' className={styles.authFormButton} label={PRIMARY_RESET_BUTTON_TEXT[mode]} />

          <p className={styles.resetPasswdLink}>
            <Link className={styles.resetPasswdLink} to={PAGES_PATHS.LOG_IN}>
              {AUTH_I18.backToLogin}
            </Link>
          </p>
        </form>
      </div>
    </>
  )
}
