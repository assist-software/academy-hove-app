import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'

import styles from './auth-form.module.scss'

interface Props {
  logIn: ({ email, password }: { email: string; password: string }) => void
  type: 'login' | 'signup'
}

export const AuthForm = ({ type }: Props) => {
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
      </div>
    </div>
  )
}
