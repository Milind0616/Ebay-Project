import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'
import Navbar2 from './component/Navbar2.jsx'
import CategoryNavbar from './component/CategoryNavbar.jsx'
import HeroSection from './component/HeroSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <Navbar2 />
    <CategoryNavbar />
    <HeroSection />
  </StrictMode>,
)
