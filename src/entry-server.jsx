import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import StoryPage from "./StoryPage.jsx";
import GalleryPage from "./GalleryPage.jsx";

const pages = {
  "index.html": App,
  "our-story.html": StoryPage,
  "gallery.html": GalleryPage,
};

export function render(file) {
  const Page = pages[file];
  if (!Page) throw new Error(`No page component for ${file}`);
  return renderToString(<Page />);
}

export const files = Object.keys(pages);
