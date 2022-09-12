import { makeAutoObservable } from 'mobx'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  browserLocalPersistence,
  sendPasswordResetEmail,
  setPersistence,
  getAuth,
  User,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
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
    return this.user !== null
  }

  checkUserStatus = () => {
    const auth = getAuth(app)

    onAuthStateChanged(auth, (user) => {
      this.setUser(user)
    })
  }

  logIn = async ({ email, password, rememberMe }: UserLogInDetails) => {
    try {
      this.setFormErrorText(null)

      const auth = getAuth(app)

      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence)

      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      this.setUser(user)
    } catch (error: any) {
      this.setFormErrorText(error.message)
    }
  }

  logInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)
      const result = await signInWithPopup(auth, provider)

      // const credential = GoogleAuthProvider.credentialFromResult(result)
      // const token = credential?.accessToken

      this.setUser(result.user)
    } catch (error: any) {
      this.setFormErrorText(error.message)
    }
  }

  signUp = async ({ email, password }: UserSignUpDetails) => {
    try {
      this.setFormErrorText(null)

      const auth = getAuth(app)
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      this.setUser(user)
    } catch (error: any) {
      this.setFormErrorText(error.message)
    }
  }

  sendResetPasswordRequest = async ({ email }: { email: string }) => {
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
    } catch (error: any) {
      this.setFormErrorText(error.message)
    }
  }

  handleLogout = async () => {
    try {
      const auth = getAuth()
      await signOut(auth)
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
