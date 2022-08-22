import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from './pages/auth-page'

import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css'
import './App.css'
import { PAGES_PATHS } from './common/constants/constants'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={PAGES_PATHS.HOME} element={<>HI</>}></Route>
          <Route path={PAGES_PATHS.LOGIN} element={<AuthPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
