import { makeAutoObservable } from 'mobx'
import { UserLogInDetails, UserRole, UserSignUpDetails } from '../models/auth-models'

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
}
