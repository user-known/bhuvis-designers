// Gallery photos. These are stock photos from Unsplash (credited in README.md)
// standing in for the boutique's own work: replace each file in
// src/assets/gallery/ with a real photo and update its title and alt text.
import bridalPinkLehenga from "./assets/gallery/bridal-pink-lehenga.webp";
import embroideryRedGold from "./assets/gallery/embroidery-red-gold.webp";
import lehengaYellowMaroon from "./assets/gallery/lehenga-yellow-maroon.webp";
import kidsLehengaFlowers from "./assets/gallery/kids-lehenga-flowers.webp";
import bridalPortraitRed from "./assets/gallery/bridal-portrait-red.webp";
import storyBlouse from "./assets/images/story-blouse.webp";
import aariHoop from "./assets/images/aari-work.webp";
import gownRed from "./assets/gallery/gown-red.webp";
import bridalRedLehenga from "./assets/gallery/bridal-red-lehenga.webp";
import embroideryMotif from "./assets/gallery/embroidery-motif.webp";
import blouseIvory from "./assets/gallery/blouse-ivory.webp";
import indoWesternYellow from "./assets/gallery/indo-western-yellow.webp";
import bridalPortraitGold from "./assets/gallery/bridal-portrait-gold.webp";
import storyHandwork from "./assets/images/story-handwork.webp";
import kidsLehengaSeated from "./assets/gallery/kids-lehenga-seated.webp";
import ivoryEnsemble from "./assets/gallery/ivory-ensemble.webp";
import bridalDoorway from "./assets/gallery/bridal-doorway.webp";
import embroideryDetail from "./assets/gallery/embroidery-detail.webp";

export const GALLERY_CATEGORIES = ["Bridal", "Aari work", "Blouses", "Party wear", "Kids"];

export const GALLERY_ITEMS = [
  { src: bridalPinkLehenga, width: 900, height: 1350, category: "Bridal", title: "Pastel bridal lehenga", alt: "A bride in a pink and green embroidered lehenga under a stone arch" },
  { src: embroideryRedGold, width: 900, height: 600, category: "Aari work", title: "Gold thread border", alt: "Close-up of gold embroidery on a red bridal fabric" },
  { src: lehengaYellowMaroon, width: 900, height: 1350, category: "Party wear", title: "Mustard and maroon lehenga", alt: "A woman in a mustard lehenga with a maroon dupatta" },
  { src: kidsLehengaFlowers, width: 900, height: 1211, category: "Kids", title: "Birthday lehenga", alt: "A little girl in a red and yellow lehenga holding marigolds" },
  { src: bridalPortraitRed, width: 900, height: 900, category: "Bridal", title: "Bridal portrait", alt: "A bride in red with gold jewellery and henna" },
  { src: storyBlouse, width: 960, height: 1200, category: "Blouses", title: "Embroidered red blouse", alt: "A red blouse with embroidered borders worn with an embellished skirt" },
  { src: aariHoop, width: 840, height: 1120, category: "Aari work", title: "Floral hoop work", alt: "Hands holding an embroidery hoop with pink floral needlework" },
  { src: gownRed, width: 900, height: 1350, category: "Party wear", title: "Flowing red gown", alt: "A woman in a flowing red gown on a gravel path" },
  { src: bridalRedLehenga, width: 900, height: 1350, category: "Bridal", title: "Red bridal lehenga", alt: "A bride in a red lehenga with heavy embroidery at night" },
  { src: embroideryMotif, width: 900, height: 900, category: "Aari work", title: "Elephant motif", alt: "Close-up of an embroidered elephant motif in gold thread on red" },
  { src: blouseIvory, width: 900, height: 1125, category: "Blouses", title: "Ivory blouse and dupatta", alt: "A woman in an ivory embroidered blouse with a sheer dupatta" },
  { src: indoWesternYellow, width: 900, height: 1125, category: "Party wear", title: "Crop top and flared skirt", alt: "A woman in a white crop top and yellow flared skirt" },
  { src: bridalPortraitGold, width: 900, height: 1125, category: "Bridal", title: "Gold bridal jewellery", alt: "A smiling bride in pink and gold with layered necklaces" },
  { src: storyHandwork, width: 960, height: 1200, category: "Aari work", title: "Hand-stitched motifs", alt: "Hands stitching red embroidery onto white cloth" },
  { src: kidsLehengaSeated, width: 900, height: 1057, category: "Kids", title: "Festive frock", alt: "A little girl seated in a red and yellow festive outfit" },
  { src: ivoryEnsemble, width: 900, height: 900, category: "Party wear", title: "Ivory ensemble", alt: "A woman in an ivory embellished outfit with a matching dupatta" },
  { src: bridalDoorway, width: 900, height: 1125, category: "Bridal", title: "Bridal lehenga in lamplight", alt: "A bride standing in a dim doorway in an embroidered lehenga" },
  { src: embroideryDetail, width: 900, height: 720, category: "Aari work", title: "Bridal border detail", alt: "Close-up of dense gold embroidery on a red lehenga border" },
];
