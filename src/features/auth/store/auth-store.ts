import { makeAutoObservable } from 'mobx'
import { UserLogInDetails, UserRole, UserSignUpDetails, ResetPasswordDetails } from '../models/auth-models'

export class AuthStore {
  userName: string | null = null
  userEmail: string | null = null
  userID: string | null = null

  userRole: UserRole = 'unauth'

  constructor() {
    makeAutoObservable(this)
  }

  get isLoggedIn() {
    return this.userRole !== 'unauth'
  }

  logIn = ({ email, password, rememberMe }: UserLogInDetails) => {
    try {
    } catch (e) {}
  }

  signUp = ({ email, password }: UserSignUpDetails) => {
    try {
    } catch (e) {}
  }

  sendResetPasswordRequest = ({ email }: { email: string }) => {
    try {
      //send request to firebase to send the reset pwd email
    } catch (e) {}
  }

  resetPassword = ({ email, password, oobCode }: ResetPasswordDetails) => {
    try {
      //should send a request to firebase with the oobCode to reset the user's password
    } catch (e) {}
  }
}
