import { useAppDispatch, useAppSelector } from 'state'
import { SET_EXEMPLE } from 'state/exempleSlice/exempleSlice'
import { HANDLE_SET_USER } from 'features/auth/state/reducers/auth-slice'
import { authLogout } from 'features/auth/services/auth-api-services'
export const Home = () => {
  const dispatch = useAppDispatch()
  const { exemple } = useAppSelector((state) => state.exemple)
  const { user } = useAppSelector((state) => state.auth)
  const handleChangeValue = () => {
    dispatch(SET_EXEMPLE('The value has changed'))
  }
  console.log(user)
  return (
    <div>
      <p onClick={handleChangeValue}>{exemple}</p>
      <div>Welcome back, {user?.email} !</div>
      <p
        onClick={() => {
          authLogout()
          dispatch(HANDLE_SET_USER({ access_token: '', display_name: '', email: '', photoUrl: '', isLoggedIn: false }))
          localStorage.clear()
        }}
        style={{ cursor: 'pointer' }}>
        Logout
      </p>
    </div>
  )
}
