import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import BackgroundForAboveElement from '../components/BackgroundForAboveElement'
import Divider from '../components/Divider'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import AboutUs from './partial-section/AboutUs'
import BigHeadline from './partial-section/BigHeadline'
import Footer from './partial-section/Footer'
import FrequentlyAskedQuestions from './partial-section/FrequentlyAskedQuestions'
import HeroLanding from './partial-section/HeroLanding'
import OurFamily from './partial-section/OurFamily'
import WhatWeDo from './partial-section/WhatWeDo'
import WorkingProcess from './partial-section/WorkingProcess'

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
      {isMobileDevice ? <NavbarMobile/> : <Navbar/>}
      <main>
        <HeroLanding/>
        <Divider/>
        <AboutUs/>
        <WhatWeDo/>
        <WorkingProcess/>
        <OurFamily/>
        <BackgroundForAboveElement image="images/group-6.svg"/>
        <BigHeadline/>
        <FrequentlyAskedQuestions/>
      </main>
      <Footer/>
    </div>
  )
}

export default Index