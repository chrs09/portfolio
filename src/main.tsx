import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider, CssBaseline } from '@mui/material'
import Theme from './theme.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={Theme}>
    <CssBaseline /> {/* applies global background & typography */}
    <App />
  </ThemeProvider>,
)
