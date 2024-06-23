import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// STYLES
import { GlobalStyle } from './styles/'

// CONTEXTS
import { AppThemeProvider } from './contexts/AppThemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <GlobalStyle />
      <App />
    </AppThemeProvider>
  </React.StrictMode>
)
