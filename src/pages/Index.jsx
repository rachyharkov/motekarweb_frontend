import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import Navbar from '../components/Navbar'
import AboutUs from './partial-section/AboutUs'
import HeroLanding from './partial-section/HeroLanding'
import WhatWeDo from './partial-section/WhatWeDo'
import WorkingProcess from './partial-section/WorkingProcess'

function Index() {
  const [count, setCount] = useState(0)

  return (
    <div style={{position: 'relative'}}>
      <Navbar />
      <main>
        <HeroLanding/>
        <AboutUs/>
        <WhatWeDo/>
        <WorkingProcess/>
      </main>
    </div>
  )
}

export default Index