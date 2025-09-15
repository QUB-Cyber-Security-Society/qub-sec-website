import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline } from '@mui/material'
import theme from './assets/Theme.tsx'
import { ThemeProvider } from '@mui/material/styles'

createRoot(document.getElementById('root')!).render(
  <>
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StrictMode>
  </>
)
