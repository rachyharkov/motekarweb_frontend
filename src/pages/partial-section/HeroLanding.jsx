import React from 'react'

export default function HeroLanding() {
  return(
    <section className='section section-hero-landing'>
      <div className="container-fluid section-hero-inner">
        <div className="row">
          <div className="col-12">
            <h1>ETERNALLY CAPTURED, <br/>BEAUTIFULLY EDITED</h1>
            <p>Motekar is A Team of trained video editors who are able to
strip the heavy lifting from most production houses</p>
            <button className="btn btn-primary">Beyond Editing</button>
          </div>
        </div>
      </div>
      <div className='section-hero-landing-transparent'></div>
      <img data-src="./src/assets/images/1066_websize.jpg"  class="lazyload section-hero-landing-background" alt="placeholder" />
    </section>
  )

}