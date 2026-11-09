import React, { useEffect, useRef, useState } from "react";

const WHATSAPP_URL = "https://wa.me/919442071163";
const categories = ["Aari work", "Bridal", "Customised", "Not sure yet"];

function LogoMark({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 521 1018" aria-hidden="true">
      <use href={`${import.meta.env.BASE_URL}brand-symbols.svg#mk`} />
    </svg>
  );
}

function BrandMark({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 563 312" aria-hidden="true">
      <use href={`${import.meta.env.BASE_URL}brand-symbols.svg#wm`} />
    </svg>
  );
}

function Motif() {
  return (
    <svg className="mono" viewBox="0 0 521 1018" aria-hidden="true">
      <use href={`${import.meta.env.BASE_URL}brand-symbols.svg#mk`} />
    </svg>
  );
}

function Placeholder({ className = "" }) {
  return (
    <div className={`ph ${className}`.trim()}>
      <Motif />
      <span>Photo coming soon</span>
    </div>
  );
}

function ThemeIcon({ isDark }) {
  return isDark ? (
    <svg className="sun" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
    </svg>
  ) : (
    <svg className="moon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
    </svg>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });
  const [category, setCategory] = useState(categories[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.add("js");
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // The selected theme still applies for this page when storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;

    const updateHeader = () => header.classList.toggle("sm", window.scrollY > 40);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".rv");
    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("in"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const chooseCategory = (value) => {
    setCategory(value);
  };

  const submitEnquiry = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hi Bhuvi’s Designers, I’d like to book a consultation.",
      `Name: ${formData.get("name")}`,
      `Looking for: ${formData.get("cat")}`,
      formData.get("budget") && `Budget: ${formData.get("budget")}`,
      formData.get("idea") && `My idea: ${formData.get("idea")}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const themeLabel =
    theme === "dark" ? "Switch to the light version" : "Switch to the dark version";

  return (
    <>
      <div className="ann">
        Custom designer clothing for women, made in Coimbatore.{" "}
        <a href="#contact">Book your consultation on WhatsApp.</a>
      </div>

      <header className="top" ref={headerRef}>
        <div className="wrap">
          <nav className={menuOpen ? "main-nav open" : "main-nav"} id="main-navigation" aria-label="Main">
            <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          </nav>
          <a className="brand" href="#top" aria-label="Bhuvi’s Designers, back to top">
            <LogoMark />
          </a>
          <div className="tools">
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                {menuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
              </svg>
            </button>
            <a className="btn" href="#contact">Book now</a>
          </div>
        </div>
      </header>

      <button
        className="tg theme-toggle"
        type="button"
        aria-label={themeLabel}
        onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      >
        <ThemeIcon isDark={theme === "dark"} />
      </button>

      <main id="top">
        <section className="hero" style={{ padding: 0 }}>
          <span className="ph-l">Photo coming soon</span>
          <div className="wrap">
            <div className="hero-copy">
              <span className="eb">Custom designer wear for women</span>
              <h1 aria-label="Made for you, stitch by stitch.">
                {"Made for you, stitch by stitch.".split(" ").map((word, index) => (
                  <span className="w" aria-hidden="true" key={`${word}-${index}`}>
                    <i style={{ "--i": index }}>{word}</i>
                  </span>
                ))}
              </h1>
              <p>
                Aari work, bridal wear and fully customised outfits, designed with you in
                Coimbatore and stitched to your measurements.
              </p>
              <div className="acts">
                <a className="btn" href="#contact">Book a consultation</a>
                <a className="btn ghost" href="#collections">Explore the collections</a>
              </div>
            </div>
            <a className="card" href="#contact" onClick={() => chooseCategory("Aari work")}>
              <small>Aari work</small>
              <b>From ₹2,000</b>
              <small>Hand-embroidered detailing</small>
            </a>
          </div>
        </section>

        <section id="collections">
          <div className="wrap">
            <div className="head rv">
              <div>
                <span className="eb">Our collections</span>
                <h2>Three ways to wear something made for you.</h2>
              </div>
              <a className="link" href="#contact">Book a consultation</a>
            </div>
            <div className="tiles">
              <a className="tile rv" style={{ "--d": "0s" }} href="#contact" onClick={() => chooseCategory("Aari work")}>
                <Placeholder />
                <h3>Aari work</h3>
                <p>Intricate hand-embroidered detailing, stitched into your design.</p>
                <div className="pr"><span>From ₹2,000</span></div>
              </a>
              <a className="tile rv" style={{ "--d": "0.12s" }} href="#contact" onClick={() => chooseCategory("Bridal")}>
                <Placeholder />
                <h3>Bridal</h3>
                <p>Bridal outfits designed around you and your day.</p>
                <div className="pr"><span>From ₹5,000</span></div>
              </a>
              <a className="tile rv" style={{ "--d": "0.24s" }} href="#contact" onClick={() => chooseCategory("Customised")}>
                <Placeholder />
                <h3>Customised</h3>
                <p>Bring your idea and your budget. We design to fit both.</p>
                <div className="pr"><span>Based on your budget</span></div>
              </a>
            </div>
            <p className="note">
              Prices are starting points. Your final quote is confirmed after your consultation.
            </p>
          </div>
        </section>

        <section className="alt" id="process">
          <div className="wrap split">
            <Placeholder className="rv" />
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
              <a className="btn" href="#contact">Book a consultation</a>
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
            </div>
            <Placeholder className="rv" />
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
            <form className="rv" style={{ "--d": "0.15s" }} onSubmit={submitEnquiry}>
              <label>
                Your name
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                What are you looking for?
                <select name="cat" value={category} onChange={(event) => setCategory(event.target.value)}>
                  {categories.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label>
                Budget (optional)
                <input name="budget" placeholder="For example, ₹8,000" />
              </label>
              <label>
                Tell us about your idea
                <textarea name="idea" placeholder="Occasion, colours, inspiration" />
              </label>
              <div className="row">
                <button className="btn" type="submit">Send on WhatsApp</button>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Or start a chat directly</a>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="fg">
            <div>
              <BrandMark className="word" />
              <p>Custom designer clothing for women.</p>
            </div>
            <div>
              <h4>01 — Explore</h4>
              <ul><li><a href="#collections">Collections</a></li><li><a href="#process">How it works</a></li><li><a href="#story">Our story</a></li></ul>
            </div>
            <div>
              <h4>02 — Book</h4>
              <ul><li><a href="#contact">Consultation form</a></li><li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a></li><li><a href="#faq">FAQ</a></li></ul>
            </div>
            <div>
              <h4>03 — Visit</h4>
              <ul><li>Coimbatore</li><li>Tamil Nadu, India</li></ul>
            </div>
          </div>
          <div className="fb">
            <span>© 2026 Bhuvi’s Designers. All rights reserved.</span>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
