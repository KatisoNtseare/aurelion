import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

export function Introduction() {
  return (
    <section className="bg-[#eae6df] py-24 text-[#090909] md:py-[150px]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-14 px-5 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:gap-24">
        <div>
          <Eyebrow>01 / OUR PHILOSOPHY</Eyebrow>

          <h2 className="mt-8 text-[clamp(3.4rem,7vw,6.25rem)] leading-[0.98] tracking-[-0.055em]">
            Not built to
            <br />
            <span className="italic">follow.</span>
            <br />
            Born to lead.
          </h2>
        </div>

        <div className="max-w-[450px] self-end pb-2 md:justify-self-end">
          <p className="mb-6 text-[19px] leading-[1.6] text-[#25231f]">
            We believe the automobile should be more than a machine. It should
            be an expression of imagination, engineering and human ambition.
          </p>

          <p className="text-sm leading-7 text-[#66615a]">
            Every AURELION creation is conceived with a singular purpose: to
            challenge convention and redefine what is possible.
          </p>

          <Link
            href="/our-story"
            className="group mt-8 inline-flex items-center gap-4 border-b border-[#94734e] pb-3 font-mono text-[10px] tracking-[0.12em] text-[#171717] transition-all duration-300 hover:gap-6"
          >
            DISCOVER OUR PHILOSOPHY
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
