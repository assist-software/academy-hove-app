import { useState } from 'react'
import { InputText } from 'primereact/inputtext'

import styles from './auth-form.module.scss'

interface Props {
  formValues: { email: string; password: string }
  setFormValues: (value: string, field: 'email' | 'password') => void
  type: 'login' | 'signup'
}

export const AuthForm = ({ formValues, setFormValues, type }: Props) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(false)

  return (
    <div className={styles.authForm}>
      <div className={styles.authFormInputContainer}>
        <label className={styles.authFormLabel}>Email</label>
        <InputText
          className={styles.authFormField}
          value={formValues.email}
          onChange={(e) => setFormValues(e.target.value, 'email')}
        />
      </div>

      <div className={styles.authFormInputContainer}>
        <label className={styles.authFormLabel}>Password</label>
        <InputText
          className={styles.authFormField}
          type={isPasswordHidden ? 'password' : 'text'}
          value={formValues.password}
          onChange={(e) => setFormValues(e.target.value, 'password')}
        />
      </div>

      <p onClick={() => setIsPasswordHidden((state) => !state)}>eye</p>
    </div>
  )
}
