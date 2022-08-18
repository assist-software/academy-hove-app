import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from './pages/auth-page'

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
