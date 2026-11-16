import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

const root = document.getElementById("root");
const page = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Production HTML is prerendered (scripts/prerender.mjs); the dev server's is empty.
if (root.hasChildNodes()) hydrateRoot(root, page);
else createRoot(root).render(page);
