import { useEffect, useId, useRef, useState } from "react";
import { BASE_URL } from "./siteLinks.js";

export const WHATSAPP_URL = "https://wa.me/919442071163";
export const CATEGORIES = ["Aari work", "Bridal", "Customised", "Not sure yet"];

const OPEN_EVENT = "booking:open";

export function openBooking(category) {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: { category } }));
}

// A real link to the contact form, so it still works before JavaScript loads;
// once it has, a click opens the booking popup instead.
export function BookLink({ category, className, style, children, onClick }) {
  const handleClick = (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onClick?.(event);
    openBooking(category);
  };

  return (
    <a className={className} style={style} href={`${BASE_URL}#contact`} onClick={handleClick}>
      {children}
    </a>
  );
}

function sendToWhatsApp(form) {
  const formData = new FormData(form);
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
}

export function ConsultationForm({ category = CATEGORIES[0], onSent, autoFocus = false, className, style }) {
  const [selected, setSelected] = useState(category);

  useEffect(() => setSelected(category), [category]);

  const submit = (event) => {
    event.preventDefault();
    sendToWhatsApp(event.currentTarget);
    onSent?.();
  };

  return (
    <form className={className} style={style} onSubmit={submit}>
      <label>
        Your name
        <input name="name" autoComplete="name" required autoFocus={autoFocus} />
      </label>
      <label>
        What are you looking for?
        <select name="cat" value={selected} onChange={(event) => setSelected(event.target.value)}>
          {CATEGORIES.map((option) => <option key={option}>{option}</option>)}
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
  );
}

export function BookingDialog() {
  const dialogRef = useRef(null);
  const titleId = useId();
  const [category, setCategory] = useState(CATEGORIES[0]);
  // Remounts the form on each open so it starts empty with the chosen category.
  const [openCount, setOpenCount] = useState(0);
  // Jump straight to the name field with a mouse; on touch screens that would
  // pop the keyboard over the sheet before the visitor has read it.
  const [focusName, setFocusName] = useState(false);

  useEffect(() => {
    const open = (event) => {
      setCategory(event.detail?.category ?? CATEGORIES[0]);
      setOpenCount((count) => count + 1);
      setFocusName(window.matchMedia("(pointer: fine)").matches);
      dialogRef.current?.showModal();
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const close = () => dialogRef.current?.close();

  // A click on the backdrop lands on the dialog element itself.
  const closeOnBackdrop = (event) => {
    if (event.target === dialogRef.current) close();
  };

  return (
    <dialog ref={dialogRef} className="booking" aria-labelledby={titleId} onClick={closeOnBackdrop}>
      <div className="booking-panel">
        <button className="tg booking-close" type="button" aria-label="Close" onClick={close}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
        <h2 id={titleId}>Book a consultation</h2>
        <p className="hint">Tell us a little about your outfit. We’ll open WhatsApp with your details filled in, ready to send.</p>
        {openCount > 0 && (
          <ConsultationForm key={openCount} category={category} onSent={close} autoFocus={focusName} />
        )}
      </div>
    </dialog>
  );
}
