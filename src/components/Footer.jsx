import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return(
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-media-inner-items">
          <a href="https://www.facebook.com/motekar.studio" data-title="motekar.studio">
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a href="https://www.instagram.com/motekar_studio" data-title="@motekar_studio">
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCPoCQMjLoQQXuTJHhbSPYDg" data-title="Motekar Editing Studio">
            <i className="bx bxl-youtube"></i>
          </a>
        </div>
      </div>
      <div className="footer-inner">
        <div className="footer-inner-content">
          <img src="images/logo-with-title-removebg.png" alt="Motekar Studio" height={100} width={100} />
          <h5>Motekar Digital Kreasi (Motekar Studio)</h5>
          <p>“Where Every Frame Tells a Love Story”</p>
          <p>Copyright &copy; {new Date().getFullYear()} Motekar Studio. All rights reserved | <Link to="about/tos">Terms of Service</Link></p>
          <p><i className="bx bxs-palette"></i> by <a href="https://www.motekarstudio.com/" target="_blank" rel="noreferrer">Alfian K.</a> | <i className='bx bx-code-alt' ></i> by <a href="https://www.rnh-is.me/" target="_blank" rel="noreferrer">rachyharkov</a></p>
        </div>
      </div>
    </footer>
  )
}