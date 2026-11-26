import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { Introduction } from "@/components/sections/introduction";
import { FeaturedCollection } from "@/components/sections/featured-collection";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Introduction />
        <FeaturedCollection />

        {/* Engineering statement */}
        <section className="relative isolate flex min-h-[780px] items-center overflow-hidden bg-[#090909]">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-cover bg-center saturate-50"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2400&q=90")',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-[#080909]/95 via-[#080909]/75 to-[#080909]/10 max-md:bg-[#080909]/75"
          />

          <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 md:py-32">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a88b62]">
              03 / THE PURSUIT OF EXCELLENCE
            </span>

            <h2 className="mt-8 max-w-5xl text-[clamp(3.5rem,8.5vw,7.2rem)] leading-[0.94] tracking-[-0.065em] text-[#eae6df]">
              Precision is
              <br />
              <em className="font-normal text-[#a88b62]">not an option.</em>
              <br />
              It is everything.
            </h2>

            <p className="mt-8 max-w-[420px] text-[13px] leading-8 text-white/65">
              Every line has intention. Every component has purpose.
              Discover the thinking behind the AURELION philosophy.
            </p>

            <Link
              href="/engineering"
              className="group mt-9 inline-flex items-center gap-4 border-b border-[#a88b62] pb-3 font-mono text-[10px] tracking-[0.12em] transition-all duration-300 hover:gap-6"
            >
              EXPLORE OUR ENGINEERING
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

        {/* Final homepage call to action */}
        <section className="bg-[#eae6df] px-5 py-28 text-center text-[#090909] sm:px-8 md:py-36">
          <div className="mx-auto max-w-[1440px]">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#94734e]">
              04 / YOUR JOURNEY BEGINS
            </span>

            <h2 className="mt-8 text-[clamp(4rem,10vw,8rem)] leading-[0.9] tracking-[-0.07em]">
              Extraordinary
              <br />
              is a <em className="font-normal text-[#94734e]">choice.</em>
            </h2>

            <p className="mx-auto mt-8 max-w-[440px] text-[13px] leading-7 text-[#69645d]">
              Discover the collection. Explore the possibilities.
              Experience a different perspective.
            </p>

            <Link
              href="/collection"
              className="group mt-9 inline-flex items-center gap-4 border-b border-[#94734e] pb-3 font-mono text-[10px] tracking-[0.12em] transition-all duration-300 hover:gap-6"
            >
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
