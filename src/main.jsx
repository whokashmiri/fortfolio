import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// eslint-disable-next-line no-unused-vars
import SplashCursor from './components/SplashCursor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <SplashCursor/> */}
    <App />
  </StrictMode>,
)
