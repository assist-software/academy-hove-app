export type UserRole = 'user' | 'client' | 'admin' | 'unauth'
export type UserSignUpDetails = { email: string; password: string }
export type UserLogInDetails = { email: string; password: string; rememberMe: boolean }
export type AuthPageTypes = 'login' | 'signup'
