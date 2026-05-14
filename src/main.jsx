import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MobileNavProvider } from './context/MobileNavContext.jsx'
import './styles/sayuri.css'
import App from './App.jsx'

const routerBasename =
  import.meta.env.BASE_URL === '/'
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, '')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={routerBasename}>
      <MobileNavProvider>
        <App />
      </MobileNavProvider>
    </BrowserRouter>
  </StrictMode>,
)
