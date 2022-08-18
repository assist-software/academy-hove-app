import { useState } from 'react'
import { InputText } from 'primereact/inputtext'

import styles from './auth-form.module.scss'
interface Props {
  formValues: { email: string; password: string }
  setFormValues: (value: string, field: 'email' | 'password') => void
}

export const AuthForm = ({ formValues, setFormValues }: Props) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(false)

  return (
    <div className={styles.authForm}>
      <label className={styles.authFormLabel}>Email</label>
      <InputText
        className={styles.authFormField}
        value={formValues.email}
        onChange={(e) => setFormValues(e.target.value, 'email')}
      />
      <label className={styles.authFormLabel}>Password</label>
      <p onClick={() => setIsPasswordHidden((state) => !state)}>eye</p>
      <InputText
        className={styles.authFormField}
        type={isPasswordHidden ? 'password' : 'text'}
        value={formValues.password}
        onChange={(e) => setFormValues(e.target.value, 'password')}
      />
    </div>
  )
}
