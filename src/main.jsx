import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'
import Navbar2 from './component/Navbar2.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Navbar2 />
    <App />
    
    
  </StrictMode>,
)
