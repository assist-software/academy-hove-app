import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthPage } from './page-auth/page-auth'
import { PAGES_PATHS } from '../common/constants/constants'
import { PageAllComponents } from './page-all-components'
import { SettingsPage } from 'features/settings/components/settings-page/settings-page'

export const PageRouter = () => {
  return (
    <BrowserRouter>
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
