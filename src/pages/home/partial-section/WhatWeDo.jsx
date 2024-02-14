import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import { register } from 'swiper/element/bundle'

register()

export default function WhatWeDo() {
  const swiperElRef = useRef(null);
  const [videos, setVideos] = useState([]);
  
  const myOptions = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  }

  const iframecustomstyle = {
    height: '100%',
    minHeight: '26vh',
    maxHeight: '45vh',
    maxWidth: '647px',
    margin: 'auto'
  }

  const addVideo = (element) => {
    setVideos((videos) => [...videos, element]);
  };

  const stopAllVideosExcept = (video) => {
    videos.forEach((v) => {
      if (v !== video) {
        v.pauseVideo();
      }
    });
  };

  return (
    <section className="section-vh-75 section-what-we-do">
      <div className="container-fluid section-what-we-do-inner section-inner text-center">
        <div className="row">
          <div className="col-12">
            <h4 className="section-subtitle section-subtitle-with-bg">
              What We Do
            </h4>
            <h2>
              WE SPECIALIZE IN ONE THING, AND WE DO IT PERFECTLY: EDITING YOUR
              WEDDING FILM
            </h2>
            <p className="section-text-general">
            We bring your couple's tales to life, tailored to your vision. Our streamlined approach allows you to prioritize your work, family, or other pursuits. Streamline your workload. Produce high-quality films in less time. Experience peace of mind.
            </p>
            <div className="section-what-we-do-galleries" style={{
              'height': '340px',
            }}>
              <YouTube
                style={iframecustomstyle}
                videoId="GPZVTX9Mh2g"
                opts={myOptions}
                onReady={(event) => addVideo(event.target)}
                onStateChange={(event) => { if (event.data === 1) { stopAllVideosExcept(event.target) } }}
              />
            </div>
            <Link className="btn btn-primary mt-3" to={"/about"}> 
              View Our Company Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
