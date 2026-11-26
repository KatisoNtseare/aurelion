import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";

import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover the vision, philosophy and creative principles behind AURELION, a fictional luxury automotive marque.",
};

const principles = [
  {
    number: "01",
    title: "Imagination without limits",
    description:
      "We believe the most meaningful innovations begin with the courage to question what already exists.",
  },
  {
    number: "02",
    title: "Precision in every detail",
    description:
      "From the first line of a design to the final imagined driving experience, intention defines the outcome.",
  },
  {
    number: "03",
    title: "Performance with purpose",
    description:
      "Power is only part of the story. The relationship between control, response and emotion matters just as much.",
  },
];

const milestones = [
  {
    year: "2026",
    title: "The beginning of an idea",
    description:
      "AURELION is conceived as an exploration of modern automotive identity, bringing together performance, design and digital storytelling.",
  },
  {
    year: "01",
    title: "A design language emerges",
    description:
      "The visual identity takes shape around restraint, proportion, purposeful surfaces and a distinctive sense of presence.",
  },
  {
    year: "02",
    title: "Three expressions of motion",
    description:
      "APEX, VEYRA and SOLIS represent three different interpretations of the AURELION philosophy.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <Navbar />

      <main className="story-page">
        {/* Hero */}
        <section className="story-hero">
          <div className="story-hero-image" />
          <div className="story-hero-overlay" />

          <div className="container story-hero-content">
            <span className="eyebrow">
              THE ORIGIN / THE AURELION STORY
            </span>

            <h1>
              Born from
              <br />
              <em>possibility.</em>
            </h1>

            <div className="story-hero-bottom">
              <p>
                Every remarkable idea begins with a question. Ours was simple:
                what if the automobile could become something more?
              </p>

              <a href="#story-beginning" className="story-scroll-link">
                <span>DISCOVER OUR STORY</span>
                <ArrowDown size={15} />
              </a>
            </div>
          </div>

          <span className="story-hero-index">
            AURELION / EST. 2026
          </span>
        </section>

        {/* Origin */}
        <section
          className="story-beginning section-padding"
          id="story-beginning"
        >
          <div className="container story-beginning-grid">
            <div className="story-side-label">
              <span className="eyebrow">01 / THE BEGINNING</span>
              <span className="story-side-number">001 — 003</span>
            </div>

            <div className="story-beginning-copy">
              <h2>
                Not another automobile.
                <br />
                <em>A different way of thinking.</em>
              </h2>

              <p className="story-lead">
                AURELION began as a creative exploration of what a modern
                luxury automotive marque could represent.
              </p>

              <p>
                The idea was never simply to imagine faster machines. It was
                to create a complete identity around the things that make
                automotive design compelling: proportion, material, movement,
                technology and emotion.
              </p>

              <p>
                A fictional marque with a real design philosophy. A space to
                explore ambitious ideas without being limited by convention.
              </p>
            </div>
          </div>
        </section>

        {/* Image feature */}
        <section className="story-image-feature">
          <div className="story-image-feature-overlay" />

          <div className="container story-image-feature-content">
            <span className="eyebrow">A PHILOSOPHY IN MOTION</span>

            <h2>
              Designed to
              <br />
              <em>leave an impression.</em>
            </h2>
          </div>
        </section>

        {/* Principles */}
        <section className="story-principles section-padding">
          <div className="container">
            <div className="story-section-heading">
              <span className="eyebrow">02 / WHAT DEFINES US</span>

              <h2>
                Three principles.
                <br />
                <em>One vision.</em>
              </h2>
            </div>

            <div className="story-principle-list">
              {principles.map((principle) => (
                <article
                  className="story-principle"
                  key={principle.number}
                >
                  <span>{principle.number}</span>

                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>

                  <MoveUpRight size={19} strokeWidth={1.2} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="story-timeline section-padding">
          <div className="container">
            <div className="story-section-heading">
              <span className="eyebrow">03 / THE EVOLUTION</span>

              <h2>
                An idea in
                <br />
                <em>the making.</em>
              </h2>
            </div>

            <div className="story-timeline-list">
              {milestones.map((milestone) => (
                <article
                  className="story-timeline-item"
                  key={milestone.year}
                >
                  <span className="story-timeline-year">
                    {milestone.year}
                  </span>

                  <div className="story-timeline-marker">
                    <span />
                  </div>

                  <div className="story-timeline-copy">
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="story-cta section-padding">
          <div className="container">
            <span className="eyebrow">THE STORY CONTINUES</span>

            <h2>
              The future
              <br />
              is <em>unwritten.</em>
            </h2>

            <p>
              Explore the machines imagined through the AURELION philosophy.
            </p>

            <Link href="/collection" className="story-cta-link">
              EXPLORE THE COLLECTION
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}