import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthPage } from './page-auth/page-auth'
import { PAGES_PATHS } from '../common/constants/constants'

export const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGES_PATHS.HOME} element={<>Home</>}></Route>
        <Route path={PAGES_PATHS.LOG_IN} element={<AuthPage type='login' />} />
        <Route path={PAGES_PATHS.SIGN_UP} element={<AuthPage type='signup' />} />
        <Route path={PAGES_PATHS.RESET_PASS} element={<AuthPage type='reset' />} />
      </Routes>
    </BrowserRouter>
  )
}
