import { Formik, Form } from 'formik'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import { AuthValidation } from 'features/auth/schemas/auth-validation'
import { PAGES_PATHS } from 'common/constants/constants'
import { AUTH_CONSTANTS } from 'features/auth/constants/auth-constants'
import styles from '../../styles/auth-login.module.scss'

export const AuthForgotPass = () => {
  const navigate = useNavigate()
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={() => {}} validationSchema={AuthValidation()}>
      {({ errors, touched, values, setFieldValue }) => {
        return (
          <Form className={styles.authLoginContainer}>
            <div className={styles.authInputText}>
              <label style={{ marginBottom: '10px' }}>{AUTH_CONSTANTS.AUTH_LABELS.EMAIL}</label>
              <InputText
                value={values.email}
                placeholder={AUTH_CONSTANTS.AUTH_PLACEHOLDER.EMAIL_PLACEHOLDER}
                onChange={(e) => setFieldValue('email', e.target.value)}
              />
              <span className={styles.errorMessage}>{touched.email && errors?.email}</span>
            </div>
            <div className={styles.authLoginButtonContainer}>
              <div className={styles.authLoginButtonContainerLogin}>
                <Button label='Send reset link' className={styles.authLoginBtn} />
              </div>
            </div>
            <div>
              <p className={styles.authLinkButtonStyle} onClick={() => navigate(PAGES_PATHS.LOG_IN)}>
                {AUTH_CONSTANTS.AUTH_TEXT.BACK_LOGIN}
              </p>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
