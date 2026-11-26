
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

export function Introduction() {
  return (
    <section className="introduction section-padding">
      <div className="container intro-grid">
        <div className="intro-heading">
          <Eyebrow>01 / OUR PHILOSOPHY</Eyebrow>

          <h2>
            Not built to
            <br />
            <span>follow.</span>
            <br />
            Born to lead.
          </h2>
        </div>

        <div className="intro-description">
          <p className="intro-lead">
            We believe the automobile should be more than
            a machine. It should be an expression of
            imagination, engineering and human ambition.
          </p>

          <p>
            Every AURELION creation is conceived with a
            singular purpose: to challenge convention
            and redefine what is possible.
          </p>

          <Link href="/our-story" className="text-link">
            DISCOVER OUR PHILOSOPHY
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
