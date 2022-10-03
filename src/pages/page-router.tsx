import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { PageAllComponents } from 'pages/page-all-components'
import { PageAuth } from 'pages/page-auth/page-auth'

import { PAGES_PATHS } from 'common/constants/constants'
import { Results } from './results/results'

export const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGES_PATHS.HOME} element={<PageAllComponents />}></Route>
        <Route path={PAGES_PATHS.RESULTS} element={<Results />} />
        <Route path={PAGES_PATHS.LOG_IN} element={<PageAuth type='login' />} />
        <Route path={PAGES_PATHS.SIGN_UP} element={<PageAuth type='signup' />} />
        <Route path={PAGES_PATHS.RESET_PASS} element={<PageAuth type='reset' />} />
      </Routes>
    </BrowserRouter>
  )
}
