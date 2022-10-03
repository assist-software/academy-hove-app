import { PageLogin } from 'pages/auth/components/login/page-login'
import { PageForgotPass } from 'pages/auth/components/forgot-password/page-forgot-pass'
import { PageRegister } from 'pages/auth/components/register/page-register'
import { PageResetPass } from 'pages/auth/components/reset-password/page-reset-pass'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { PAGES_PATHS } from '../../common/constants/constants'
import { Home } from '../home/home'
import { ShowroomSeeEverything } from 'features/showroom/components/showroom-see-everithing/showroom-see-everithing'
import { Listing } from 'pages/listing/listing'

export const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGES_PATHS.HOME} element={<Home />}></Route>
        <Route path={PAGES_PATHS.LOG_IN} element={<PageLogin />}></Route>
        <Route path={PAGES_PATHS.SIGN_UP} element={<PageRegister />}></Route>
        <Route path={PAGES_PATHS.FORGOT_PASSWORD} element={<PageForgotPass />}></Route>
        <Route path={PAGES_PATHS.RESET_PASS} element={<PageResetPass />}></Route>
        <Route path={PAGES_PATHS.SEE_EVERITHING_ID} element={<ShowroomSeeEverything />}></Route>
        <Route path={PAGES_PATHS.LISTING_ID} element={<Listing />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
