import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'
import Navbar2 from './component/Navbar2.jsx'
import CategoryNavbar from './component/CategoryNavbar.jsx'
import HeroSection from './component/HeroSection.jsx'
import Product from './component/Product.jsx'
import Banner from './component/Banner.jsx'
import Lastbanner from './component/Lastbanner.jsx'
import Footer from './component/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <Navbar2 />
    <CategoryNavbar />
    <HeroSection />
    <Product />
    <Banner />
    <Lastbanner />
    <Footer />
  </StrictMode>,
)
