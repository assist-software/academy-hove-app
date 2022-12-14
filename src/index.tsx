import React from 'react'
import ReactDOM from 'react-dom/client'

import '/node_modules/primeflex/primeflex.css'
import './index.css'
import './styles/elements.scss'
import './styles/buttons.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
