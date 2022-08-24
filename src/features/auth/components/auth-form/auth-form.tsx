import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'

import styles from './auth-form.module.scss'
import { Link } from 'react-router-dom'

interface Props {
  logIn: ({ email, password }: { email: string; password: string }) => void
  type: 'login' | 'signup'
}

export const AuthForm = ({ type, logIn }: Props) => {
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  return (
    <div className={styles.authForm}>
      <div className={styles.authFormInputContainer}>
        <label className={styles.authFormLabel}>Email</label>
        <InputText
          className={styles.authFormField}
          value={formValues.email}
          onChange={(e) =>
            setFormValues((values) => {
              return { ...values, email: e.target.value }
            })
          }
        />
      </div>

      <div className={styles.authFormInputContainer}>
        <label className={styles.authFormLabel}>Password</label>
        <Password
          className={styles.authFormField}
          value={formValues.password}
          onChange={(e) =>
            setFormValues((values) => {
              return { ...values, password: e.target.value }
            })
          }
          toggleMask
        />
        <p className={styles.authFormInputNote}>At least 8 characters and one number.</p>
      </div>
      <Button className={styles.authFormButton} label='Sign up' onClick={() => logIn(formValues)} />
      <div className={styles.authFormLinkContainer}>
        <p className={styles.authFormLinkText}>
          Already have an account?{' '}
          <Link className={styles.authFormLink} to='/login'>
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
