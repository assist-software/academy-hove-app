import { observer } from 'mobx-react-lite'
import { Navigate } from 'react-router-dom'
import { useStore } from '../../../../store'

interface Props {
  element: JSX.Element
  restrictedToRole?: ('unauth' | 'user' | 'client' | 'admin')[]
  [x: string]: any
}

export const AuthRoute = observer(({ element, restrictedToRole, ...rest }: Props): JSX.Element => {
  const { authStore } = useStore()
  const { isLoggedIn, userRole } = authStore

  //the array restrictedToRole can be undefined or empty to allow any user to acces that route

  return isLoggedIn && (!restrictedToRole || restrictedToRole.length === 0 || restrictedToRole.includes(userRole)) ? (
    element
  ) : (
    <Navigate replace to='/' />
  )
})
