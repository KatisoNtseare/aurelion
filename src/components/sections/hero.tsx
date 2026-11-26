
"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="hero">
      {/* Cinematic background photography */}
      <div className="hero-image" />

      {/* Dark gradient keeps text readable */}
      <div className="hero-overlay" />

      <div className="hero-content container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="eyebrow">
            THE ART OF MOTION / EST. 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Beyond
          <br />
          <span>the ordinary.</span>
        </motion.h1>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p>
            Engineering emotion.
            <br />
            Defining the extraordinary.
          </p>

          <Link href="/collection" className="hero-link">
            EXPLORE THE COLLECTION
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO DISCOVER</span>
        <ArrowDown size={15} />
      </div>

      <div className="hero-index">
        <span>01</span>
        <span className="index-line" />
        <span>04</span>
      </div>
    </section>
  );
}
