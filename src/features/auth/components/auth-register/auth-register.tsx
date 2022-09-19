import { Formik, Form } from 'formik'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constants'
import { AUTH_LABELS } from 'features/auth/constants/auth-constants'
import { AuthValidation } from 'features/auth/schemas/auth-validation'
import { AUTH_TEXT } from 'features/auth/constants/auth-constants'
import { AUTH_BUTTON_TEXT } from 'features/auth/constants/auth-constants'
import { AUTH_PLACEHOLDER } from 'features/auth/constants/auth-constants'
import styles from '../../styles/auth-login.module.scss'

export const AuthRegister = () => {
  const navigate = useNavigate()
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={() => {}} validationSchema={AuthValidation()}>
      {({ errors, touched, values, setFieldValue }) => {
        return (
          <Form className={styles.authLoginContainer}>
            <div className={styles.authGoogleLoginButtonContainer}>
              <Button label={AUTH_BUTTON_TEXT.AUTH_REGISTER_GOOGLE_BUTTON_TEXT} className='p-button-outlined' />
            </div>
            <div className={styles.authOrContainer}>
              <span className={styles.authOrSpan}>
                <div className={styles.authHorizontalLineLeft}></div>
                OR
                <div className={styles.authHorizontalLineRight}></div>
              </span>
            </div>
            <div className={styles.authInputText}>
              <label style={{ marginBottom: '5px' }}>{AUTH_LABELS.EMAIL}</label>
              <InputText
                value={values.email}
                placeholder={AUTH_PLACEHOLDER.EMAIL_PLACEHOLDER}
                onChange={(e) => setFieldValue('email', e.target.value)}
              />
              <span className={styles.errorMessage}>{touched.email && errors?.email}</span>
            </div>

            <div className={styles.authInputText}>
              <label style={{ marginBottom: '5px' }}>{AUTH_LABELS.PASSWORD}</label>
              <Password
                className={styles.authFormPassword}
                placeholder={AUTH_PLACEHOLDER.PASSWORD_PLACEHOLDER}
                value={values.password}
                onChange={(e) => setFieldValue('password', e.target.value)}
                toggleMask={true}
              />
              <div>{AUTH_TEXT.PASS_VALIDATION_TEXT}</div>
              <span className={styles.errorMessage}>{touched.password && errors?.password}</span>
            </div>
            <div className={styles.authLoginButtonContainer}>
              <div className={styles.authLoginButtonContainerLogin}>
                <Button label={AUTH_BUTTON_TEXT.AUTH_REGISTER_BUTTON_TEXT} className={styles.authLoginBtn} />
              </div>
            </div>
            <div className={styles.authFooterText}>
              <div className={styles.authTextColor}>{AUTH_TEXT.HAVE_ACC}</div>
              <p className={styles.authLinkButtonStyle} onClick={() => navigate(PAGES_PATHS.LOG_IN)}>
                {AUTH_TEXT.LOG_IN}
              </p>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
