import { PageRouter } from './pages/router/page-router'
import { HANDLE_SET_USER } from 'features/auth/state/reducers/auth-slice'
import { useAppDispatch } from 'state'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css'

import 'styles/variables.scss'

import './App.css'
import { useEffect } from 'react'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user1') as string)
    console.log(localUser)
    dispatch(HANDLE_SET_USER({ ...localUser, isLoggedIn: true }))
  }, [])
  return (
    <main>
      <PageRouter />
    </main>
  )
}

export default App
