import { BASE_URL } from "./siteLinks.js";

const WHATSAPP_URL = "https://wa.me/919442071163";
const STORY_URL = `${BASE_URL}our-story.html`;

function BrandMark() {
  return (
    <svg className="word" viewBox="0 0 563 312" aria-hidden="true">
      <use href={`${BASE_URL}brand-symbols.svg#wm`} />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="fg">
          <div>
            <BrandMark />
            <p>Custom designer clothing for women.</p>
          </div>
          <div>
            <h4>01 — Explore</h4>
            <ul>
              <li><a href={`${BASE_URL}#collections`}>Collections</a></li>
              <li><a href={`${BASE_URL}#process`}>How it works</a></li>
              <li><a href={STORY_URL}>Our story</a></li>
            </ul>
          </div>
          <div>
            <h4>02 — Book</h4>
            <ul>
              <li><a href={`${BASE_URL}#contact`}>Consultation form</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href={`${BASE_URL}#faq`}>FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4>03 — Visit</h4>
            <ul><li>Coimbatore</li><li>Tamil Nadu, India</li></ul>
          </div>
        </div>
        <div className="fb">
          <span>© 2026 Bhuvi’s Designers. All rights reserved.</span>
          <a href={`${BASE_URL}#top`}>Back to top</a>
        </div>
      </div>
    </footer>
  );
}
