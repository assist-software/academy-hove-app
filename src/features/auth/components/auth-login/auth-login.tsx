import { useState } from 'react'
import { Formik, Form } from 'formik'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import { AuthValidation } from 'features/auth/schemas/auth-validation'
import { PAGES_PATHS } from 'common/constants/constants'
import { AUTH_CONSTANTS } from 'features/auth/constants/auth-constants'
import styles from '../../styles/auth-login.module.scss'

export const AuthLogin = () => {
  const [checked, setChecked] = useState<boolean>(false)
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

            <div className={styles.authInputText}>
              <label style={{ marginBottom: '10px' }}>{AUTH_CONSTANTS.AUTH_LABELS.PASSWORD}</label>
              <Password
                className={styles.authFormPassword}
                placeholder={AUTH_CONSTANTS.AUTH_PLACEHOLDER.PASSWORD_PLACEHOLDER}
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
                  {AUTH_CONSTANTS.AUTH_TEXT.REMEMBER_ME}
                </label>
              </div>
              <p className={styles.authLinkButtonStyle} onClick={() => navigate(PAGES_PATHS.FORGOT_PASSWORD)}>
                {AUTH_CONSTANTS.AUTH_TEXT.FORGOT_PASS}
              </p>
            </div>

            <div className={styles.authLoginButtonContainer}>
              <div className={styles.authLoginButtonContainerLogin}>
                <Button label='Log in' className={styles.authLoginBtn} />
              </div>

              <Button label='Login with Google' className='p-button-outlined' />
            </div>
            <div className={styles.authFooterText}>
              <div className={styles.authTextColor}>{AUTH_CONSTANTS.AUTH_TEXT.NO_ACC}</div>
              <p className={styles.authLinkButtonStyle} onClick={() => navigate(PAGES_PATHS.SIGN_UP)}>
                {AUTH_CONSTANTS.AUTH_TEXT.SIGN_UP}
              </p>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
