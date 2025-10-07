import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Gobble from './Games/Gobble/Gobble.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gobble />
  </StrictMode>,
)