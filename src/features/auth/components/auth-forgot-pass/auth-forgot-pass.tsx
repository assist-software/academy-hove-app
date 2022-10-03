import { Formik, Form } from 'formik'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import { AuthEmailValidation } from 'features/auth/schemas/auth-validation'
import { PAGES_PATHS } from 'common/constants/constants'
import { AUTH_LABELS } from 'features/auth/constants/auth-constants'
import { AUTH_PLACEHOLDER } from 'features/auth/constants/auth-constants'
import { AUTH_TEXT } from 'features/auth/constants/auth-constants'
import { AUTH_BUTTON_TEXT } from 'features/auth/constants/auth-constants'
import styles from '../../styles/auth-login.module.scss'
import { IAuth } from 'features/auth/models/IAuth'
import { authSendPasswordReset } from '../../services/auth-api-services'

export const AuthForgotPass = () => {
  const onSubmit = ({ email }: Partial<IAuth>): void => {
    authSendPasswordReset(email as string)
  }
  const navigate = useNavigate()
  const initialValues: Partial<IAuth> = { email: '' }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={AuthEmailValidation()}>
      {({ errors, touched, values, setFieldValue }) => {
        return (
          <Form className={styles.authLoginContainer}>
            <div className={styles.authInputText}>
              <label style={{ marginBottom: '10px' }}>{AUTH_LABELS.EMAIL}</label>
              <InputText
                value={values.email}
                placeholder={AUTH_PLACEHOLDER.EMAIL_PLACEHOLDER}
                onChange={(e) => setFieldValue('email', e.target.value)}
              />
              <span className={styles.errorMessage}>{touched.email && errors?.email}</span>
            </div>
            <div className={styles.authLoginButtonContainer}>
              <div className={styles.authLoginButtonContainerLogin}>
                <Button
                  label={AUTH_BUTTON_TEXT.AUTH_FORGOT_PASS_BUTTON_TEXT}
                  className={styles.authLoginBtn}
                  type='submit'
                />
              </div>
            </div>
            <div>
              <p className={styles.authLinkButtonStyle} onClick={() => navigate(PAGES_PATHS.LOG_IN)}>
                {AUTH_TEXT.BACK_LOGIN}
              </p>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
