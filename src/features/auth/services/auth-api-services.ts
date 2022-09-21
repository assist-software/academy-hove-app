import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signOut,
} from 'firebase/auth'
import { HANDLE_SET_USER } from 'features/auth/state/reducers/auth-slice'
import { useAppDispatch, useAppSelector } from 'state'
import { auth } from '../../../firebase/firebase-config'

export const authRegister = async (email: string, password: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    console.log(user)
  } catch (err) {
    return err
  }
}

export const authLogin = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    console.log(user)
  } catch (err) {
    return err
  }
}

export const authSigninWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((re) => {
      console.log(re)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const authSendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email)
    console.log(email)
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
    alert('Log out successfully')
  } catch (err) {
    console.error(err)
  }
}
