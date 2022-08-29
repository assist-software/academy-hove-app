import { ResetPasswordDetails } from 'features/auth'

import styles from './reset-passwd-form.module.scss'

interface Props {
  resetPassword: ({ email, password, oobCode }: ResetPasswordDetails) => void
  sendResetPasswordRequest: ({ email }: { email: string }) => void
}

export const ResetPasswdForm = ({ sendResetPasswordRequest, resetPassword }: Props) => {
  return <div className={styles.resetPasswdForm}></div>
}
