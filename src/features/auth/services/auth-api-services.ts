import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signOut,
} from 'firebase/auth'
import { auth } from '../../../firebase/firebase-config'

export const authRegister = async (email: string, password: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    return user.user
  } catch (err: any) {
    return err
  }
}

export const authLogin = async (email: string, password: string): Promise<any> => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user.user
  } catch (err: any) {
    return err
  }
}

export const authSigninWithGoogle = async (): Promise<any> => {
  const provider = new GoogleAuthProvider()
  try {
    const response = await signInWithPopup(auth, provider)

    return response.user
  } catch (err: any) {
    return err
  }
}

export const authSendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email)

    alert('Password reset link sent!')
  } catch (err) {
    console.error(err)
  }
}

export const authResetPassword = async (oobCode: string, password: string) => {
  try {
    await confirmPasswordReset(auth, oobCode, password)
    alert('Password changed successfully')
  } catch (err) {
    console.error(err)
  }
}

export const authLogout = async () => {
  try {
    await signOut(auth)
  } catch (err) {
    console.error(err)
  }
}
