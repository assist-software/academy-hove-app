import { useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'
import { Link } from 'react-router-dom'
import googleImg from 'common/assets/google.svg'
import { PAGES_PATHS } from 'common/constants/constants'
import styles from './auth-login.module.scss'

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

export const AuthLogin = () => {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={() => {}} validationSchema={validationSchema}>
      {({ errors, touched, values, setFieldValue }) => {
        return (
          <Form className={styles.authLoginContainer}>
            <div className={styles.authInputText}>
              <label style={{ marginBottom: '10px' }}>Email</label>
              <InputText value={values.email} onChange={(e) => setFieldValue('email', e.target.value)} />
              <span className={styles.errorMessage}>{touched.email && errors?.email}</span>
            </div>

            <div className={styles.authInputText}>
              <label style={{ marginBottom: '10px' }}>Password</label>
              <Password
                className={styles.formPassword}
                value={values.password}
                onChange={(e) => setFieldValue('password', e.target.value)}
                toggleMask={true}
              />
              <span className={styles.errorMessage}>{touched.password && errors?.password}</span>
            </div>

            <div className={styles.authLoginCheckboxContainer}>
              <div>
                <Checkbox onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>
                <label className={styles.authRememberColor} style={{ marginLeft: '5px' }}>
                  Remember me
                </label>
              </div>
              <Link className={styles.linkButtonStyle} to={PAGES_PATHS.FORGOT_PASSWORD}>
                Forgot your password?
              </Link>
            </div>

            <div className={styles.authLoginButtonContainer}>
              <div className={styles.authLoginButtonContainerLogin}>
                <Button label='Log in' className={styles.loginBtn} />
              </div>

              <Button label='Login with Google' className='p-button-outlined' />
            </div>
            <div className={styles.footerText}>
              <div className={styles.authTextColor}>Don't have an account?</div>
              <Link className={styles.linkButtonStyle} to={PAGES_PATHS.SIGN_UP}>
                Sign in
              </Link>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
