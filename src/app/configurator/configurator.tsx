
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  RotateCcw,
  Sparkles,
} from "lucide-react";

import { vehicles } from "@/data/vehicles";
import styles from "./configurator.module.css";

const paintOptions = [
  { name: "Obsidian Black", color: "#171819", price: 0 },
  { name: "Arctic White", color: "#e9e8e3", price: 85000 },
  { name: "Titanium Silver", color: "#92999d", price: 95000 },
  { name: "Midnight Blue", color: "#172b40", price: 115000 },
  { name: "British Racing Green", color: "#1c3930", price: 125000 },
  { name: "Rosso Corsa", color: "#862c2d", price: 145000 },
];

const wheelOptions = [
  { name: "Sculpted Silver", color: "#b9bdc0", price: 0 },
  { name: "Satin Black", color: "#252729", price: 45000 },
  { name: "Titanium", color: "#777c80", price: 65000 },
  { name: "Champagne Gold", color: "#aa9067", price: 85000 },
];

const interiorOptions = [
  { name: "Obsidian Leather", color: "#252322", price: 0 },
  { name: "Ivory Leather", color: "#ded5c5", price: 65000 },
  { name: "Burgundy Leather", color: "#542b30", price: 85000 },
  { name: "Cognac Leather", color: "#9a6848", price: 95000 },
];

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(value);

const getBasePrice = (price: string) =>
  Number(price.replace(/[^\d]/g, ""));

export function Configurator() {
  const [vehicleIndex, setVehicleIndex] = useState(0);
  const [paintIndex, setPaintIndex] = useState(0);
  const [wheelIndex, setWheelIndex] = useState(0);
  const [interiorIndex, setInteriorIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const vehicle = vehicles[vehicleIndex];
  const paint = paintOptions[paintIndex];
  const wheels = wheelOptions[wheelIndex];
  const interior = interiorOptions[interiorIndex];

  const estimatedPrice = useMemo(() => {
    return (
      getBasePrice(vehicle.price) +
      paint.price +
      wheels.price +
      interior.price
    );
  }, [vehicle, paint, wheels, interior]);

  const resetConfiguration = () => {
    setVehicleIndex(0);
    setPaintIndex(0);
    setWheelIndex(0);
    setInteriorIndex(0);
    setCopied(false);
  };

  const changeVehicle = (direction: number) => {
    setVehicleIndex((current) => {
      return (current + direction + vehicles.length) % vehicles.length;
    });
  };

  const copyConfiguration = async () => {
    const configuration = [
      "AURELION ATELIER",
      "-------------------------",
      `Model: ${vehicle.name}`,
      `Exterior: ${paint.name}`,
      `Wheels: ${wheels.name}`,
      `Interior: ${interior.name}`,
      `Estimated price: ${formatPrice(estimatedPrice)}`,
      "",
      "Concept configuration only.",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(configuration);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className={styles.atelier}>
      <div className={styles.topBar}>
        <div>
          <span className={styles.topLabel}>AURELION / PERSONALISATION</span>
          <h1>THE ATELIER<span>.</span></h1>
        </div>

        <button
          className={styles.resetButton}
          onClick={resetConfiguration}
          type="button"
        >
          <RotateCcw size={15} />
          RESET CONFIGURATION
        </button>
      </div>

      <div className={styles.layout}>
        {/* Vehicle preview */}
        <div className={styles.preview}>
          <div className={styles.previewImage}>
            <Image
              key={vehicle.image}
              src={vehicle.image}
              alt={`${vehicle.name} concept vehicle`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 65vw"
              className={styles.vehicleImage}
              unoptimized
            />

            <div className={styles.imageOverlay} />

            <div className={styles.previewTop}>
              <span>01 / VEHICLE SELECTION</span>
              <span>CONCEPT CONFIGURATION</span>
            </div>

            <div className={styles.vehicleIdentity}>
              <span>{vehicle.category}</span>
              <h2>{vehicle.name}</h2>
              <p>{vehicle.tagline}</p>
            </div>

            <div className={styles.previewNavigation}>
              <button
                type="button"
                onClick={() => changeVehicle(-1)}
                aria-label="Previous vehicle"
              >
                <ArrowLeft size={18} />
              </button>

              <span>
                0{vehicleIndex + 1} <i>/</i> 0{vehicles.length}
              </span>

              <button
                type="button"
                onClick={() => changeVehicle(1)}
                aria-label="Next vehicle"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className={styles.vehicleSelector}>
            {vehicles.map((item, index) => (
              <button
                type="button"
                key={item.slug}
                className={`${styles.vehicleTab} ${
                  vehicleIndex === index ? styles.activeVehicle : ""
                }`}
                onClick={() => setVehicleIndex(index)}
              >
                <span>0{index + 1}</span>
                <strong>{item.name}</strong>
                <small>{item.category}</small>
              </button>
            ))}
          </div>

          <div className={styles.specifications}>
            <div>
              <span>POWER</span>
              <strong>{vehicle.horsepower.toLocaleString()} HP</strong>
            </div>
            <div>
              <span>ACCELERATION</span>
              <strong>{vehicle.acceleration}</strong>
            </div>
            <div>
              <span>TOP SPEED</span>
              <strong>{vehicle.topSpeed}</strong>
            </div>
          </div>
        </div>

        {/* Configuration controls */}
        <aside className={styles.controls}>
          <div className={styles.controlsHeading}>
            <div>
              <span className={styles.sectionLabel}>YOUR SPECIFICATION</span>
              <h2>Make it <em>yours.</em></h2>
            </div>
            <Sparkles size={19} strokeWidth={1.3} />
          </div>

          {/* Exterior paint */}
          <section className={styles.optionSection}>
            <div className={styles.optionHeading}>
              <div>
                <span>01 / EXTERIOR</span>
                <h3>Paint finish</h3>
              </div>
              <strong>{paint.name}</strong>
            </div>

            <div className={styles.swatches}>
              {paintOptions.map((option, index) => (
                <button
                  key={option.name}
                  type="button"
                  title={option.name}
                  aria-label={option.name}
                  aria-pressed={paintIndex === index}
                  className={`${styles.swatch} ${
                    paintIndex === index ? styles.selectedSwatch : ""
                  }`}
                  style={{ backgroundColor: option.color }}
                  onClick={() => setPaintIndex(index)}
                >
                  {paintIndex === index && <Check size={15} />}
                </button>
              ))}
            </div>

            <div className={styles.optionFooter}>
              <span>{paint.name}</span>
              <span>
                {paint.price === 0 ? "INCLUDED" : `+ ${formatPrice(paint.price)}`}
              </span>
            </div>
          </section>

          {/* Wheel finish */}
          <section className={styles.optionSection}>
            <div className={styles.optionHeading}>
              <div>
                <span>02 / WHEELS</span>
                <h3>Wheel finish</h3>
              </div>
              <strong>{wheels.name}</strong>
            </div>

            <div className={styles.swatches}>
              {wheelOptions.map((option, index) => (
                <button
                  key={option.name}
                  type="button"
                  title={option.name}
                  aria-label={option.name}
                  aria-pressed={wheelIndex === index}
                  className={`${styles.swatch} ${
                    wheelIndex === index ? styles.selectedSwatch : ""
                  }`}
                  style={{ backgroundColor: option.color }}
                  onClick={() => setWheelIndex(index)}
                >
                  {wheelIndex === index && <Check size={15} />}
                </button>
              ))}
            </div>

            <div className={styles.optionFooter}>
              <span>{wheels.name}</span>
              <span>
                {wheels.price === 0
                  ? "INCLUDED"
                  : `+ ${formatPrice(wheels.price)}`}
              </span>
            </div>
          </section>

          {/* Interior */}
          <section className={styles.optionSection}>
            <div className={styles.optionHeading}>
              <div>
                <span>03 / INTERIOR</span>
                <h3>Interior material</h3>
              </div>
              <strong>{interior.name}</strong>
            </div>

            <div className={styles.swatches}>
              {interiorOptions.map((option, index) => (
                <button
                  key={option.name}
                  type="button"
                  title={option.name}
                  aria-label={option.name}
                  aria-pressed={interiorIndex === index}
                  className={`${styles.swatch} ${
                    interiorIndex === index ? styles.selectedSwatch : ""
                  }`}
                  style={{ backgroundColor: option.color }}
                  onClick={() => setInteriorIndex(index)}
                >
                  {interiorIndex === index && <Check size={15} />}
                </button>
              ))}
            </div>

            <div className={styles.optionFooter}>
              <span>{interior.name}</span>
              <span>
                {interior.price === 0
                  ? "INCLUDED"
                  : `+ ${formatPrice(interior.price)}`}
              </span>
            </div>
          </section>

          {/* Price summary */}
          <div className={styles.priceSummary}>
            <span>YOUR ESTIMATED CONFIGURATION</span>
            <strong>{formatPrice(estimatedPrice)}</strong>
            <small>Illustrative concept pricing in South African Rand.</small>

            <button
              type="button"
              onClick={copyConfiguration}
              className={styles.copyButton}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "COPIED TO CLIPBOARD" : "COPY CONFIGURATION"}
            </button>
          </div>

          <p className={styles.disclaimer}>
            AURELION is a fictional automotive concept brand. All vehicles,
            specifications, options and prices are illustrative and do not
            represent real products or offers.
          </p>
        </aside>
      </div>
    </section>
  );
}
