import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// STYLES
import { ThemeProvider } from 'styled-components'
import { darkTheme, GlobalStyle, lightTheme } from './styles/'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
