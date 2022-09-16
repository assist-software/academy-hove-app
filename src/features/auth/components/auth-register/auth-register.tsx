import { Formik, Form } from 'formik'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constants'
import { AUTH_CONSTANTS } from 'features/auth/constants/auth-constants'
import { AuthValidation } from 'features/auth/schemas/auth-validation'
import styles from '../../styles/auth-login.module.scss'

export const AuthRegister = () => {
  const navigate = useNavigate()
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={() => {}} validationSchema={AuthValidation()}>
      {({ errors, touched, values, setFieldValue }) => {
        return (
          <Form className={styles.authLoginContainer}>
            <div className={styles.authGoogleLoginButtonContainer}>
              <Button label='Sign up with Google' className='p-button-outlined' />
            </div>
            <div className={styles.authOrContainer}>
              <span className={styles.authOrSpan}>
                <div className={styles.authHorizontalLineLeft}></div>
                OR
                <div className={styles.authHorizontalLineRight}></div>
              </span>
            </div>
            <div className={styles.authInputText}>
              <label style={{ marginBottom: '5px' }}>{AUTH_CONSTANTS.AUTH_LABELS.EMAIL}</label>
              <InputText
                value={values.email}
                placeholder={AUTH_CONSTANTS.AUTH_PLACEHOLDER.EMAIL_PLACEHOLDER}
                onChange={(e) => setFieldValue('email', e.target.value)}
              />
              <span className={styles.errorMessage}>{touched.email && errors?.email}</span>
            </div>

            <div className={styles.authInputText}>
              <label style={{ marginBottom: '5px' }}>{AUTH_CONSTANTS.AUTH_LABELS.PASSWORD}</label>
              <Password
                className={styles.authFormPassword}
                placeholder={AUTH_CONSTANTS.AUTH_PLACEHOLDER.PASSWORD_PLACEHOLDER}
                value={values.password}
                onChange={(e) => setFieldValue('password', e.target.value)}
                toggleMask={true}
              />
              <div>{AUTH_CONSTANTS.AUTH_TEXT.PASS_VALIDATION_TEXT}</div>
              <span className={styles.errorMessage}>{touched.password && errors?.password}</span>
            </div>
            <div className={styles.authLoginButtonContainer}>
              <div className={styles.authLoginButtonContainerLogin}>
                <Button label='Log in' className={styles.authLoginBtn} />
              </div>
            </div>
            <div className={styles.authFooterText}>
              <div className={styles.authTextColor}>{AUTH_CONSTANTS.AUTH_TEXT.HAVE_ACC}</div>
              <p className={styles.authLinkButtonStyle} onClick={() => navigate(PAGES_PATHS.LOG_IN)}>
                {AUTH_CONSTANTS.AUTH_TEXT.LOG_IN}
              </p>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
