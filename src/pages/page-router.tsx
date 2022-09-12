import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthStateHandler } from 'features/auth/components/auth-state-handler/auth-state-handler'
import { SettingsPage } from 'features/settings/components/settings-page/settings-page'
import { PAGES_PATHS } from '../common/constants/constants'
import { PageAllComponents } from './page-all-components'
import { AuthPage } from './page-auth/page-auth'

export const PageRouter = () => {
  return (
    <BrowserRouter>
      <AuthStateHandler />
      <Routes>
        <Route path={PAGES_PATHS.HOME} element={<PageAllComponents />}></Route>
        <Route path={PAGES_PATHS.LOG_IN} element={<AuthPage type='login' />} />
        <Route path={PAGES_PATHS.SIGN_UP} element={<AuthPage type='signup' />} />
        <Route path={PAGES_PATHS.RESET_PASS} element={<AuthPage type='reset' />} />

        <Route path={`${PAGES_PATHS.SETTINGS}*`} element={<SettingsPage />}>
          <Route path={PAGES_PATHS.PROFILE} element={<></>} />
          <Route path={PAGES_PATHS.SECURITY} element={<> asd</>} />
          <Route path={PAGES_PATHS.NOTIFICATIONS} element={<>dsa</>} />
          <Route path={PAGES_PATHS.MESSAGES} element={<>asfd</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
