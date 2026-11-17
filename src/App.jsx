import React from "react";
import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";
import Photo from "./Photo.jsx";
import Stats from "./Stats.jsx";
import useReveal from "./useReveal.js";
import { BASE_URL } from "./siteLinks.js";
import { BookLink, BookingDialog, ConsultationForm, WHATSAPP_URL } from "./booking.jsx";
import aariWork from "./assets/images/aari-work.webp";
import bridal from "./assets/images/bridal.webp";
import craftTools from "./assets/images/craft-tools.webp";
import customised from "./assets/images/customised.webp";
import stitching from "./assets/images/stitching.webp";

const HEADLINE = ["Made for you,", "stitch by stitch."];

function App() {
  useReveal();

  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="hero" style={{ padding: 0 }}>
          <div className="wrap">
            <div className="hero-copy">
              <span className="eb">Custom designer wear for women</span>
              <h1 aria-label={HEADLINE.join(" ")}>
                {HEADLINE.map((line, lineIndex) =>
                  line.split(" ").map((word, index) => (
                    <React.Fragment key={`${lineIndex}-${index}`}>
                      {(lineIndex > 0 || index > 0) && " "}
                      <span className="w" aria-hidden="true">
                        <i style={{ "--i": index }}>{word}</i>
                      </span>
                    </React.Fragment>
                  )),
                )}
              </h1>
              <p>
                Aari work, bridal wear and fully customised outfits, designed with you in
                Coimbatore and stitched to your measurements.
              </p>
              <div className="acts">
                <BookLink className="btn">Book a consultation</BookLink>
                <a className="btn ghost" href="#collections">Explore the collections</a>
              </div>
            </div>
            <BookLink className="card" category="Aari work">
              <small>Aari work</small>
              <b>From ₹2,000</b>
              <small>Hand-embroidered detailing</small>
            </BookLink>
          </div>
        </section>

        <Stats />

        <section id="collections">
          <div className="wrap">
            <div className="head rv">
              <div>
                <span className="eb">Our collections</span>
                <h2>Three ways to wear something made for you.</h2>
              </div>
              <BookLink className="link">Book a consultation</BookLink>
            </div>
            <div className="tiles">
              <BookLink className="tile rv" style={{ "--d": "0s" }} category="Aari work">
                <Photo src={aariWork} alt="Hands holding an embroidery hoop with pink floral needlework" />
                <h3>Aari work</h3>
                <p>Intricate hand-embroidered detailing, stitched into your design.</p>
                <div className="pr"><span>From ₹2,000</span></div>
              </BookLink>
              <BookLink className="tile rv" style={{ "--d": "0.12s" }} category="Bridal">
                <Photo src={bridal} alt="A bride in a red and gold embroidered lehenga" />
                <h3>Bridal</h3>
                <p>Bridal outfits designed around you and your day.</p>
                <div className="pr"><span>From ₹5,000</span></div>
              </BookLink>
              <BookLink className="tile rv" style={{ "--d": "0.24s" }} category="Customised">
                <Photo src={customised} alt="A yellow kurta with an embroidered neckline on a mannequin" />
                <h3>Customised</h3>
                <p>Bring your idea and your budget. We design to fit both.</p>
                <div className="pr"><span>Based on your budget</span></div>
              </BookLink>
            </div>
            <p className="note">
              Prices are starting points. Your final quote is confirmed after your consultation.
            </p>
          </div>
        </section>

        <section className="alt" id="process">
          <div className="wrap split">
            <Photo className="rv" src={stitching} alt="Hands guiding fabric through a sewing machine" />
            <div className="rv">
              <span className="eb">How it works</span>
              <h2>From first chat to finished outfit.</h2>
              <ol className="steps">
                <li className="rv" style={{ "--d": "0s" }}>
                  <div><h3>Book a consultation</h3><p>Tell us what you have in mind, on WhatsApp or through the form.</p></div>
                </li>
                <li className="rv" style={{ "--d": "0.1s" }}>
                  <div><h3>Online measurements</h3><p>Share your measurements remotely, wherever you are.</p></div>
                </li>
                <li className="rv" style={{ "--d": "0.2s" }}>
                  <div><h3>Stitching</h3><p>Your outfit is stitched to your measurements.</p></div>
                </li>
                <li className="rv" style={{ "--d": "0.3s" }}>
                  <div><h3>Final output</h3><p>Your finished piece, ready to wear.</p></div>
                </li>
              </ol>
              <BookLink className="btn">Book a consultation</BookLink>
            </div>
          </div>
        </section>

        <section id="story">
          <div className="wrap split">
            <div className="rv">
              <span className="eb">Our story</span>
              <h2>Clothing that feels like you.</h2>
              <p className="lead">
                Bhuvi’s Designers is a Coimbatore boutique making custom designer clothing
                for women. Every piece is designed with you and stitched to your measurements.
              </p>
              <p className="lead">
                From Aari work to bridal wear, we take your idea from consultation to final output.
              </p>
              <a
                className="link"
                href={`${BASE_URL}our-story.html`}
                style={{ display: "inline-block", marginTop: "1.5rem" }}
              >
                Read our story
              </a>
            </div>
            <Photo className="rv" src={craftTools} alt="Thread spools, scissors and a measuring tape on a work table" />
          </div>
        </section>

        <section className="faq alt" id="faq">
          <div className="wrap">
            <span className="eb">Good to know</span>
            <h2 style={{ marginBottom: "3rem" }}>Frequently asked questions.</h2>
            <details className="rv" style={{ "--d": "0s" }}>
              <summary>How do I book a consultation?</summary>
              <p>Use the form below, or message us on WhatsApp at +91 94420 71163.</p>
            </details>
            <details className="rv" style={{ "--d": "0.08s" }}>
              <summary>Where are you based?</summary>
              <p>We are in Coimbatore, Tamil Nadu.</p>
            </details>
            <details className="rv" style={{ "--d": "0.16s" }}>
              <summary>How are measurements taken?</summary>
              <p>Online. After you book your consultation, you share your measurements remotely.</p>
            </details>
            <details className="rv" style={{ "--d": "0.24s" }}>
              <summary>What does it cost?</summary>
              <p>
                Aari work starts from ₹2,000 and bridal from ₹5,000. Customised pieces depend
                on your budget. Your final quote is confirmed after your consultation.
              </p>
            </details>
          </div>
        </section>

        <section className="dark cta" id="contact">
          <div className="wrap grid">
            <div className="rv">
              <span className="eb">Start your outfit</span>
              <h2>Let’s make something for you.</h2>
              <ul className="facts">
                <li><b>Studio</b>Coimbatore, Tamil Nadu</li>
                <li><b>WhatsApp</b><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">+91 94420 71163</a></li>
              </ul>
              <p className="hint">The form opens WhatsApp with your details filled in, ready to send.</p>
            </div>
            <ConsultationForm className="rv" style={{ "--d": "0.15s" }} />
          </div>
        </section>
      </main>

      <SiteFooter />
      <BookingDialog />
    </>
  );
}

export default App;
