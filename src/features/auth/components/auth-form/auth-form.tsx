import { useState } from 'react'
import { InputText } from 'primereact/inputtext'

interface Props {
  formValues: { email: string; password: string }
  setFormValues: (value: string, field: 'email' | 'password') => void
}

export const AuthForm = ({ formValues, setFormValues }: Props) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(false)

  return (
    <>
      <h5>Email</h5>
      <InputText value={formValues.email} onChange={(e) => setFormValues(e.target.value, 'email')} />
      <h5>Password</h5>
      <i className='pi pi-spin pi-spinner' onClick={() => setIsPasswordHidden((state) => !state)} />
      <InputText
        type={isPasswordHidden ? 'password' : 'text'}
        value={formValues.email}
        onChange={(e) => setFormValues(e.target.value, 'password')}
      />
    </>
  )
}
