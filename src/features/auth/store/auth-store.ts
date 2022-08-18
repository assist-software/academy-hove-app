import { makeAutoObservable } from 'mobx'

export class AuthStore {
  userName: string | null = null
  userEmail: string | null = null
  userID: string | null = null

  userRole: 'user' | 'client' | 'admin' | 'unauth' = 'unauth'

  constructor() {
    makeAutoObservable(this)
  }

  get isLoggedIn() {
    return this.userRole !== 'unauth'
  }

  login = ({ email, password }: { email: string; password: string }) => {
    try {
    } catch (e) {}
  }
}
