import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useEffectOnce } from 'react-use'

import { AUTH_PAGES, PAGES_PATHS } from 'common/constants/constants'

export const AuthStateHandler = () => {
  const navigator = useNavigate()

  useEffectOnce(() => {
    const auth = getAuth()

    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (AUTH_PAGES.includes(document.location.pathname)) navigator(PAGES_PATHS.HOME, { replace: true })
      } else {
        if (!AUTH_PAGES.includes(document.location.pathname)) navigator(PAGES_PATHS.LOG_IN, { replace: true })
      }
    })
  })
  return <></>
}
