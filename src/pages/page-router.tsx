import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthPage } from './page-auth/page-auth'
import { PAGES_PATHS } from '../common/constants/constants'
import { PageAllComponents } from './page-all-components'

export const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGES_PATHS.HOME} element={<PageAllComponents />}></Route>
        <Route path={PAGES_PATHS.LOG_IN} element={<AuthPage type='login' />}></Route>
        <Route path={PAGES_PATHS.SIGN_UP} element={<AuthPage type='signup' />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
