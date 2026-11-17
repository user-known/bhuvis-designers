import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";
import Photo from "./Photo.jsx";
import Stats from "./Stats.jsx";
import storyBlouse from "./assets/images/story-blouse.webp";
import storyBride from "./assets/images/story-bride.webp";
import storyClasses from "./assets/images/story-classes.webp";
import storyHandwork from "./assets/images/story-handwork.webp";
import storySketches from "./assets/images/story-sketches.webp";
import useReveal from "./useReveal.js";
import { BookLink, BookingDialog } from "./booking.jsx";

const WHATSAPP_URL = "https://wa.me/919442071163";
const CLASSES_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hi Bhuvi’s Designers, I’d like to know about your Aari work and tailoring classes.",
)}`;

export default function StoryPage() {
  useReveal();

  return (
    <>
      <SiteHeader />
      <main id="top" className="story-page">
        <section className="story-hero">
          <div className="wrap story-hero-grid">
            <div className="rv">
              <span className="eb">Our story</span>
              <h1>The vision behind the brand.</h1>
              <p>
                Bhuvi’s Designer &amp; Boutique is the vision of Mrs. Bhuvaneshwari, a passionate
                designer with more than fifteen years of experience in the world of fashion.
              </p>
              <BookLink className="btn">Start a conversation</BookLink>
            </div>
            <Photo className="story-art" eager src={storySketches} alt="Fashion sketches and a tape measure pinned to a design board" />
          </div>
        </section>

        <Stats />

        <section className="story-values">
          <div className="wrap split story-split">
            <div className="story-copy rv">
              <span className="eb">From a small dream</span>
              <h2>Traditional artistry, modern elegance.</h2>
              <p className="lead">
                What began as a small dream has now grown into a trusted fashion destination,
                loved by women not only in Coimbatore but also across the globe.
              </p>
              <p className="lead">
                With her creativity, dedication, and an eye for perfection, Bhuvaneshwari has
                built a boutique that blends traditional artistry with modern elegance.
              </p>
            </div>
            <Photo className="rv" src={storyHandwork} alt="Hands stitching red embroidery onto white cloth" />
          </div>
        </section>

        <section className="alt story-values">
          <div className="wrap split story-split flip">
            <div className="story-copy rv">
              <span className="eb">What we make</span>
              <h2>Designed for every occasion.</h2>
              <p className="lead">
                Over the years, the boutique has proudly served more than 10,000 happy clients
                worldwide, designing everything from customized blouses, bridal wear, and lehengas
                to Indo-western outfits, party wear, and adorable kids’ birthday frocks.
              </p>
              <p className="lead">
                Each design is crafted with care, reflecting both beauty and comfort while
                ensuring the perfect fit for every client.
              </p>
              <h3 className="story-sub">Our most celebrated specialties</h3>
              <ul className="story-list">
                <li>Bridal Aari work blouses</li>
                <li>Net work designs</li>
                <li>Pre-pleated sarees</li>
                <li>Ready-to-wear creations</li>
              </ul>
            </div>
            <Photo className="rv" src={storyBlouse} alt="A red blouse with embroidered borders worn with an embellished skirt" />
          </div>
        </section>

        <section className="story-values">
          <div className="wrap split story-split">
            <div className="story-copy rv">
              <span className="eb">Classes</span>
              <h2>A place of learning and empowerment.</h2>
              <p className="lead">
                Beyond fashion designing, Bhuvi’s Designer &amp; Boutique is also known as a place of
                learning and empowerment. With comprehensive Aari work and tailoring classes,
                ranging from beginner to advanced levels, the boutique has trained countless
                students and aspiring designers, helping them build successful careers in this
                ever-growing industry.
              </p>
              <a className="link" href={CLASSES_URL} target="_blank" rel="noopener noreferrer">
                Ask about classes on WhatsApp
              </a>
            </div>
            <Photo className="rv" src={storyClasses} alt="Hands guiding striped fabric through a sewing machine" />
          </div>
        </section>

        <section className="alt story-values">
          <div className="wrap split story-split flip">
            <div className="story-copy rv">
              <span className="eb">What we believe</span>
              <blockquote className="story-quote">
                <p>
                  Fashion is not just about clothing, but about creating confidence and
                  celebrating individuality.
                </p>
              </blockquote>
              <p className="lead">
                At Bhuvi’s Designer &amp; Boutique, every stitch tells a story, every design carries
                a touch of elegance, and every client walks away with more than just an outfit –
                they take home a memorable experience.
              </p>
            </div>
            <Photo className="rv" src={storyBride} alt="A smiling bride in pink and gold with bridal jewellery and henna" />
          </div>
        </section>

        <section className="story-cta">
          <div className="wrap">
            <span className="eb">Let’s make something for you</span>
            <h2>Have an idea in mind?</h2>
            <p className="lead">
              Tell us what you’re looking for and we’ll take it from there.
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
      <BookingDialog />
    </>
  );
}
