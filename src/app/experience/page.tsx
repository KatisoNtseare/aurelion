
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";

import {Navbar} from "@/components/navigation/navbar";
import {Footer} from "@/components/layout/footer";

export const metadata = {
  title: "The Experience | AURELION",
  description:
    "Discover the world of AURELION. Private unveilings, extraordinary driving experiences and a new standard of automotive ownership.",
};

const experiences = [
  {
    number: "01",
    eyebrow: "THE FIRST ENCOUNTER",
    title: "An introduction unlike any other.",
    description:
      "Your journey begins with a private introduction to the AURELION collection. Explore the craftsmanship, engineering and character behind every machine.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    imageAlt: "Luxury sports car in a dramatic setting",
    link: "/collection",
    linkLabel: "Discover the collection",
  },
  {
    number: "02",
    eyebrow: "BEHIND THE WHEEL",
    title: "Feel everything. Forget everything else.",
    description:
      "Experience the connection between driver and machine. Discover the precision, power and emotion that define every AURELION vehicle.",
    image:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
    imageAlt: "Performance sports car on the road",
    link: "/engineering",
    linkLabel: "Explore our engineering",
  },
  {
    number: "03",
    eyebrow: "MADE PERSONAL",
    title: "An expression of you.",
    description:
      "From exterior finishes to interior materials, every detail is an opportunity to create something unmistakably yours.",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
    imageAlt: "Detailed luxury automotive interior",
    link: "/configurator",
    linkLabel: "Configure your vehicle",
  },
];

const ownershipFeatures = [
  {
    number: "01",
    title: "Personal consultation",
    description:
      "A considered conversation to understand your preferences, ambitions and vision.",
  },
  {
    number: "02",
    title: "Bespoke specification",
    description:
      "Explore carefully selected finishes, materials and details to define your vehicle.",
  },
  {
    number: "03",
    title: "The unveiling",
    description:
      "A dedicated presentation of your chosen AURELION, marking the beginning of something extraordinary.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main className="experience-page">
        {/* HERO */}
        <section className="experience-hero">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
            alt="AURELION automotive experience"
            fill
            priority
            sizes="100vw"
            className="experience-hero-image"
          />

          <div className="experience-hero-overlay" />

          <div className="experience-hero-content">
            <span className="experience-eyebrow">
              THE AURELION EXPERIENCE
            </span>

            <h1>
              Beyond the
              <br />
              <span>ordinary.</span>
            </h1>

            <p>
              A different perspective on performance.
              A more personal relationship with the extraordinary.
            </p>

            <Link href="#discover" className="experience-hero-link">
              DISCOVER THE EXPERIENCE
              <ArrowDown size={15} />
            </Link>
          </div>

          <div className="experience-hero-bottom">
            <span>01 / 03</span>
            <span>ENGINEERED TO MOVE YOU</span>
            <span>SOUTH AFRICA</span>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section
          className="experience-intro"
          id="discover"
        >
          <div className="experience-intro-label">
            <span>01</span>
            <span>MORE THAN A MACHINE</span>
          </div>

          <div className="experience-intro-content">
            <h2>
              The vehicle is only
              <br />
              <span>the beginning.</span>
            </h2>

            <p>
              We believe extraordinary engineering deserves an
              equally extraordinary experience. Every interaction
              with AURELION is an opportunity to discover something
              exceptional.
            </p>
          </div>
        </section>

        {/* EXPERIENCE CARDS */}
        <section className="experience-stages">
          <div className="experience-section-heading">
            <div>
              <span className="experience-eyebrow">
                THE JOURNEY
              </span>

              <h2>
                Experience
                <br />
                <span>every detail.</span>
              </h2>
            </div>

            <p>
              From the first introduction to the moment
              you take the wheel, discover a world designed
              around the extraordinary.
            </p>
          </div>

          <div className="experience-stage-list">
            {experiences.map((item) => (
              <article
                className="experience-stage"
                key={item.number}
              >
                <div className="experience-stage-image">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />

                  <span className="experience-stage-number">
                    {item.number}
                  </span>
                </div>

                <div className="experience-stage-content">
                  <span className="experience-eyebrow">
                    {item.eyebrow}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <Link
                    href={item.link}
                    className="experience-text-link"
                  >
                    {item.linkLabel}
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* OWNERSHIP */}
        <section className="experience-ownership">
          <div className="experience-ownership-image">
            <Image
              src="https://images.unsplash.com/photo-1506610654-064fbba4780c"
              alt="Luxury vehicle detail"
              fill
              sizes="100vw"
            />

            <div className="experience-ownership-overlay" />
          </div>

          <div className="experience-ownership-content">
            <span className="experience-eyebrow">
              THE ART OF OWNERSHIP
            </span>

            <h2>
              Personal.
              <br />
              <span>By design.</span>
            </h2>

            <p>
              AURELION ownership is imagined as a relationship
              built around individuality. Every detail, from
              your first consultation to the final specification,
              should feel considered.
            </p>

            <div className="experience-ownership-features">
              {ownershipFeatures.map((feature) => (
                <div
                  className="experience-ownership-feature"
                  key={feature.number}
                >
                  <span>{feature.number}</span>

                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="experience-cta">
          <span className="experience-eyebrow">
            YOUR JOURNEY STARTS HERE
          </span>

          <h2>
            Make it
            <br />
            <span>extraordinary.</span>
          </h2>

          <p>
            Discover the collection. Find the machine
            that speaks to you.
          </p>

          <Link
            href="/collection"
            className="experience-cta-link"
          >
            EXPLORE THE COLLECTION
            <MoveUpRight size={17} />
          </Link>

          <span className="experience-cta-watermark">
            AURELION
          </span>
        </section>
      </main>

      <Footer />
    </>
  );
}
