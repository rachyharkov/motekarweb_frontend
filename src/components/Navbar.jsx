import React, { useEffect, useState } from 'react'
import '../assets/css/navbar.css'

export default function Navbar() {

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
    <header className="navbar-wrapper">
      <nav className={isMobileDevice ? 'navbar-mobile' : 'navbar-desktop'}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">services</a></li>
          <li><a href="/pricing">pricing</a></li>
          <li><a href="/about">about</a></li>
          <li><a href="/FaQ">FaQ</a></li>
          <li className="animation start-home"></li>
        </ul>
        {/* <a href="/contact-us" className="btn btn-primary">Contact Us</a> */}
      </nav>
    </header>
  )
}