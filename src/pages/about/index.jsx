import Divider from "../../components/Divider";
import HeaderSection from "../../components/HeaderSection";
import OurStory from "./partial-section/OurStory";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import OurTeam from "./partial-section/OurTeam";

export default function About() {
  return (
    <>
      <HeaderSection
        title="Our Story"
        imageBackground="images/1066_websize.jpg"
      />
      <Divider/>
      <div className="container pt-5 mx-auto" style={{'maxWidth': '860px'}}>
        <div className="row">
          <div className="side-nav col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <h4 className="side-nav-title">About</h4>
            <ul className="side-nav-list">
              <li className="side-nav-item"><Link to="our-story" className="side-nav-link">Our Story</Link></li>
              <li className="side-nav-item"><Link to="our-team" className="side-nav-link">Our Team</Link></li>
              <li className="side-nav-item"><Link to="our-clients" className="side-nav-link">Our Clients</Link></li>
              <li className="side-nav-item"><Link to="our-partners" className="side-nav-link">Our Partners</Link></li>
              <li className="side-nav-item"><Link to="our-awards" className="side-nav-link">Our Awards</Link></li>
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
    </>
  )
}