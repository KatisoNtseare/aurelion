import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  Gauge,
  Gem,
  MoveUpRight,
} from "lucide-react";

import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "The AURELION Experience",
  description:
    "Discover the world of AURELION, where extraordinary performance meets considered craftsmanship and personal expression.",
};

const experiences = [
  {
    number: "01",
    icon: Compass,
    title: "The first encounter",
    subtitle: "A moment before everything changes.",
    description:
      "An introduction to the AURELION philosophy. Explore the design language, discover the thinking behind each machine and find the expression that speaks to you.",
    detail: "DISCOVER THE COLLECTION",
    href: "/collection",
  },
  {
    number: "02",
    icon: Gem,
    title: "Made personal",
    subtitle: "Every detail tells a story.",
    description:
      "From exterior finishes to carefully considered interiors, explore the possibilities of personal expression through the AURELION Atelier.",
    detail: "CREATE YOUR SPECIFICATION",
    href: "/configurator",
  },
  {
    number: "03",
    icon: Gauge,
    title: "The art of motion",
    subtitle: "Beyond the destination.",
    description:
      "AURELION is imagined around the connection between driver, machine and road. Performance is not simply measured. It is experienced.",
    detail: "EXPLORE OUR ENGINEERING",
    href: "/engineering",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main className="experience-page">
        {/* Full-screen introduction */}
        <section className="experience-hero">
          <div className="experience-hero-image" />
          <div className="experience-hero-overlay" />

          <div className="container experience-hero-content">
            <span className="eyebrow">
              BEYOND THE MACHINE / THE AURELION EXPERIENCE
            </span>

            <h1>
              It is not
              <br />
              simply about
              <br />
              <em>the drive.</em>
            </h1>

            <div className="experience-hero-bottom">
              <p>
                It is the anticipation. The precision. The feeling of being
                completely connected to something extraordinary.
              </p>

              <a href="#experience-journey" className="experience-scroll-link">
                <span>DISCOVER THE EXPERIENCE</span>
                <ArrowDown size={15} />
              </a>
            </div>
          </div>

          <span className="experience-hero-index">
            AURELION / A DIFFERENT PERSPECTIVE
          </span>
        </section>

        {/* Brand philosophy */}
        <section className="experience-manifesto section-padding">
          <div className="container experience-manifesto-grid">
            <div>
              <span className="eyebrow">01 / THE PHILOSOPHY</span>
            </div>

            <div>
              <h2>
                An automobile can take you somewhere.
                <br />
                <em>An experience can move you.</em>
              </h2>

              <p>
                We imagine a world where every interaction has intention.
                Where design creates anticipation, engineering inspires
                confidence and every detail contributes to something
                unforgettable.
              </p>
            </div>
          </div>
        </section>

        {/* Three-stage experience */}
        <section
          className="experience-journey section-padding"
          id="experience-journey"
        >
          <div className="container">
            <div className="experience-section-heading">
              <div>
                <span className="eyebrow">02 / THE JOURNEY</span>
                <h2>
                  More than
                  <br />
                  <em>the destination.</em>
                </h2>
              </div>

              <p>
                Every AURELION interaction is imagined as part of a larger
                experience. From the first impression to the smallest detail.
              </p>
            </div>

            <div className="experience-stage-list">
              {experiences.map((item) => {
                const Icon = item.icon;

                return (
                  <article className="experience-stage" key={item.number}>
                    <span className="experience-stage-number">
                      {item.number}
                    </span>

                    <div className="experience-stage-icon">
                      <Icon size={25} strokeWidth={1.2} />
                    </div>

                    <div className="experience-stage-content">
                      <span className="eyebrow">{item.subtitle}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>

                      <Link
                        href={item.href}
                        className="experience-stage-link"
                      >
                        {item.detail}
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>

                    <MoveUpRight
                      className="experience-stage-arrow"
                      size={20}
                      strokeWidth={1.2}
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Visual statement */}
        <section className="experience-image-statement">
          <div className="experience-image-statement-overlay" />

          <div className="container experience-image-statement-content">
            <span className="eyebrow">THE AURELION STATE OF MIND</span>

            <h2>
              Feel every
              <br />
              <em>possibility.</em>
            </h2>

            <p>
              Created around a simple belief: the journey should be as
              extraordinary as the machine itself.
            </p>
          </div>
        </section>

        {/* Personalisation CTA */}
        <section className="experience-cta section-padding">
          <div className="container">
            <span className="eyebrow">03 / YOUR EXPRESSION</span>

            <h2>
              There is only
              <br />
              one <em>you.</em>
            </h2>

            <p>
              Explore the AURELION collection and create a specification
              that reflects your own perspective.
            </p>

            <Link href="/configurator" className="experience-cta-link">
              ENTER THE AURELION ATELIER
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}