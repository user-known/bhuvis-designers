import { useEffect } from "react";
import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";

const WHATSAPP_URL = "https://wa.me/919442071163";
const HOME_URL = import.meta.env.BASE_URL;

function Motif() {
  return (
    <svg className="mono" viewBox="0 0 521 1018" aria-hidden="true">
      <use href={`${HOME_URL}brand-symbols.svg#mk`} />
    </svg>
  );
}

export default function StoryPage() {
  useEffect(() => {
    document.title = "Our story | Bhuvi’s Designers";
    document.documentElement.classList.add("js");
  }, []);

  return (
    <>
      <SiteHeader />
      <main id="top" className="story-page">
        <section className="story-hero">
          <div className="wrap story-hero-grid">
            <div className="rv">
              <span className="eb">Our story</span>
              <h1>Clothing that feels like you.</h1>
              <p>
                At Bhuvi’s Designers, every outfit begins with your idea. We make custom
                designer clothing for women in Coimbatore, designed with you and stitched
                to your measurements.
              </p>
              <a className="btn" href={`${HOME_URL}#contact`}>Start a conversation</a>
            </div>
            <div className="story-art" aria-hidden="true"><Motif /></div>
          </div>
        </section>

        <section className="story-values">
          <div className="wrap story-copy">
            <span className="eb">Made around you</span>
            <h2>Your vision, thoughtfully made.</h2>
            <p className="lead">
              We bring your ideas to life through a personal consultation, remote
              measurements and careful stitching. Whether you have a clear design in
              mind or are still exploring, we work with you to shape an outfit that
              reflects your style.
            </p>
          </div>
        </section>

        <section className="alt story-values">
          <div className="wrap story-copy">
            <span className="eb">From Coimbatore</span>
            <h2>From the first chat to the final outfit.</h2>
            <p className="lead">
              Our work includes Aari embroidery, bridal wear and fully customised
              clothing. We’ll talk through your occasion, preferences and budget, then
              confirm the design and quote with you before moving forward.
            </p>
            <a className="link" href={`${HOME_URL}#process`}>See how the process works</a>
          </div>
        </section>

        <section className="story-cta">
          <div className="wrap">
            <span className="eb">Let’s make something for you</span>
            <h2>Have an idea in mind?</h2>
            <p className="lead">
              Tell us what you’re looking for and we’ll take it from there.
            </p>
            <div className="acts">
              <a className="btn" href={`${HOME_URL}#contact`}>Book a consultation</a>
              <a className="btn ghost" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
