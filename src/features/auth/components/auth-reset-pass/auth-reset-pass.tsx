import { Formik, Form } from 'formik'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { AuthValidation } from 'features/auth/schemas/auth-validation'
import { AUTH_CONSTANTS } from 'features/auth/constants/auth-constants'
import styles from '../../styles/auth-login.module.scss'

export const AuthResetPass = () => {
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={() => {}} validationSchema={AuthValidation()}>
      {({ errors, touched, values, setFieldValue }) => {
        return (
          <Form className={styles.authLoginContainer}>
            <div className={styles.authInputText}>
              <label style={{ marginBottom: '10px' }}>{AUTH_CONSTANTS.AUTH_LABELS.PASSWORD}</label>
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
            <div className={styles.authInputText}>
              <label style={{ marginBottom: '10px' }}>{AUTH_CONSTANTS.AUTH_LABELS.CONFIRM_PASSWORD}</label>
              <Password
                className={styles.authFormPassword}
                placeholder={AUTH_CONSTANTS.AUTH_PLACEHOLDER.CONFIRM_PASSWORD_PLACEHOLDER}
                value={values.password}
                onChange={(e) => setFieldValue('password', e.target.value)}
                toggleMask={true}
              />
              <span className={styles.errorMessage}>{touched.password && errors?.password}</span>
            </div>
            <div className={styles.authLoginButtonContainer}>
              <div className={styles.authLoginButtonContainerLogin}>
                <Button label='Confirm password' className={styles.authLoginBtn} />
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
