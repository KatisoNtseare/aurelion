"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#090909]">
      {/* Cinematic background photography */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 scale-[1.03] bg-cover bg-[position:center_58%]"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=90")',
        }}
      />

      {/* Contrast overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.83),transparent_85%),linear-gradient(0deg,rgba(0,0,0,0.55),transparent_60%)]"
      />

      <div className="mx-auto w-full max-w-[1440px] px-5 pb-28 pt-36 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a88b62]">
            THE ART OF MOTION / EST. 2026
          </span>
        </motion.div>

        <motion.h1
          className="mt-8 text-[clamp(4.2rem,10vw,9.1rem)] leading-[0.92] tracking-[-0.065em] text-[#eae6df]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Beyond
          <br />
          <span className="italic">the ordinary.</span>
        </motion.h1>

        <motion.div
          className="mt-12 flex max-w-[850px] flex-col items-start justify-between gap-8 sm:flex-row sm:items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-sm leading-7 text-white/70">
            Engineering emotion.
            <br />
            Defining the extraordinary.
          </p>

          <Link
            href="/collection"
            className="group inline-flex items-center gap-4 border-b border-[#a88b62] pb-3 font-mono text-[10px] tracking-[0.12em] transition-all duration-300 hover:gap-6 hover:text-[#a88b62]"
          >
            EXPLORE THE COLLECTION
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-9 left-5 flex flex-col items-start gap-3 font-mono text-[9px] tracking-[0.14em] text-white/70 sm:left-1/2 sm:-translate-x-1/2 sm:items-center">
        <span>SCROLL TO DISCOVER</span>
        <ArrowDown size={15} />
      </div>

      <div className="absolute bottom-9 right-[5%] flex items-center gap-3 font-mono text-[10px] text-white/75">
        <span>01</span>
        <span className="h-px w-11 bg-[#a88b62]" />
        <span>04</span>
      </div>
    </section>
  );
}
