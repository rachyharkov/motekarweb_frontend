import React, { useEffect, useState } from 'react'
import '../assets/css/navbar.css'
import BlurBackground from './BlurBackground';


export default function NavbarMobile() {

  // useEffect(() => {
  //   console.log('NavbarMobile mounted')
  // })

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
          {/* <div className='navbar-mobile-links-quick-nav'>
            <a href="/" className="btn link-nav"><i className="fas fa-home"></i>Home</a>
            <a href="/dashboard" className="btn link-nav"><i className="fas fa-tachometer-alt"></i>Dashboard</a>
            <a href="/my-files" className="btn link-nav"><i className="fas fa-folder-open"></i>My Files</a>
            <a href="/coupons" className="btn link-nav"><i className="fas fa-tags"></i>Coupons</a>
          </div>
          <div className='navbar-mobile-order-tracking'>
            <h3>Tracker</h3>
            <div className="order-tracking-visual">
              <div className="order-tracking-status">
                <p>Order Placed</p>
                <p>25%</p>
              </div>
              <div class="progress2 progress-moved">
                <div className="progress-bar2"></div>
              </div>
            </div>
          </div> */}
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/about">FAQ</a></li>
            <li><a href="/FaQ">About Us</a></li>
            <li className="animation start-home"></li>
          </ul>
          {/* <a href="/contact-us" className="btn btn-primary">Contact Us</a> */}
        </nav>
      </header>
    </>
  )
}