import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { Link } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constants'
import googleImg from 'common/assets/google.svg'
import styles from '../auth-login/auth-login.module.scss'

interface IForm {
  email: ''
  password: ''
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('This field is mandatory'),
  password: Yup.string()
    .required('No password provided.')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Invalid password'),
})

export const AuthRegister = () => {
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={() => {}} validationSchema={validationSchema}>
      {({ errors, touched, values, setFieldValue }) => {
        return (
          <Form className={styles.authLoginContainer}>
            <div className={styles.authGoogleLoginButtonContainer}>
              <Button label='Sign up with Google' icon={googleImg} className='p-button-outlined' />
            </div>
            <div className={styles.orContainer}>
              <span className={styles.orSpan}>
                <div className={styles.hll}></div>
                OR
                <div className={styles.hlr}></div>
              </span>
            </div>
            <div className={styles.authInputText}>
              <label style={{ marginBottom: '5px' }}>Email</label>
              <InputText value={values.email} onChange={(e) => setFieldValue('email', e.target.value)} />
              <span className={styles.errorMessage}>{touched.email && errors?.email}</span>
            </div>

            <div className={styles.authInputText}>
              <label style={{ marginBottom: '5px' }}>Password</label>
              <Password
                className={styles.formPassword}
                value={values.password}
                onChange={(e) => setFieldValue('password', e.target.value)}
                toggleMask={true}
              />
              <div>At least 8 characters and one number.</div>
              <span className={styles.errorMessage}>{touched.password && errors?.password}</span>
            </div>
            <div className={styles.authLoginButtonContainer}>
              <div className={styles.authLoginButtonContainerLogin}>
                <Button label='Log in' className={styles.loginBtn} />
              </div>
            </div>
            <div className={styles.footerText}>
              <div className={styles.authTextColor}>Already have an account?</div>
              <Link className={styles.linkButtonStyle} to={PAGES_PATHS.LOG_IN}>
                Log in
              </Link>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
