import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import styles from '../auth-login/auth-login.module.scss'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('This field is mandatory'),
  password: Yup.string()
    .required('No password provided.')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Invalid password'),
})

export const AuthResetPass = () => {
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={() => {}} validationSchema={validationSchema}>
      {({ errors, touched, values, setFieldValue }) => {
        return (
          <Form className={styles.authLoginContainer}>
            <div className={styles.authInputText}>
              <label style={{ marginBottom: '10px' }}>Password</label>
              <Password
                className={styles.formPassword}
                value={values.password}
                onChange={(e) => setFieldValue('password', e.target.value)}
                toggleMask={true}
              />
              <div>At least 8 characters and one number.</div>
              <span className={styles.errorMessage}>{touched.password && errors?.password}</span>
            </div>
            <div className={styles.authInputText}>
              <label style={{ marginBottom: '10px' }}>Confirm password</label>
              <Password
                className={styles.formPassword}
                value={values.password}
                onChange={(e) => setFieldValue('password', e.target.value)}
                toggleMask={true}
              />
              <span className={styles.errorMessage}>{touched.password && errors?.password}</span>
            </div>
            <div className={styles.authLoginButtonContainer}>
              <div className={styles.authLoginButtonContainerLogin}>
                <Button label='Confirm password' className={styles.loginBtn} />
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
