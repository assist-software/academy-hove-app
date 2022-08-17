import { makeAutoObservable } from 'mobx'

export class AuthStore {
  userName: string | null = null
  userEmail: string | null = null
  userID: string | null = null

  constructor() {
    makeAutoObservable(this)
  }

  login = ({ email, password }: { email: string; password: string }) => {
    try {
    } catch (e) {}
  }
}
