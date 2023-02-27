import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import Footer from '../components/Footer'

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
    <div style={{position: 'relative'}}>
      <img className='header-logo animate__animated animate__fadeIn' src="images/logo-with-title-removebg.png" alt="logo" />
      {isMobileDevice ? <NavbarMobile/> : <Navbar/>}
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Index