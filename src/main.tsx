import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'styles/kod.scss'
import App from './App'
import { ThemeProvider } from '@emotion/react'
import { DarkTheme } from './components/UI/themes/dark.theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={DarkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
