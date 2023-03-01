import React from "react";
import '../../../assets/css/page-about.css';
import '../../../assets/css/card-team.css';
import { member } from "../../../data/member";

export default function OurTeam({ onClickTeamNameCallback }) {

  return(
    <section className="section-vh-auto">
      <h4 className="text-white bold-title">BEST SERVICES COME FROM BEST TEAM</h4>
      <p className="text-white">
        Experienced and passionate about what we do, our team is dedicated to make the best out of client’s projects. Want to know more about our talented team? just click one of them.
      </p>
      <div className="container">
        <div className="row">
          {
            Object.keys(member).map((key, index) => {
              return (
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" key={index}>
                  <div className="card-team">
                    <figure className="card-team-image">
                      <img src={'images/' + member[key].image_transparent} alt="team member"/>
                    </figure>
                    <h5 className="card-team-title" style={{'cursor': 'pointer'}} onClick={() => onClickTeamNameCallback('member-info', member[key])}>{member[key].nama}</h5>
                    <p className="card-team-subtitle">{member[key].jabatan}</p>
                    <div className="card-team-social">
                      <button className="card-team-social-button" type="button" aria-label="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button className="card-team-social-button" type="button" aria-label="twitter">
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button className="card-team-social-button" type="button" aria-label="instagram">
                        <i className="fab fa-instagram"></i>
                      </button>
                      <button className="card-team-social-button" type="button" aria-label="linkedin">
                        <i className="fab fa-linkedin-in"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}