import { PageLogin } from 'pages/auth//login/page-login'
import { PageForgotPass } from 'pages/auth/forgot-password/page-forgot-pass'
import { PageRegister } from 'pages/auth/register/page-register'
import { PageResetPass } from 'pages/auth/reset-password/page-reset-pass'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { PAGES_PATHS } from '../../common/constants/constants'
import { Home } from '../home/home'

export const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGES_PATHS.HOME} element={<Home />}></Route>
        <Route path={PAGES_PATHS.LOG_IN} element={<PageLogin />}></Route>
        <Route path={PAGES_PATHS.SIGN_UP} element={<PageRegister />}></Route>
        <Route path={PAGES_PATHS.FORGOT_PASSWORD} element={<PageForgotPass />}></Route>
        <Route path={PAGES_PATHS.RESET_PASS} element={<PageResetPass />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
