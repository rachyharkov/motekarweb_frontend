import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import '../assets/css/navbar.css'

export default function Navbar() {

  const location = useLocation()
  const [currentPath, setCurrentPath] = useState(location.pathname)

  useEffect(() => {
    console.log(location.pathname)
    setCurrentPath(location.pathname)
  }, [location])

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-desktop">
        <ul>
          <li className={currentPath == '/' && 'active'}><Link to={"/"}>Home</Link></li>
          <li className={currentPath == '/services' && 'active'}><Link to={"/services"}>services</Link></li>
          <li className={currentPath == '/pricing' && 'active'}><Link to={"/pricing"}>pricing</Link></li>
          <li className={currentPath == '/about' && 'active'}><Link to={"/about"}>about</Link></li>
          <li className={currentPath == '/faq' && 'active'}><Link to={"/faq"}>FaQ</Link></li>
          <li className="animation start-home"></li>
        </ul>
        {/* <a href="/contact-us" className="btn btn-primary">Contact Us</a> */}
      </nav>
    </header>
  )
}