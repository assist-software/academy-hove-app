import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from './pages/auth-page'

import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css'
import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<>HI</>}></Route>
          <Route path='/auth' element={<AuthPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
