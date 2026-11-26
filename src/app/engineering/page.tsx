
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";
import { vehicles } from "@/data/vehicles";

export const metadata: Metadata = {
  title: "Engineering | AURELION",
  description:
    "Discover the engineering philosophy behind AURELION's performance concepts.",
};

const disciplines = [
  {
    number: "01",
    title: "Aerodynamics",
    subtitle: "Form follows airflow.",
    description:
      "Every surface is considered in motion. Sculpted channels, active aerodynamic concepts and a carefully managed underbody balance stability with efficiency.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=90",
    metric: "0.24",
    label: "CONCEPT DRAG COEFFICIENT",
  },
  {
    number: "02",
    title: "Lightweighting",
    subtitle: "Strength without excess.",
    description:
      "A conceptual carbon-composite monocoque meets precision-engineered aluminium structures. Every gram removed serves a purpose.",
    image:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1600&q=90",
    metric: "−18%",
    label: "TARGET MASS REDUCTION",
  },
  {
    number: "03",
    title: "Powertrain",
    subtitle: "Power, intelligently delivered.",
    description:
      "Combustion and electric architectures are developed around distinct driving characters. Intelligent torque management translates output into control.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=90",
    metric: "1,001",
    label: "APEX CONCEPT HORSEPOWER",
  },
];

const principles = [
  {
    number: "01",
    title: "Driver first",
    description:
      "Technology should amplify the connection between driver, machine and road.",
  },
  {
    number: "02",
    title: "Purposeful innovation",
    description:
      "Every system earns its place through measurable purpose and considered design.",
  },
  {
    number: "03",
    title: "Timeless by design",
    description:
      "Our engineering decisions are guided by longevity, clarity and enduring performance.",
  },
];

export default function EngineeringPage() {
  return (
    <>
      <Navbar />

      <main className="engineering-page">
        {/* Cinematic introduction */}
        <section className="engineering-hero">
          <div className="engineering-hero-image" />
          <div className="engineering-hero-overlay" />

          <div className="container engineering-hero-content">
            <span className="eyebrow">
              THE AURELION ENGINEERING PHILOSOPHY / 001
            </span>

            <h1>
              Precision is
              <br />
              <em>never accidental.</em>
            </h1>

            <div className="engineering-hero-bottom">
              <p>
                Where advanced thinking meets the instinct to move.
                Discover the principles shaping a new expression of performance.
              </p>

              <a href="#principles" className="engineering-scroll">
                EXPLORE OUR THINKING
                <ArrowDown size={15} />
              </a>
            </div>
          </div>

          <span className="engineering-hero-index">
            EST. IN IMAGINATION — BUILT FOR POSSIBILITY
          </span>
        </section>

        {/* The principles behind the marque */}
        <section
          className="engineering-intro section-padding"
          id="principles"
        >
          <div className="container">
            <div className="engineering-intro-top">
              <span className="eyebrow">BEYOND THE NUMBERS</span>

              <h2 className="engineering-intro-statement">
                Performance is not a single figure.
                It is the sum of <em>every decision.</em>
              </h2>
            </div>

            <div className="engineering-principles">
              {principles.map((principle) => (
                <article
                  className="engineering-principle"
                  key={principle.number}
                >
                  <span>{principle.number}</span>

                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering disciplines */}
        <section className="engineering-disciplines">
          {disciplines.map((item, index) => (
            <article
              className={`engineering-discipline ${
                index % 2 ? "is-reversed" : ""
              }`}
              key={item.number}
            >
              <div className="engineering-discipline-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />

                <span className="engineering-image-index">
                  AURELION / {item.number}
                </span>
              </div>

              <div className="engineering-discipline-copy">
                <span className="eyebrow">
                  ENGINEERING DISCIPLINE / {item.number}
                </span>

                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>

                <p>{item.description}</p>

                <div className="engineering-metric">
                  <strong>{item.metric}</strong>
                  <span>{item.label}</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Concept vehicle specifications */}
        <section className="engineering-collection section-padding">
          <div className="container">
            <div className="engineering-collection-heading">
              <div>
                <span className="eyebrow">
                  THREE EXPRESSIONS. ONE PHILOSOPHY.
                </span>

                <h2>
                  Engineered to
                  <br />
                  <em>feel different.</em>
                </h2>
              </div>

              <p>
                Three distinct interpretations of performance.
                Each concept explores a different relationship between
                power, precision and design.
              </p>
            </div>

            <div className="engineering-spec-grid">
              {vehicles.map((vehicle, index) => (
                <article
                  className="engineering-spec-card"
                  key={vehicle.slug}
                >
                  <span className="eyebrow">
                    0{index + 1} / {vehicle.category}
                  </span>

                  <h3>{vehicle.name}</h3>
                  <p>{vehicle.tagline}</p>

                  <div className="engineering-specs">
                    <div>
                      <strong>
                        {vehicle.horsepower.toLocaleString("en-ZA")}
                      </strong>
                      <span>HORSEPOWER</span>
                    </div>

                    <div>
                      <strong>{vehicle.acceleration}</strong>
                      <span>0–100 KM/H</span>
                    </div>

                    <div>
                      <strong>{vehicle.topSpeed}</strong>
                      <span>TOP SPEED</span>
                    </div>
                  </div>

                  <span className="engineering-powertrain">
                    {vehicle.powertrain}
                  </span>

                  <Link
                    href={`/vehicles/${vehicle.slug}`}
                    className="engineering-card-link"
                  >
                    EXPLORE MODEL
                    <ArrowUpRight size={15} />
                  </Link>
                </article>
              ))}
            </div>

            <p className="engineering-disclaimer">
              All specifications, performance figures and technologies
              are fictional concept information created for the AURELION
              design project.
            </p>
          </div>
        </section>

        {/* Configurator call to action */}
        <section className="engineering-cta">
          <div className="container">
            <span className="eyebrow">
              YOUR VISION. YOUR AURELION.
            </span>

            <h2>
              Make it
              <br />
              <em>your own.</em>
            </h2>

            <Link
              href="/configurator"
              className="engineering-cta-link"
            >
              ENTER THE CONFIGURATOR
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
