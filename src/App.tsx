import { PageRouter } from './pages/page-router'

import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css'

import 'styles/variables.scss'
import 'styles/custom-theme.scss'

import './App.css'
import { Button } from 'common/components/Button/Button'

function App() {
  return (
    <main>
      <PageRouter />
      <Button mode='danger'>Danger</Button>
      <Button mode='tertiary'>Tertiary</Button>
    </main>
  )
}

export default App
