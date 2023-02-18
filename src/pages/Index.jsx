import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import Navbar from '../components/Navbar'
import AboutUs from './partial-section/AboutUs'
import HeroLanding from './partial-section/HeroLanding'

function Index() {
  const [count, setCount] = useState(0)

  return (
    <div style={{position: 'relative'}}>
      <Navbar />
      <main>
        <HeroLanding/>
        <AboutUs/>
      </main>
    </div>
  )
}

export default Index