import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#090909] px-5 pb-8 pt-24 sm:px-8 md:pt-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start justify-between gap-10 pb-20 md:flex-row md:items-end md:pb-24">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a88b62]">
              THE ART OF MOTION
            </span>
            <h2 className="mt-5 text-[clamp(3.4rem,8vw,6.6rem)] leading-none tracking-[-0.06em] text-[#eae6df]">
              Move beyond.
            </h2>
          </div>

          <Link
            href="/collection"
            className="group inline-flex items-center gap-4 border-b border-[#a88b62] pb-3 font-mono text-[10px] tracking-[0.12em] text-[#eae6df] transition-all duration-300 hover:gap-6 hover:text-[#a88b62]"
          >
            DISCOVER AURELION
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <Link
            href="/"
            className="font-serif text-[22px] tracking-[0.13em] text-[#eae6df]"
          >
            AURELION<span className="ml-1 align-top font-sans text-[9px] text-[#a88b62]">®</span>
          </Link>

          <p className="font-mono text-[9px] tracking-[0.08em] text-[#a9a49d]">
            © 2026 AURELION. A fictional automotive concept.
          </p>

          <span className="font-mono text-[9px] tracking-[0.08em] text-[#a9a49d]">
            DESIGNED WITHOUT COMPROMISE.
          </span>
        </div>
      </div>
    </footer>
  );
}
