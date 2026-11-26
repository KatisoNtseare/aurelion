import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";
import { vehicles } from "@/data/vehicles";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Explore the design philosophy, performance systems and material thinking behind the fictional AURELION marque.",
};

const disciplines = [
  {
    number: "01",
    title: "Aerodynamics",
    subtitle: "Form follows airflow.",
    copy: "Every surface is considered in motion. Sculpted channels, active aero concepts and a carefully managed underbody work together to balance stability with low-drag efficiency.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=90",
    imageAlt: "Sculpted performance car bodywork",
    metric: "0.24",
    unit: "CONCEPT DRAG COEFFICIENT",
  },
  {
    number: "02",
    title: "Lightweighting",
    subtitle: "Strength without excess.",
    copy: "A conceptual carbon-composite monocoque is paired with precision-cast aluminium structures. The objective is simple: preserve rigidity, sharpen response and remove mass where it matters.",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1600&q=90",
    imageAlt: "Detailed automotive engineering and materials",
    metric: "−18%",
    unit: "TARGET MASS VS. BASELINE",
  },
  {
    number: "03",
    title: "Powertrain",
    subtitle: "Power, intelligently delivered.",
    copy: "Combustion and electric architectures are developed around distinct driving characters. Intelligent torque management translates output into control, composure and an unmistakable response.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=90",
    imageAlt: "Performance engine detail",
    metric: "1,001",
    unit: "APEX CONCEPT HORSEPOWER",
  },
];

const principles = [
  ["01", "Driver first", "Technology should amplify the connection between driver, machine and road."],
  ["02", "Purposeful innovation", "Every system earns its place through measurable purpose and considered design."],
  ["03", "Timeless by design", "Engineering decisions are guided by longevity, clarity and enduring performance."],
];

export default function EngineeringPage() {
  return (
    <>
      <Navbar />
      <main className="engineering-page">
        <section className="engineering-hero">
          <div className="engineering-hero-image" />
          <div className="engineering-hero-shade" />
          <div className="container engineering-hero-content">
            <span className="eyebrow">THE AURELION ENGINEERING PHILOSOPHY / 001</span>
            <h1>Precision is<br /><em>never accidental.</em></h1>
            <div className="engineering-hero-bottom">
              <p>Where advanced thinking meets the instinct to move. Discover the principles shaping a new expression of performance.</p>
              <a href="#principles" className="engineering-scroll"><span>EXPLORE OUR THINKING</span><ArrowDown size={15} /></a>
            </div>
          </div>
          <span className="engineering-hero-index">EST. IN IMAGINATION — BUILT FOR POSSIBILITY</span>
        </section>

        <section className="engineering-intro section-padding" id="principles">
          <div className="container">
            <div className="engineering-intro-top">
              <span className="eyebrow">BEYOND THE NUMBERS</span>
              <p className="engineering-intro-statement">Performance is not a single figure. It is the sum of <em>every decision.</em></p>
            </div>
            <div className="engineering-principles">
              {principles.map(([number, title, copy]) => (
                <article className="engineering-principle" key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                  <MoveUpRight size={18} strokeWidth={1.2} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="engineering-disciplines">
          {disciplines.map((item, index) => (
            <article className={`engineering-discipline ${index % 2 ? "is-reversed" : ""}`} key={item.number}>
              <div className="engineering-discipline-image">
                <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 800px) 100vw, 50vw" />
                <span className="engineering-image-index">AURELION / {item.number}</span>
              </div>
              <div className="engineering-discipline-copy">
                <span className="eyebrow">ENGINEERING DISCIPLINE / {item.number}</span>
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
                <p>{item.copy}</p>
                <div className="engineering-metric"><strong>{item.metric}</strong><span>{item.unit}</span></div>
              </div>
            </article>
          ))}
        </section>

        <section className="engineering-collection section-padding">
          <div className="container">
            <div className="engineering-collection-heading">
              <div><span className="eyebrow">THREE EXPRESSIONS. ONE PHILOSOPHY.</span><h2>Engineered to<br /><em>feel different.</em></h2></div>
              <p>Each AURELION concept explores a distinct interpretation of performance. Figures shown are illustrative concept specifications, not production claims.</p>
            </div>
            <div className="engineering-spec-grid">
              {vehicles.map((vehicle, index) => (
                <article className="engineering-spec-card" key={vehicle.slug}>
                  <span className="eyebrow">0{index + 1} / {vehicle.category}</span>
                  <h3>{vehicle.name}</h3>
                  <p>{vehicle.tagline}</p>
                  <div className="engineering-specs">
                    <div><strong>{vehicle.horsepower.toLocaleString("en-ZA")}</strong><span>HP</span></div>
                    <div><strong>{vehicle.acceleration}</strong><span>0–100 KM/H</span></div>
                    <div><strong>{vehicle.topSpeed}</strong><span>TOP SPEED</span></div>
                  </div>
                  <span className="engineering-powertrain">{vehicle.powertrain}</span>
                  <Link href={`/vehicles/${vehicle.slug}`} className="engineering-card-link">EXPLORE MODEL <ArrowUpRight size={15} /></Link>
                </article>
              ))}
            </div>
            <div className="engineering-disclaimer">All performance data, technologies and vehicle specifications on this page are fictional concept information created for the AURELION design project.</div>
          </div>
        </section>

        <section className="engineering-cta">
          <div className="container engineering-cta-inner">
            <span className="eyebrow">YOUR VISION. YOUR AURELION.</span>
            <h2>Make it<br /><em>your own.</em></h2>
            <Link href="/configurator" className="engineering-cta-link">ENTER THE CONFIGURATOR <ArrowUpRight size={16} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
