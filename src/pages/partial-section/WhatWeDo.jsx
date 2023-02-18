import React from 'react';
export default function WhatWeDo() {

  return(
    <section className="section-vh-75 section-what-we-do">
      <div className="container-fluid section-what-we-do-inner section-inner text-center">
        <div className="row">
          <div className="col-12">
            <h4 className="section-subtitle section-subtitle-with-bg">What We Do</h4>
            <h1>WE SPECIALIZE IN ONE THING, AND WE DO IT PERFECTLY: EDITING YOUR WEDDING FILM</h1>
            <p>We bring your couple's tales to life, tailored to your vision. Our streamlined approach allows you to prioritize your work, family, or other pursuits. Streamline your workload. Produce high-quality films in less time. Experience peace of mind.</p>
            <div className="section-what-we-do-galleries">
              {/* <div id="lightgallery">
                <a href="/src/assets/images/1066_websize.jpg" data-lg-size="1024-800">
                  <img src="/src/assets/images/1066_websize.jpg" alt="placeholder" />
                </a>
                <a href="/src/assets/images/1066_websize.jpg" data-lg-size="1024-800">
                  <img src="/src/assets/images/1066_websize.jpg" alt="placeholder" />
                </a>
              </div> */}
              <swiper-container>
                <swiper-slide>
                  <img src="/src/assets/images/1066_websize.jpg" alt="placeholder" />
                </swiper-slide>
                <swiper-slide>
                  <img src="/src/assets/images/1066_websize.jpg" alt="placeholder" />
                </swiper-slide>
                <swiper-slide>
                  <img src="/src/assets/images/1066_websize.jpg" alt="placeholder" />
                </swiper-slide>
              </swiper-container>
            </div>
            <button className="btn btn-primary">View Our Extended Work</button>
          </div>
        </div>
      </div>
    </section>
  )
}