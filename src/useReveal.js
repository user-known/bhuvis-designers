import { useEffect } from "react";

// Adds `in` to every `.rv` element as it scrolls into view. The `js` class
// that hides them until then is set in each page's <head>, so every page
// with `.rv` elements must call this.
export default function useReveal() {
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
}
