import { useAppDispatch, useAppSelector } from 'state'
import { SET_EXEMPLE } from 'state/exempleSlice/exempleSlice'
import { auth } from '../../firebase/firebase-config'
import { HANDLE_SET_USER } from 'features/auth/state/reducers/auth-slice'
import { onAuthStateChanged } from 'firebase/auth'
import { authLogout } from 'features/auth/services/auth-api-services'
export const Home = () => {
  const dispatch = useAppDispatch()
  const { exemple } = useAppSelector((state) => state.exemple)
  const handleChangeValue = () => {
    dispatch(SET_EXEMPLE('The value has changed'))
  }

  const { user } = useAppSelector((state) => state.auth)
  console.log(user)
  onAuthStateChanged(auth, (currentUser: any) => {
    dispatch(HANDLE_SET_USER(currentUser))
  })

  return (
    <div>
      <p onClick={handleChangeValue}>{exemple}</p>
      <div>Welcome back, {user?.email} !</div>
      <p
        onClick={() => {
          authLogout()
          dispatch(HANDLE_SET_USER({ access_token: '', display_name: '', email: '', photoUrl: '', isLoggedIn: false }))
        }}
        style={{ cursor: 'pointer' }}>
        Logout
      </p>
    </div>
  )
}
