import Divider from "../../components/Divider";
import HeaderSection from "../../components/HeaderSection";
import './AboutPage.Module.css'
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import BigHeadline from "../home/partial-section/BigHeadline";

export default function About() {
  const location = useLocation()
  const path = location.pathname.split('/')[2] ?? 'intro'

  const menuNameRemovedMinusSignAndCapitalized = (str) => {
    return str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  }

  const [menunya, setMenunya] = useState(menuNameRemovedMinusSignAndCapitalized(path))
  const [expandSideMenu, setExpandSideMenu] = useState(false)
  
  const ExpandSideMenuHandler = () => {
    setExpandSideMenu(!expandSideMenu)
  }

  useEffect(() => {
    document.querySelectorAll('.side-nav-item a').forEach(el => {
      el.parentElement.classList.remove('active')
    })
    document.querySelector(`.side-nav-item a[href*=${path}]`).parentElement.classList.add('active')
  })
  return (
    <>
      <HeaderSection
        title={menunya}
        imageBackground="images/e153d5cb1ce64ee2060b7791fc452b92.png"
      />
      <Divider/>
      <div className="container pt-5 mx-auto" style={{'maxWidth': '860px'}}>
        <div className="row">
          <div className="side-nav col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <h4 className="side-nav-title">About</h4>
            <button className={'side-nav-btn-toggle ' + expandSideMenu} onClick={ExpandSideMenuHandler}><i className="fas fa-plus"></i></button>
            <ul className={'side-nav-list ' + expandSideMenu}>
              <li className="side-nav-item"><Link to="intro" onClick={() => setMenunya('Introduction')} className="side-nav-link">Introduction</Link></li>
              <li className="side-nav-item"><Link to="our-story" onClick={() => setMenunya('Our Story')} className="side-nav-link">Our Story</Link></li>
              <li className="side-nav-item"><Link to="why-us" onClick={() => setMenunya('Why Us?')} className="side-nav-link">Why Us?</Link></li>
              <li className="side-nav-item"><Link to="our-familia" onClick={() => setMenunya('Our Familia')} className="side-nav-link">Our Familia</Link></li>
              <li className="side-nav-item"><Link to="tos" onClick={() => setMenunya('Terms & Services')} className="side-nav-link">TOS</Link></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Outlet/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BigHeadline/>
    </>
  )
}