
import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { Introduction } from "@/components/sections/introduction";
import { FeaturedCollection } from "@/components/sections/featured-collection";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Introduction />
        <FeaturedCollection />

        {/* Engineering brand statement */}
        <section className="home-statement">
          <div className="home-statement-image" />
          <div className="home-statement-overlay" />

          <div className="container home-statement-content">
            <span className="eyebrow">03 / THE PURSUIT OF EXCELLENCE</span>

            <h2>
              Precision is
              <br />
              <em>not an option.</em>
              <br />
              It is everything.
            </h2>

            <p>
              Every line has intention. Every component has purpose.
              Discover the thinking behind the AURELION philosophy.
            </p>

            <Link href="/engineering" className="home-statement-link">
              EXPLORE OUR ENGINEERING
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

        {/* Final homepage call to action */}
        <section className="home-final-cta">
          <div className="container">
            <span className="eyebrow">04 / YOUR JOURNEY BEGINS</span>

            <h2>
              Extraordinary
              <br />
              is a <em>choice.</em>
            </h2>

            <p>
              Discover the collection. Explore the possibilities.
              Experience a different perspective.
            </p>

            <Link href="/collection" className="home-final-link">
              ENTER THE WORLD OF AURELION
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
