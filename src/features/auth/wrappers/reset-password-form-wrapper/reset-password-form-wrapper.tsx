import { useStore } from 'store/store'

import { ResetPasswdForm } from 'features/reset-passwd'

export const ResetPasswordWrapper = () => {
  const { authStore } = useStore()
  const { resetPassword, sendResetPasswordRequest, formErrorText } = authStore

  return (
    <ResetPasswdForm
      formErrorText={formErrorText}
      sendResetPasswordRequest={sendResetPasswordRequest}
      resetPassword={resetPassword}
    />
  )
}
