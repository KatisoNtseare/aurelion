"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowUpRight, Check, Copy, RotateCcw } from "lucide-react";
import Link from "next/link";
import { vehicles } from "@/data/vehicles";

const paintOptions = [
  { name: "Obsidian Black", value: "#17191b", surcharge: 0 },
  { name: "Titanium Silver", value: "#aeb4b8", surcharge: 180000 },
  { name: "Rosso Velocita", value: "#7d2025", surcharge: 240000 },
  { name: "Champagne Gold", value: "#a88b62", surcharge: 320000 },
  { name: "Arctic White", value: "#e8e8e3", surcharge: 120000 },
];

const wheelOptions = [
  { name: "Aero Forged", surcharge: 0, style: "aero" },
  { name: "Turbine Carbon", surcharge: 185000, style: "turbine" },
  { name: "Monoblock Sport", surcharge: 125000, style: "mono" },
];

const interiorOptions = [
  { name: "Onyx Leather", value: "#242321", surcharge: 0 },
  { name: "Saddle Tan", value: "#9a6745", surcharge: 95000 },
  { name: "Ivory Nappa", value: "#d8d0c1", surcharge: 145000 },
];

const basePrices: Record<string, number> = {
  apex: 28500000,
  veyra: 14800000,
  solis: 18200000,
};

const currency = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
  maximumFractionDigits: 0,
});

export function Configurator() {
  const [modelSlug, setModelSlug] = useState(vehicles[0].slug);
  const [paint, setPaint] = useState(paintOptions[0]);
  const [wheels, setWheels] = useState(wheelOptions[0]);
  const [interior, setInterior] = useState(interiorOptions[0]);
  const [copied, setCopied] = useState(false);

  const vehicle = vehicles.find((item) => item.slug === modelSlug) ?? vehicles[0];

  const total = useMemo(
    () =>
      basePrices[modelSlug] +
      paint.surcharge +
      wheels.surcharge +
      interior.surcharge,
    [modelSlug, paint, wheels, interior],
  );

  const configuration = [
    "AURELION PERSONAL CONFIGURATION",
    `Model: ${vehicle.name}`,
    `Exterior: ${paint.name}`,
    `Wheels: ${wheels.name}`,
    `Interior: ${interior.name}`,
    `Estimated concept price: ${currency.format(total)}`,
  ].join("\n");

  async function copyConfiguration() {
    try {
      await navigator.clipboard.writeText(configuration);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function resetConfiguration() {
    setModelSlug(vehicles[0].slug);
    setPaint(paintOptions[0]);
    setWheels(wheelOptions[0]);
    setInterior(interiorOptions[0]);
  }

  return (
    <main className="configurator-page">
      <section className="configurator-heading container">
        <Link href="/collection" className="back-link">
          <ArrowLeft size={15} /> BACK TO THE COLLECTION
        </Link>
        <div className="configurator-title-row">
          <div>
            <span className="eyebrow">AURELION ATELIER / PERSONAL COMMISSION</span>
            <h1>Make it <em>yours.</em></h1>
            <p>Every detail, considered. Create a specification that reflects you.</p>
          </div>
          <span className="configurator-edition">CONFIGURATOR 001<br />CONCEPT EXPERIENCE</span>
        </div>
      </section>

      <section className="configurator-workspace container">
        <div className="configurator-preview">
          <div
            className="configurator-car-image"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0,0,0,.42), transparent 65%), url("${vehicle.image}")`,
              filter: paint.name === "Obsidian Black" ? "brightness(.82) contrast(1.08)" : "brightness(.94) contrast(1.04)",
            }}
          />
          <div className="preview-topline">
            <span>YOUR SPECIFICATION</span>
            <span>0{vehicles.findIndex((item) => item.slug === modelSlug) + 1} / 03</span>
          </div>
          <div className="preview-bottom">
            <div>
              <span className="eyebrow">{vehicle.category}</span>
              <h2>{vehicle.name}</h2>
              <p>{vehicle.tagline}</p>
            </div>
            <span className="preview-horsepower">{vehicle.horsepower.toLocaleString()} <small>HP</small></span>
          </div>
          <div className="preview-paint-chip" style={{ background: paint.value }} title={paint.name} />
        </div>

        <aside className="configurator-controls">
          <div className="configurator-controls-heading">
            <div>
              <span className="eyebrow">01 — DEFINE YOUR MACHINE</span>
              <h2>Specification</h2>
            </div>
            <button className="reset-config" onClick={resetConfiguration} aria-label="Reset configuration">
              <RotateCcw size={14} /> RESET
            </button>
          </div>

          <div className="config-group">
            <div className="config-label-row">
              <span>MODEL</span><span>01 / 04</span>
            </div>
            <div className="model-options">
              {vehicles.map((item) => (
                <button
                  key={item.slug}
                  className={`model-option ${modelSlug === item.slug ? "is-selected" : ""}`}
                  onClick={() => setModelSlug(item.slug)}
                  aria-pressed={modelSlug === item.slug}
                >
                  <span>{item.name}</span>
                  {modelSlug === item.slug && <Check size={15} />}
                </button>
              ))}
            </div>
          </div>

          <div className="config-group">
            <div className="config-label-row">
              <span>EXTERIOR FINISH</span><span>02 / 04</span>
            </div>
            <div className="swatch-options">
              {paintOptions.map((option) => (
                <button
                  key={option.name}
                  className={`paint-swatch ${paint.name === option.name ? "is-selected" : ""}`}
                  style={{ "--swatch": option.value } as React.CSSProperties}
                  onClick={() => setPaint(option)}
                  aria-label={option.name}
                  aria-pressed={paint.name === option.name}
                  title={option.name}
                />
              ))}
            </div>
            <div className="selected-option">
              <span>{paint.name}</span>
              <span>{paint.surcharge ? `+${currency.format(paint.surcharge)}` : "Included"}</span>
            </div>
          </div>

          <div className="config-group">
            <div className="config-label-row">
              <span>WHEEL DESIGN</span><span>03 / 04</span>
            </div>
            <div className="choice-list">
              {wheelOptions.map((option) => (
                <button
                  key={option.name}
                  className={`choice-option ${wheels.name === option.name ? "is-selected" : ""}`}
                  onClick={() => setWheels(option)}
                  aria-pressed={wheels.name === option.name}
                >
                  <span className={`wheel-symbol wheel-${option.style}`}><i /></span>
                  <span>{option.name}</span>
                  <small>{option.surcharge ? `+${currency.format(option.surcharge)}` : "Included"}</small>
                  {wheels.name === option.name && <Check size={14} />}
                </button>
              ))}
            </div>
          </div>

          <div className="config-group">
            <div className="config-label-row">
              <span>INTERIOR MATERIAL</span><span>04 / 04</span>
            </div>
            <div className="interior-options">
              {interiorOptions.map((option) => (
                <button
                  key={option.name}
                  className={`interior-option ${interior.name === option.name ? "is-selected" : ""}`}
                  onClick={() => setInterior(option)}
                  aria-pressed={interior.name === option.name}
                >
                  <span style={{ background: option.value }} />
                  <span>{option.name}</span>
                  {interior.name === option.name && <Check size={14} />}
                </button>
              ))}
            </div>
          </div>

          <div className="config-total">
            <span>ESTIMATED CONFIGURATION</span>
            <strong>{currency.format(total)}</strong>
            <small>Illustrative concept pricing. Not a commercial offer.</small>
            <button className="copy-config" onClick={copyConfiguration}>
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? "CONFIGURATION COPIED" : "COPY MY CONFIGURATION"}
              <ArrowUpRight size={15} />
            </button>
          </div>
        </aside>
      </section>

      <div className="configurator-footnote container">
        <span>CRAFTED WITH INTENTION / AURELION ATELIER</span>
        <span>SCROLL TO EXPLORE <ArrowDown size={12} /></span>
      </div>
    </main>
  );
}
