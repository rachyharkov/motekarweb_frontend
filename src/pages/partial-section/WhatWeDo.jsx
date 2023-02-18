import React from "react";
export default function WhatWeDo() {
  return (
    <section className="section-vh-75 section-what-we-do">
      <div className="container-fluid section-what-we-do-inner section-inner text-center">
        <div className="row">
          <div className="col-12">
            <h4 className="section-subtitle section-subtitle-with-bg">
              What We Do
            </h4>
            <h1>
              WE SPECIALIZE IN ONE THING, AND WE DO IT PERFECTLY: EDITING YOUR
              WEDDING FILM
            </h1>
            <p>
              We bring your couple's tales to life, tailored to your vision. Our
              streamlined approach allows you to prioritize your work, family,
              or other pursuits. Streamline your workload. Produce high-quality
              films in less time. Experience peace of mind.
            </p>
            <div className="section-what-we-do-galleries" style={{display: 'flex', 'flexDirection': 'column'}}>
              <swiper-container
                class="mySwiper"
                thumbs-swiper=".mySwiper2"
                space-between="10"
                navigation="true"
                style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
              >
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </swiper-slide>
              </swiper-container>

              <swiper-container
                class="mySwiper2"
                space-between="10"
                slides-per-view="4"
                free-mode="true"
                watch-slides-progress="true"
              >
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </swiper-slide>
              </swiper-container>
            </div>
            <button className="btn btn-primary mt-3">View Our Extended Work</button>
          </div>
        </div>
      </div>
    </section>
  );
}
