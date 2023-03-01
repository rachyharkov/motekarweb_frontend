import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css'
import BlurBackground from './BlurBackground';


export default function NavbarMobile() {

  const statusOrder = {
    0: {
      'status': 'Order Placed',
      'date': '2021-07-01',
      'time': '12:00:00',
      'description': 'Your order has been placed and is being processed.',
      'progress': '25%',
      'active': true
    },
    1: {
      'status': 'Editing Your Files',
      'date': '2021-07-01',
      'time': '12:00:00',
      'description': 'Your video is being edited and will be packaged soon.',
      'progress': '50%',
      'active': true
    },
    2: {
      'status': 'Packaging Your Order',
      'date': '2021-07-01',
      'time': '12:00:00',
      'description': 'Your video is being packaged and will be shipped soon.',
      'progress': '75%',
      'active': false
    },
    3: {
      'status': 'Order Shipped',
      'date': '2021-07-01',
      'time': '12:00:00',
      'description': 'Your order has been shipped and is on its way to you.',
      'progress': '100%',
      'active': false
    }
  }

  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  
  useEffect(() => {
    const body = document.querySelector('body');
    const main = document.querySelector('main');
    toggleMobileMenu ? body.classList.add('no-scroll') : body.classList.remove('no-scroll');
    toggleMobileMenu ? main.classList.add('freezing') : main.classList.remove('freezing');
  }, [toggleMobileMenu])

  return (
    <>
      {toggleMobileMenu && <BlurBackground/>}
      <header className="navbar-wrapper">
        <nav className={'navbar-mobile show-' + toggleMobileMenu}>
          <div className='navbar-mobile-header'>

            <img src="images/favicon-96x96.png" alt="logo" />
              {/* <h1>Hello, Guest!</h1> */}
            <button className="hamburger-menu" onClick={() => setToggleMobileMenu(!toggleMobileMenu)} aria-label="toggle mobile menu">
              <div>
                <i className="fas fa-times" alt="close-icon"></i>
                <i className="fas fa-bars" alt="hamburger-icon"></i>
              </div>
            </button>
          </div>
          <ul>
            <li><Link onClick={() => setToggleMobileMenu(!toggleMobileMenu)} to="/">Home</Link></li>
            <li><Link onClick={() => setToggleMobileMenu(!toggleMobileMenu)} to="/services">Services</Link></li>
            <li><Link onClick={() => setToggleMobileMenu(!toggleMobileMenu)} to="/pricing">Pricing</Link></li>
            <li><Link onClick={() => setToggleMobileMenu(!toggleMobileMenu)} to="/about">FAQ</Link></li>
            <li><Link onClick={() => setToggleMobileMenu(!toggleMobileMenu)} to="/FaQ">About Us</Link></li>
            <li className="animation start-home"></li>
          </ul>
          {/* <Link to="/contact-us" className="btn btn-primary">Contact Us</Link> */}
        </nav>
      </header>
    </>
  )
}