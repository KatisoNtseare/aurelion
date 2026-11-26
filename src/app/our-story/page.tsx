
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import {Navbar} from "@/components/navigation/navbar";
import {Footer} from "@/components/layout/footer";

export const metadata = {
  title: "Our Story | AURELION",
  description:
    "Discover the vision, philosophy and ambition behind AURELION, a fictional automotive marque driven by design, engineering and imagination.",
};

const principles = [
  {
    number: "01",
    title: "Purposeful design",
    description:
      "Every line has intention. Every surface has a reason to exist. We believe beauty is most powerful when form and function work as one.",
  },
  {
    number: "02",
    title: "Uncompromising ambition",
    description:
      "Progress begins by questioning what is possible. We imagine machines that challenge expectations and inspire new possibilities.",
  },
  {
    number: "03",
    title: "Human connection",
    description:
      "Performance is more than a number. It is the feeling of acceleration, the precision of control and the connection between driver and machine.",
  },
];

const milestones = [
  {
    year: "THE VISION",
    title: "An idea takes shape.",
    description:
      "A vision emerges: imagine an automotive marque where design, performance and individuality exist without compromise.",
  },
  {
    year: "THE PHILOSOPHY",
    title: "A different standard.",
    description:
      "AURELION takes shape around three defining ideas: purposeful design, ambitious engineering and meaningful experiences.",
  },
  {
    year: "THE FUTURE",
    title: "Beyond the expected.",
    description:
      "A collection of imagined machines represents the next chapter of the vision. Each one explores a different expression of performance.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <Navbar />

      <main className="story-page">
        {/* HERO */}
        <section className="story-hero">
          <Image
            src="https://images.unsplash.com/photo-1519608487953-e999c86e7455"
            alt="Dramatic atmospheric landscape"
            fill
            priority
            sizes="100vw"
            className="story-hero-image"
          />

          <div className="story-hero-overlay" />

          <div className="story-hero-content">
            <span className="story-eyebrow">
              THE AURELION IDENTITY
            </span>

            <h1>
              Born from
              <br />
              <span>possibility.</span>
            </h1>

            <p>
              A vision shaped by imagination.
              A philosophy driven by ambition.
              An automotive world without ordinary limits.
            </p>

            <Link href="#manifesto" className="story-scroll-link">
              DISCOVER OUR STORY
              <ArrowDown size={15} />
            </Link>
          </div>

          <div className="story-hero-caption">
            <span>OUR STORY</span>
            <span>EST. AS A VISION</span>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="story-manifesto" id="manifesto">
          <div className="story-side-label">
            <span>01</span>
            <span>THE MANIFESTO</span>
          </div>

          <div className="story-manifesto-content">
            <span className="story-eyebrow">
              WE ARE AURELION
            </span>

            <h2>
              We do not follow
              <br />
              <span>the road.</span>
              <br />
              We imagine what
              <br />
              <span>lies beyond it.</span>
            </h2>

            <p>
              AURELION is a fictional luxury automotive marque
              built around a simple idea: the future of
              performance should be as inspiring as it is
              extraordinary.
            </p>
          </div>
        </section>

        {/* IMAGE STATEMENT */}
        <section className="story-image-statement">
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Open road through a dramatic landscape"
            fill
            sizes="100vw"
          />

          <div className="story-image-statement-overlay" />

          <div className="story-image-statement-content">
            <span className="story-eyebrow">
              OUR PERSPECTIVE
            </span>

            <h2>
              The extraordinary
              <br />
              is never accidental.
            </h2>

            <span className="story-image-caption">
              DESIGN WITH INTENTION. ENGINEER WITH PURPOSE.
            </span>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="story-principles">
          <div className="story-principles-heading">
            <div>
              <span className="story-eyebrow">
                WHAT DEFINES US
              </span>

              <h2>
                Three principles.
                <br />
                <span>One vision.</span>
              </h2>
            </div>

            <p>
              The foundation of everything we imagine,
              design and create.
            </p>
          </div>

          <div className="story-principles-grid">
            {principles.map((principle) => (
              <article
                className="story-principle"
                key={principle.number}
              >
                <span className="story-principle-number">
                  {principle.number}
                </span>

                <div className="story-principle-line" />

                <h3>{principle.title}</h3>

                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="story-timeline">
          <div className="story-timeline-heading">
            <span className="story-eyebrow">
              THE EVOLUTION OF AN IDEA
            </span>

            <h2>
              A vision in
              <br />
              <span>motion.</span>
            </h2>

            <p>
              Every defining idea begins somewhere.
              This is the story of an imagined automotive future.
            </p>
          </div>

          <div className="story-timeline-list">
            {milestones.map((milestone, index) => (
              <article
                className="story-milestone"
                key={milestone.year}
              >
                <div className="story-milestone-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="story-milestone-content">
                  <span className="story-eyebrow">
                    {milestone.year}
                  </span>

                  <h3>{milestone.title}</h3>

                  <p>{milestone.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CLOSING */}
        <section className="story-closing">
          <Image
            src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
            alt="Luxury sports car"
            fill
            sizes="100vw"
          />

          <div className="story-closing-overlay" />

          <div className="story-closing-content">
            <span className="story-eyebrow">
              THE NEXT CHAPTER
            </span>

            <h2>
              The vision
              <br />
              <span>continues.</span>
            </h2>

            <p>
              Discover the machines imagined to bring
              the AURELION philosophy to life.
            </p>

            <Link href="/collection" className="story-closing-link">
              EXPLORE THE COLLECTION
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
