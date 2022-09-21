import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import { AuthValidation } from 'features/auth/schemas/auth-validation'
import { PAGES_PATHS } from 'common/constants/constants'
import { AUTH_BUTTON_TEXT } from 'features/auth/constants/auth-constants'
import { AUTH_LABELS } from 'features/auth/constants/auth-constants'
import { AUTH_PLACEHOLDER } from 'features/auth/constants/auth-constants'
import { AUTH_TEXT } from 'features/auth/constants/auth-constants'
import { authLogin, authSigninWithGoogle } from '../../services/auth-api-services'
import { onAuthStateChanged } from 'firebase/auth'
import { IAuth } from 'features/auth/models/IAuth'
import styles from '../../styles/auth-login.module.scss'
import GoogleIcon from 'common/assets/google.svg'
import { auth } from '../../../../firebase/firebase-config'
import { HANDLE_SET_USER } from 'features/auth/state/reducers/auth-slice'
import { useAppDispatch, useAppSelector } from 'state'

export const AuthLogin = () => {
  const [checked, setChecked] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth)

  onAuthStateChanged(auth, (currentUser: any) => {
    debugger

    if (currentUser) {
      dispatch(HANDLE_SET_USER({ ...currentUser, isLoggedIn: true }))
    }
  })

  const navigate = useNavigate()
  const onSubmit = (values: IAuth): void => {
    authLogin(values.email, values.password)
  }
  useEffect(() => {
    if (user.isLoggedIn) {
      return navigate('/')
    }
  }, [user])

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={AuthValidation()}>
      {({ errors, touched, values, setFieldValue }) => {
        return (
          <>
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

              <div className={styles.authInputText}>
                <label style={{ marginBottom: '10px' }}>{AUTH_LABELS.PASSWORD}</label>
                <Password
                  className={styles.authFormPassword}
                  placeholder={AUTH_PLACEHOLDER.PASSWORD_PLACEHOLDER}
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
                    {AUTH_TEXT.REMEMBER_ME}
                  </label>
                </div>
                <p className={styles.authLinkButtonStyle} onClick={() => navigate(PAGES_PATHS.FORGOT_PASSWORD)}>
                  {AUTH_TEXT.FORGOT_PASS}
                </p>
              </div>

              <div className={styles.authLoginButtonContainer}>
                <div className={styles.authLoginButtonContainerLogin}>
                  <Button
                    label={AUTH_BUTTON_TEXT.AUTH_LOGIN_BUTTON_TEXT}
                    className={styles.authLoginBtn}
                    type='submit'
                  />
                </div>
              </div>
            </Form>
            <div style={{ textAlign: 'center' }}>
              <Button
                label={AUTH_BUTTON_TEXT.AUTH_LOGIN_GOOGLE_BUTTON_TEXT}
                className='p-button-outlined'
                onClick={authSigninWithGoogle}
                style={{ width: '50%' }}
                icon={<img src={GoogleIcon} alt='Google' />}
              />
            </div>
            <div className={styles.authFooterText} style={{ margin: '0 auto' }}>
              <div className={styles.authTextColor}>{AUTH_TEXT.NO_ACC}</div>
              <p className={styles.authLinkButtonStyle} onClick={() => navigate(PAGES_PATHS.SIGN_UP)}>
                {AUTH_TEXT.SIGN_UP}
              </p>
            </div>
          </>
        )
      }}
    </Formik>
  )
}
