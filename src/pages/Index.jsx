import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import Divider from '../components/Divider'
import Navbar from '../components/Navbar'
import AboutUs from './partial-section/AboutUs'
import HeroLanding from './partial-section/HeroLanding'
import OurFamily from './partial-section/OurFamily'
import WhatWeDo from './partial-section/WhatWeDo'
import WorkingProcess from './partial-section/WorkingProcess'

function Index() {
  const [count, setCount] = useState(0)

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
      </main>
    </div>
  )
}

export default Index