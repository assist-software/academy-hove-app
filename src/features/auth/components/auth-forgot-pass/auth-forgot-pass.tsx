import { useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Link } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constants'
import styles from '../auth-login/auth-login.module.scss'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('This field is mandatory'),
  password: Yup.string()
    .required('No password provided.')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Invalid password'),
})

export const AuthForgotPass = () => {
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
            <div className={styles.authLoginButtonContainer}>
              <div className={styles.authLoginButtonContainerLogin}>
                <Button label='Send reset link' className={styles.loginBtn} />
              </div>
            </div>
            <div>
              <Link className={styles.linkButtonStyle} to={PAGES_PATHS.LOG_IN}>
                Back to Log in
              </Link>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
