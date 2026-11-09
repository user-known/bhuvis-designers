import React from "react";
import { createRoot } from "react-dom/client";
import StoryPage from "./StoryPage.jsx";
import "./styles.css";
import "./story.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoryPage />
  </React.StrictMode>,
);
