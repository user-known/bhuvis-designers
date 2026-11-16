import { useEffect, useRef, useState } from "react";

const HOME_URL = import.meta.env.BASE_URL;
const STORY_URL = `${HOME_URL}our-story.html`;
const WHATSAPP_URL = "https://wa.me/919442071163";

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

function LogoMark() {
  return <img src={`${HOME_URL}logo-mark.svg`} alt="" />;
}

const THEME_KEY = "theme";
const darkQuery = () => window.matchMedia("(prefers-color-scheme: dark)");

// The saved choice wins; otherwise follow the device setting.
function resolveTheme() {
  const chosen = document.documentElement.getAttribute("data-theme");
  if (chosen === "dark" || chosen === "light") return chosen;
  return darkQuery().matches ? "dark" : "light";
}

export default function SiteHeader() {
  // Starts as "light" so the prerendered HTML and first client render match;
  // the effect below corrects it before the visitor can reach the button.
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);
  const themeLabel =
    theme === "dark" ? "Switch to the light version" : "Switch to the dark version";

  useEffect(() => {
    document.documentElement.classList.add("js");
    setTheme(resolveTheme());

    const query = darkQuery();
    const followDevice = () => {
      if (!document.documentElement.hasAttribute("data-theme")) setTheme(resolveTheme());
    };
    query.addEventListener("change", followDevice);
    return () => query.removeEventListener("change", followDevice);
  }, []);

  const toggleTheme = () => {
    const next = resolveTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // The selected theme still applies for this page when storage is unavailable.
    }
    setTheme(next);
  };

  useEffect(() => {
    if (!menuOpen) return undefined;

    navRef.current?.querySelector("a")?.focus();
    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;

    const updateHeader = () => header.classList.toggle("sm", window.scrollY > 40);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <>
      <div className="ann">
        Custom designer clothing for women, made in Coimbatore.{" "}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          Book your consultation on WhatsApp.
        </a>
      </div>
      <header className="top" ref={headerRef}>
        <div className="wrap">
          <nav
            className={menuOpen ? "main-nav open" : "main-nav"}
            id="main-navigation"
            ref={navRef}
            aria-label="Main"
          >
            <a href={`${HOME_URL}#collections`} onClick={() => setMenuOpen(false)}>
              Collections
            </a>
            <a href={`${HOME_URL}#process`} onClick={() => setMenuOpen(false)}>
              How it works
            </a>
            <a href={STORY_URL} onClick={() => setMenuOpen(false)}>
              Our story
            </a>
            <a href={`${HOME_URL}#faq`} onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
          </nav>
          <a className="brand" href={`${HOME_URL}#top`} aria-label="Bhuvi’s Designers, home">
            <LogoMark />
          </a>
          <div className="tools">
            <button
              className="menu-toggle"
              type="button"
              ref={menuButtonRef}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path d="m6 6 12 12M18 6 6 18" />
                ) : (
                  <path d="M3 7h18M3 12h18M3 17h18" />
                )}
              </svg>
            </button>
            <a className="btn" href={`${HOME_URL}#contact`}>Book now</a>
          </div>
        </div>
      </header>
      <button
        className="tg theme-toggle"
        type="button"
        aria-label={themeLabel}
        onClick={toggleTheme}
      >
        <ThemeIcon isDark={theme === "dark"} />
      </button>
    </>
  );
}
