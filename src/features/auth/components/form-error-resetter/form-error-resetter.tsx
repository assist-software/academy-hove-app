import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useStore } from 'store/store'

export const FormErrorResetter = () => {
  const location = useLocation()
  const navigator = useNavigate()

  const { authStore } = useStore()
  const { setFormErrorText, user } = authStore

  useEffect(() => {
    setFormErrorText(null)
  }, [location.pathname])

  useEffect(() => {
    if (user?.email) navigator('/', { replace: true })
  }, [user])

  return <></>
}
