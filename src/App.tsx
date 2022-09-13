import { PageRouter } from './pages/router/page-router'

import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css'

import 'styles/variables.scss'

import './App.css'

function App() {
  return (
    <main>
      <PageRouter />
    </main>
  )
}

export default App
