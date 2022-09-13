import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { PAGES_PATHS } from '../../common/constants/constants'
import { Home } from '../home/home'

export const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGES_PATHS.HOME} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
