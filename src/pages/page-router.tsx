import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { TopBar } from 'features/top-bar/components/top-bar/top-bar'
import { PAGES_PATHS } from '../common/constants/constants'
import { PageAllComponents } from './page-all-components'
import { PageAuth } from './page-auth/page-auth'


export const PageRouter = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path={PAGES_PATHS.HOME} element={<PageAllComponents />}></Route>
        <Route path={PAGES_PATHS.LOG_IN} element={<PageAuth type='login' />} />
        <Route path={PAGES_PATHS.SIGN_UP} element={<PageAuth type='signup' />} />
        <Route path={PAGES_PATHS.RESET_PASS} element={<PageAuth type='reset' />} />
      </Routes>
    </BrowserRouter>
  )
}
