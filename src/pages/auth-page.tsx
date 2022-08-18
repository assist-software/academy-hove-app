import { observer } from 'mobx-react-lite'
import { AuthForm } from '../features/auth/components/auth-form/auth-form'
import { useStore } from '../store'

export const AuthPage = observer(() => {
  const { authStore } = useStore()
  const { formValues, setFormValues } = authStore

  return (
    <div>
      <AuthForm formValues={formValues} setFormValues={setFormValues} />
    </div>
  )
})
