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
import AboutUs from './about/OurStory'
import OurStory from './about/OurStory'
import OurTeam from './about/OurTeam'
import BlurBackground from '../components/BlurBackground'
import Modal from '../components/Modal'
import BiodataMember from './about/partial-section/BiodataMember'
import NotFound from './NotFound'
import WhyUs from './about/WhyUs'

function Index() {

  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  });

  const [showModalStatus, setShowModalStatus] = useState(false)
  const [showBlurBackground, setShowBlurBackground] = useState(false)
  
  const [contentModal, setContentModal] = useState({
    type_content: '',
    data: ''
  })
  
  let isMobileDevice = size.x < 768 ? true : false
  const updateSize = () => {
    setSize({
      x: window.innerWidth,
      y: window.innerHeight
    });
  }

  useEffect(() => {
    const body = document.querySelector('body');
    showBlurBackground ? body.classList.add('no-scroll') : body.classList.remove('no-scroll');
    window.onresize = updateSize
  }, [showBlurBackground])
  
  const setContentModalCallback = (type_content, data) => {
    setContentModal({
      type_content: type_content,
      data: data
    })
    setShowModalStatus(true)
    setShowBlurBackground(true)
  }

  // get width of window
  // if width is less than 768px, then show hamburger menu
  // if width is greater than 768px, then show navbar
  
  return (
    <>
      <div style={{position: 'relative'}}>
        {showBlurBackground && <BlurBackground/>}
        <img className='header-logo animate__animated animate__fadeIn' src="images/logo-with-title-removebg.png" alt="logo" />
        {isMobileDevice ? !showModalStatus && <NavbarMobile showBlurCallback={setShowBlurBackground} showBlurStatus={showBlurBackground} /> : <Navbar/>}
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="pricing" element={<Pricing/>}/>
            <Route path="about" element={<About/>}>
              <Route path="" element={<OurStory/>}/>
              <Route path="our-story" element={<OurStory/>}/>
              <Route path="why-us" element={<WhyUs/>}/>
              <Route path="our-familia" element={<OurTeam onClickTeamNameCallback={setContentModalCallback}/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Route>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </main>
        <Footer/>
        {
          contentModal.type_content == 'member-info' && 
          <Modal 
            showModalStatus={showModalStatus} 
            setShowModalStatus={setShowModalStatus} 
            setShowBlurBackground={setShowBlurBackground}
            contentModal={
              <BiodataMember data={contentModal.data} key={contentModal.data.nama}/>
            }/>
        }
      </div>
    </>
  )
}

export default Index