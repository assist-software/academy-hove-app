import { Formik, Form } from 'formik'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { AuthPasswordValidation } from 'features/auth/schemas/auth-validation'
import { AUTH_LABELS } from 'features/auth/constants/auth-constants'
import { AUTH_PLACEHOLDER } from 'features/auth/constants/auth-constants'
import { AUTH_TEXT } from 'features/auth/constants/auth-constants'
import { AUTH_BUTTON_TEXT } from 'features/auth/constants/auth-constants'
import { authResetPassword } from '../../services/auth-api-services'
import { useLocation } from 'react-router-dom'
import { IAuth } from 'features/auth/models/IAuth'

import styles from '../../styles/auth-login.module.scss'

export const AuthResetPass = () => {
  const onSubmit = ({ password, oobCode }: Partial<IAuth>): void => {
    console.log(password)
    console.log(oobCode)
    authResetPassword(password as string, query.get('oobCode') as string)
  }
  function useQuery() {
    const location = useLocation()
    return new URLSearchParams(location.search)
  }
  const query = useQuery()
  console.log(query.get('oobCode'), 'aaa')

  const initialValues: Partial<IAuth> = { password: '' }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={AuthPasswordValidation()}>
      {({ errors, touched, values, setFieldValue }) => {
        return (
          <Form className={styles.authLoginContainer}>
            <div className={styles.authInputText}>
              <label style={{ marginBottom: '10px' }}>{AUTH_LABELS.PASSWORD}</label>
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
            <div className={styles.authInputText}>
              <label style={{ marginBottom: '10px' }}>{AUTH_LABELS.CONFIRM_PASSWORD}</label>
              <Password
                className={styles.authFormPassword}
                placeholder={AUTH_PLACEHOLDER.CONFIRM_PASSWORD_PLACEHOLDER}
                value={values.password}
                onChange={(e) => setFieldValue('password', e.target.value)}
                toggleMask={true}
              />
              <span className={styles.errorMessage}>{touched.password && errors?.password}</span>
            </div>
            <div className={styles.authLoginButtonContainer}>
              <div className={styles.authLoginButtonContainerLogin}>
                <Button
                  label={AUTH_BUTTON_TEXT.AUTH_RESET_PASS_BUTTON_TEXT}
                  className={styles.authLoginBtn}
                  type='submit'
                />
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
