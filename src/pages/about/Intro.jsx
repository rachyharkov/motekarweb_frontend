
import React from 'react';
import { Link } from 'react-router-dom';

export default function Intro() {

  return(
    <section className="section-vh-auto">
      <h4 className="text-white bold-title">WELCOME TO <span style={{'color': 'var(--color-secondary)'}}>MOTEKAR STUDIO</span> - WHERE EVERY FRAME TELLS A LOVE STORY</h4>
      <p className="text-white text-justify">
      At Motekar Studio, we believe in the power of storytelling through the art of video editing. Nestled in the heart of Indonesia, our studio is dedicated to transforming your special moments into cinematic masterpieces, with a specialization in crafting enchanting wedding films.
      </p>
      <p className="text-white text-justify">
      Motekar Studio began as a dream – a dream to capture love stories in a way that transcends time and leaves a lasting imprint on hearts. Our journey started with a passion for the intricacies of storytelling and a profound love for the unique and diverse of each wedding films.
      </p>
      <p className="text-white text-justify">
      At Motekar Studio, we don't just edit videos; we curate an experience. From the moment we embark on a project, our team is committed to understanding the essence of your love story. We take pride in our ability to capture not just the events but the emotions that make your wedding day uniquely yours.
      </p>
      <p className="text-white text-justify">
      What sets Motekar Studio apart is our dedication to cinematic excellence. Each frame is carefully curated, every transition is deliberate, and every edit is a brushstroke in the masterpiece that is your wedding film. Our team of skilled editors, armed with the latest technology and a passion for perfection, weaves together a tapestry of emotions that will be cherished for generations.
      </p>
      <p className="text-white text-justify" style={{'fontStyle': 'italic', 'fontSize': '13px'}}>
        Want to know our story? Head to <Link to="/about/our-story" className="text-accent">"Our Story"</Link> page to find out more.
      </p>
    </section>
  )

}