import React, { useEffect, useState } from 'react'
import '../assets/css/navbar.css'

export default function Navbar() {

  useEffect(() => {
    console.log('Navbar Desktop mounted')
  })

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-desktop">
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