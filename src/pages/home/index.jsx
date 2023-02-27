import React from 'react'
import BackgroundForAboveElement from '../../components/BackgroundForAboveElement'
import Divider from '../../components/Divider'
import BigHeadline from './partial-section/BigHeadline'
import AboutUs from './partial-section/AboutUs'
import FrequentlyAskedQuestions from './partial-section/FrequentlyAskedQuestions'
import HeroLanding from './partial-section/HeroLanding'
import OurFamily from './partial-section/OurFamily'
import WhatWeDo from './partial-section/WhatWeDo'
import WorkingProcess from './partial-section/WorkingProcess'


export default function Home() {
  return(
    <>
      <HeroLanding/>
      <Divider/>
      <AboutUs/>
      <WhatWeDo/>
      <WorkingProcess/>
      <OurFamily/>
      <BackgroundForAboveElement image="images/group-6.svg"/>
      <BigHeadline/>
      <FrequentlyAskedQuestions/>
    </>
  ) 
}