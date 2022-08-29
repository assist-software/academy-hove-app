export type UserRole = 'user' | 'client' | 'admin' | 'unauth'
export interface UserSignUpDetails {
  email: string
  password: string
}
export interface UserLogInDetails {
  email: string
  password: string
  rememberMe: boolean
}
export type AuthPageTypes = 'login' | 'signup'
export type FullAuthPageTypes = 'login' | 'signup' | 'reset'
export interface ResetPasswordDetails {
  email: string
  password: string
  oobCode: string
}
