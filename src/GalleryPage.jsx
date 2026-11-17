import { useEffect, useRef, useState } from "react";
import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";
import useReveal from "./useReveal.js";
import { BookLink, BookingDialog, WHATSAPP_URL } from "./booking.jsx";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "./galleryItems.js";

const ALL = "All";
const FIRST_BATCH = 12;

function Lightbox({ items, index, onClose, onMove }) {
  const dialogRef = useRef(null);
  const item = index === null ? null : items[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (item && !dialog.open) dialog.showModal();
    if (!item && dialog.open) dialog.close();
  }, [item]);

  useEffect(() => {
    if (!item) return undefined;
    const onKey = (event) => {
      if (event.key === "ArrowRight") onMove(1);
      if (event.key === "ArrowLeft") onMove(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [item, onMove]);

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={item ? item.title : "Photo"}
      onClose={onClose}
      onClick={(event) => event.target === dialogRef.current && dialogRef.current.close()}
    >
      {item && (
        <figure className="lightbox-figure">
          <img src={item.src} alt={item.alt} width={item.width} height={item.height} />
          <figcaption>
            <span>
              <b>{item.title}</b>
              <small>{item.category}</small>
            </span>
            <span className="lightbox-count" aria-live="polite">
              {index + 1} / {items.length}
            </span>
          </figcaption>
        </figure>
      )}
      <button className="tg lightbox-close" type="button" aria-label="Close" onClick={() => dialogRef.current.close()}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      </button>
      {items.length > 1 && (
        <>
          <button className="tg lightbox-nav prev" type="button" aria-label="Previous photo" onClick={() => onMove(-1)}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M15 5 8 12l7 7" />
            </svg>
          </button>
          <button className="tg lightbox-nav next" type="button" aria-label="Next photo" onClick={() => onMove(1)}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="m9 5 7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </dialog>
  );
}

export default function GalleryPage() {
  useReveal();
  const [filter, setFilter] = useState(ALL);
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const firstNewRef = useRef(null);

  const filtered = filter === ALL ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter);
  const limited = filter === ALL && !expanded && filtered.length > FIRST_BATCH;
  const visible = limited ? filtered.slice(0, FIRST_BATCH) : filtered;

  const chooseFilter = (value) => {
    setFilter(value);
    setOpenIndex(null);
  };

  const showMore = () => {
    setExpanded(true);
    // Move keyboard focus to the first photo that just appeared.
    requestAnimationFrame(() => firstNewRef.current?.focus());
  };

  const move = (step) =>
    setOpenIndex((current) => (current === null ? null : (current + step + filtered.length) % filtered.length));

  const count = (value) =>
    value === ALL ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter((item) => item.category === value).length;

  return (
    <>
      <SiteHeader />
      <main id="top" className="gallery-page">
        <section className="gallery-head">
          <div className="wrap">
            <div className="rv">
              <span className="eb">Gallery</span>
              <h1>Our previous work.</h1>
              <p className="lead">
                Bridal wear, Aari work, blouses and party wear, each piece designed with its
                client and stitched to her measurements.
              </p>
            </div>
            <div className="filters" role="group" aria-label="Show work by category">
              {[ALL, ...GALLERY_CATEGORIES].map((value) => (
                <button
                  key={value}
                  type="button"
                  className="filter"
                  aria-pressed={filter === value}
                  onClick={() => chooseFilter(value)}
                >
                  {value} <span className="filter-count">{count(value)}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery-wall">
          <div className="wrap">
            <ul className={limited ? "wall is-limited" : "wall"}>
              {visible.map((item, index) => (
                <li key={item.title}>
                  <button
                    type="button"
                    className="wall-item"
                    ref={index === FIRST_BATCH ? firstNewRef : undefined}
                    onClick={() => setOpenIndex(index)}
                    aria-label={`${item.title}, ${item.category}. Open larger photo`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading={index < 4 ? "eager" : "lazy"}
                      decoding="async"
                    />
                    <span className="wall-caption" aria-hidden="true">
                      <b>{item.title}</b>
                      <small>{item.category}</small>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            {limited && (
              <div className="wall-more">
                <button className="btn ghost" type="button" onClick={showMore}>
                  Show more work
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="gallery-cta">
          <div className="wrap">
            <span className="eb">Like something you see?</span>
            <h2>Let’s make one for you.</h2>
            <p className="lead">
              Share a photo from the gallery or your own idea, and we’ll design it around you.
            </p>
            <div className="acts">
              <BookLink className="btn">Book a consultation</BookLink>
              <a className="btn ghost" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <Lightbox items={filtered} index={openIndex} onClose={() => setOpenIndex(null)} onMove={move} />
      <BookingDialog />
    </>
  );
}
