import { makeAutoObservable } from 'mobx'
import { UserAuthDetails, UserRole } from '../models/auth-models'

export class AuthStore {
  userName: string | null = null
  userEmail: string | null = null
  userID: string | null = null

  userRole: UserRole = 'unauth'

  formValues: UserAuthDetails = { email: '', password: '' }

  constructor() {
    makeAutoObservable(this)
  }

  get isLoggedIn() {
    return this.userRole !== 'unauth'
  }

  logIn = ({ email, password }: UserAuthDetails) => {
    try {
    } catch (e) {}
  }
}
