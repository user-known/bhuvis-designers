import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import GalleryPage from "./GalleryPage.jsx";
import "./styles.css";
import "./gallery.css";

const root = document.getElementById("root");
const page = (
  <React.StrictMode>
    <GalleryPage />
  </React.StrictMode>
);

// Production HTML is prerendered (scripts/prerender.mjs); the dev server's is empty.
if (root.hasChildNodes()) hydrateRoot(root, page);
else createRoot(root).render(page);
