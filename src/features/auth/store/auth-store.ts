import { makeAutoObservable } from 'mobx'

export class AuthStore {
  userName: string | null = null
  userEmail: string | null = null
  userID: string | null = null

  userRole: 'user' | 'client' | 'admin' | 'unauth' = 'unauth'

  formValues: { email: string; password: string } = { email: '', password: '' }

  constructor() {
    makeAutoObservable(this)
  }

  get isLoggedIn() {
    return this.userRole !== 'unauth'
  }

  setFormValues = (value: string, field: 'email' | 'password') => {
    this.formValues = { ...this.formValues, [field]: value }
  }

  login = ({ email, password }: { email: string; password: string }) => {
    try {
    } catch (e) {}
  }
}
