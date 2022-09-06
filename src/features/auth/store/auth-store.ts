import { makeAutoObservable } from 'mobx'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  browserLocalPersistence,
  setPersistence,
  getAuth,
  User,
} from 'firebase/auth'

import { UserLogInDetails, UserRole, UserSignUpDetails, ResetPasswordDetails } from '../models/auth-models'
import { app } from 'common/services/firebase-service'

export class AuthStore {
  user: User | null = null

  userName: string | null = null
  userEmail: string | null = null
  userID: string | null = null

  userRole: UserRole = 'unauth'

  formErrorText: string | null = null

  constructor() {
    makeAutoObservable(this)
  }

  get isLoggedIn() {
    return this.userRole !== 'unauth'
  }

  logIn = async ({ email, password, rememberMe }: UserLogInDetails) => {
    try {
      const auth = getAuth()

      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence)

      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      this.setUser(user)
    } catch (error: any) {
      this.setFormErrorText(error.message)
    }
  }

  signUp = async ({ email, password }: UserSignUpDetails) => {
    try {
      const auth = getAuth(app)
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      this.setUser(user)
    } catch (error: any) {
      this.setFormErrorText(error.message)
    }
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

  setFormErrorText = (text: string | null) => {
    this.formErrorText = text
  }

  setUser = (user: User | null) => {
    this.user = user
  }
}
