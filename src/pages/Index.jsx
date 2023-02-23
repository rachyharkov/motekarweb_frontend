import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import BackgroundForAboveElement from '../components/BackgroundForAboveElement'
import Divider from '../components/Divider'
import Navbar from '../components/Navbar'
import AboutUs from './partial-section/AboutUs'
import BigHeadline from './partial-section/BigHeadline'
import Footer from './partial-section/Footer'
import FrequentlyAskedQuestions from './partial-section/FrequentlyAskedQuestions'
import HeroLanding from './partial-section/HeroLanding'
import OurFamily from './partial-section/OurFamily'
import WhatWeDo from './partial-section/WhatWeDo'
import WorkingProcess from './partial-section/WorkingProcess'

function Index() {
  return (
    <div style={{position: 'relative'}}>
      <Navbar />
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