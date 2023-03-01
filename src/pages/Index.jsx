import { useState, useEffect } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import Footer from '../components/Footer'

import ErrorPage from '../pages/ErrorPage'
import About from '../pages/about'
import Home from '../pages/home'
import Services from '../pages/services'
import Pricing from '../pages/pricing'
import Faq from '../pages/faq'
import FrequentlyAskedQuestions from '../pages/home/partial-section/FrequentlyAskedQuestions'
import AboutUs from '../pages/about/partial-section/OurStory'
import OurStory from '../pages/about/partial-section/OurStory'
import OurTeam from '../pages/about/partial-section/OurTeam'

function Index() {

  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  });

  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight
    });
  useEffect(() => (window.onresize = updateSize), []);

  // get width of window
  // if width is less than 768px, then show hamburger menu
  // if width is greater than 768px, then show navbar
  let isMobileDevice = size.x < 768 ? true : false



  return (
    <>
      <div style={{position: 'relative'}}>
        <img className='header-logo animate__animated animate__fadeIn' src="images/logo-with-title-removebg.png" alt="logo" />
        {isMobileDevice ? <NavbarMobile/> : <Navbar/>}
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route exact path="/about" element={<About/>}>
              <Route exact path="our-team" element={<OurTeam/>}/>
              <Route exact path="our-story" element={<OurStory/>}/>
              <Route path="*" element={<h1>404</h1>}/>
            </Route>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default Index