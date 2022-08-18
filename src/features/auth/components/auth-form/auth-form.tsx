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
      <h5>Email</h5>
      <InputText value={formValues.email} onChange={(e) => setFormValues(e.target.value, 'email')} />
      <h5>Password</h5>
      <p onClick={() => setIsPasswordHidden((state) => !state)}>eye</p>
      <InputText
        type={isPasswordHidden ? 'password' : 'text'}
        value={formValues.password}
        onChange={(e) => setFormValues(e.target.value, 'password')}
      />
    </div>
  )
}
