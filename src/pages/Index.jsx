import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'

import BlurBackground from '../components/BlurBackground'

const Home = lazy(() => import('../pages/home'))
const Services = lazy(() => import('../pages/services'))
const Pricing = lazy(() => import('../pages/pricing'))
const Faq = lazy(() => import('../pages/faq'))
const OurStory = lazy(() => import('./about/OurStory'))
const OurTeam = lazy(() => import('./about/OurTeam'))
const Modal = lazy(() => import('../components/Modal'))
const BiodataMember = lazy(() => import('./about/partial-section/BiodataMember'))
const NotFound = lazy(() => import('./NotFound'))
const ErrorPage = lazy(() => import('../pages/ErrorPage'))
const WhyUs = lazy(() => import('./about/WhyUs'))
const About = lazy(() => import('../pages/about'))
const Footer = lazy(() => import('../components/Footer'))
const NavbarMobile = lazy(() => import('../components/NavbarMobile'))
const Navbar = lazy(() => import('../components/Navbar'))

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
          <Suspense fallback={<div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff'}}><h1>Loading...</h1></div>}>
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
          </Suspense>
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