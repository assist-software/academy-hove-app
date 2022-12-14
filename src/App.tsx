import { PageRouter } from 'pages/page-router'

import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css'
import 'styles/variables.scss'
import 'styles/custom-theme.scss'

function App() {
  return (
    <main>
      <PageRouter />
    </main>
  )
}

export default App
