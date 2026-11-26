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

type ConfigOption = {
  name: string;
  color: string;
  price: number;
};

const paintOptions: ConfigOption[] = [
  { name: "Obsidian Black", color: "#171819", price: 0 },
  { name: "Arctic White", color: "#e9e8e3", price: 85000 },
  { name: "Titanium Silver", color: "#92999d", price: 95000 },
  { name: "Midnight Blue", color: "#172b40", price: 115000 },
  { name: "British Racing Green", color: "#1c3930", price: 125000 },
  { name: "Rosso Corsa", color: "#862c2d", price: 145000 },
];

const wheelOptions: ConfigOption[] = [
  { name: "Sculpted Silver", color: "#b9bdc0", price: 0 },
  { name: "Satin Black", color: "#252729", price: 45000 },
  { name: "Titanium", color: "#777c80", price: 65000 },
  { name: "Champagne Gold", color: "#aa9067", price: 85000 },
];

const interiorOptions: ConfigOption[] = [
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

const getBasePrice = (price: string) => Number(price.replace(/[^\d]/g, ""));

function OptionGroup({
  number,
  label,
  title,
  options,
  selectedIndex,
  onSelect,
}: {
  number: string;
  label: string;
  title: string;
  options: ConfigOption[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}) {
  const selected = options[selectedIndex];

  return (
    <section className="border-t border-white/10 py-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="font-mono text-[9px] tracking-[0.16em] text-[#b69a70]">
            {number} / {label}
          </span>
          <h3 className="mt-2 text-lg font-normal">{title}</h3>
        </div>
        <strong className="max-w-[125px] text-right text-[10px] font-normal leading-relaxed text-[#c7c5bd]">
          {selected.name}
        </strong>
      </div>

      <div className="my-6 flex flex-wrap gap-4">
        {options.map((option, index) => {
          const isSelected = selectedIndex === index;

          return (
            <button
              key={option.name}
              type="button"
              title={option.name}
              aria-label={option.name}
              aria-pressed={isSelected}
              onClick={() => onSelect(index)}
              className={`relative grid size-[34px] place-items-center rounded-full border-2 border-transparent text-white outline outline-1 outline-offset-4 transition hover:scale-110 focus-visible:outline-[#b69a70] ${isSelected ? "outline-[#b69a70]" : "outline-transparent"}`}
              style={{ backgroundColor: option.color }}
            >
              {isSelected && <Check size={15} />}
            </button>
          );
        })}
      </div>

      <div className="flex justify-between gap-3 font-mono text-[9px] tracking-[0.08em] text-[#92938e]">
        <span>{selected.name}</span>
        <span>
          {selected.price === 0 ? "INCLUDED" : `+ ${formatPrice(selected.price)}`}
        </span>
      </div>
    </section>
  );
}

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

  const estimatedPrice = useMemo(
    () =>
      getBasePrice(vehicle.price) +
      paint.price +
      wheels.price +
      interior.price,
    [vehicle, paint, wheels, interior],
  );

  const resetConfiguration = () => {
    setVehicleIndex(0);
    setPaintIndex(0);
    setWheelIndex(0);
    setInteriorIndex(0);
    setCopied(false);
  };

  const changeVehicle = (direction: number) => {
    setVehicleIndex(
      (current) => (current + direction + vehicles.length) % vehicles.length,
    );
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
    <section className="min-h-screen bg-[#111211] px-5 pb-24 pt-36 text-[#f2f0eb] sm:px-8 lg:px-[5vw]">
      <div className="mx-auto mb-10 flex max-w-[1800px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span className="font-mono text-[10px] font-semibold tracking-[0.24em] text-[#b69a70]">
            AURELION / PERSONALISATION
          </span>
          <h1 className="mt-3 text-[clamp(2.2rem,5vw,4.1rem)] font-normal tracking-[-0.06em]">
            THE ATELIER<span className="text-[#b69a70]">.</span>
          </h1>
        </div>

        <button
          className="inline-flex items-center gap-3 border border-white/10 px-4 py-3 text-[9px] tracking-[0.13em] text-[#e9e8e3] transition-colors hover:border-[#b69a70] hover:text-[#b69a70]"
          onClick={resetConfiguration}
          type="button"
        >
          <RotateCcw size={15} />
          RESET CONFIGURATION
        </button>
      </div>

      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(340px,0.75fr)]">
        {/* Vehicle preview */}
        <div className="min-w-0">
          <div className="relative h-[520px] min-h-[420px] max-h-[760px] overflow-hidden bg-[#282a28] md:h-[min(65vw,720px)] md:min-h-[590px]">
            <Image
              key={vehicle.image}
              src={vehicle.image}
              alt={`${vehicle.name} concept vehicle`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 65vw"
              className="object-cover object-center transition-transform duration-1000 hover:scale-[1.035]"
              unoptimized
            />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.48),transparent_28%),linear-gradient(0deg,rgba(0,0,0,0.78),transparent_55%)]" />

            <div className="absolute left-5 right-5 top-6 z-10 flex justify-between gap-4 font-mono text-[8px] tracking-[0.16em] text-white/80 sm:left-7 sm:right-7 sm:text-[9px]">
              <span>01 / VEHICLE SELECTION</span>
              <span>CONCEPT CONFIGURATION</span>
            </div>

            <div className="absolute bottom-[15%] left-6 z-10 sm:left-[7%]">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#b69a70]">
                {vehicle.category}
              </span>
              <h2 className="mt-3 text-[clamp(4rem,10vw,8.1rem)] leading-[0.9] tracking-[-0.07em]">
                {vehicle.name}
              </h2>
              <p className="mt-4 text-sm tracking-[0.02em] text-white/75">
                {vehicle.tagline}
              </p>
            </div>

            <div className="absolute bottom-6 right-5 z-10 flex items-center gap-3 sm:bottom-9 sm:right-7 sm:gap-4">
              <button
                type="button"
                onClick={() => changeVehicle(-1)}
                aria-label="Previous vehicle"
                className="grid size-9 place-items-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-[#111]"
              >
                <ArrowLeft size={18} />
              </button>

              <span className="font-mono text-[11px] tracking-wider text-white">
                0{vehicleIndex + 1} <i className="mx-1 not-italic text-[#b69a70]">/</i> 0{vehicles.length}
              </span>

              <button
                type="button"
                onClick={() => changeVehicle(1)}
                aria-label="Next vehicle"
                className="grid size-9 place-items-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-[#111]"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 border border-t-0 border-white/10">
            {vehicles.map((item, index) => (
              <button
                type="button"
                key={item.slug}
                aria-pressed={vehicleIndex === index}
                className={`flex min-w-0 flex-col items-start gap-2 border-r border-white/10 px-3 py-4 text-left transition-colors last:border-r-0 sm:px-5 sm:py-5 ${vehicleIndex === index ? "bg-[#b69a70]/10" : "hover:bg-white/[0.03]"}`}
                onClick={() => setVehicleIndex(index)}
              >
                <span className="font-mono text-[9px] tracking-wider text-[#b69a70]">
                  0{index + 1}
                </span>
                <strong className="text-base font-medium tracking-wider sm:text-lg">
                  {item.name}
                </strong>
                <small className="text-[8px] tracking-wider text-[#92938e] sm:text-[9px]">
                  {item.category}
                </small>
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 border border-white/10">
            <div className="flex flex-col gap-2 border-r border-white/10 p-4 sm:p-5">
              <span className="font-mono text-[8px] tracking-wider text-[#92938e]">POWER</span>
              <strong className="text-base font-normal sm:text-xl">
                {vehicle.horsepower.toLocaleString()} HP
              </strong>
            </div>
            <div className="flex flex-col gap-2 border-r border-white/10 p-4 sm:p-5">
              <span className="font-mono text-[8px] tracking-wider text-[#92938e]">ACCELERATION</span>
              <strong className="text-base font-normal sm:text-xl">{vehicle.acceleration}</strong>
            </div>
            <div className="flex flex-col gap-2 p-4 sm:p-5">
              <span className="font-mono text-[8px] tracking-wider text-[#92938e]">TOP SPEED</span>
              <strong className="text-base font-normal sm:text-xl">{vehicle.topSpeed}</strong>
            </div>
          </div>
        </div>

        {/* Configuration controls */}
        <aside className="border border-white/10 bg-[#191a18] p-5 sm:p-7">
          <div className="mb-9 flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] tracking-[0.16em] text-[#b69a70]">
                YOUR SPECIFICATION
              </span>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.4rem)] tracking-[-0.05em]">
                Make it <em className="font-normal text-[#b69a70]">yours.</em>
              </h2>
            </div>
            <Sparkles size={19} strokeWidth={1.3} className="text-[#b69a70]" />
          </div>

          <OptionGroup
            number="01"
            label="EXTERIOR"
            title="Paint finish"
            options={paintOptions}
            selectedIndex={paintIndex}
            onSelect={setPaintIndex}
          />

          <OptionGroup
            number="02"
            label="WHEELS"
            title="Wheel finish"
            options={wheelOptions}
            selectedIndex={wheelIndex}
            onSelect={setWheelIndex}
          />

          <OptionGroup
            number="03"
            label="INTERIOR"
            title="Interior material"
            options={interiorOptions}
            selectedIndex={interiorIndex}
            onSelect={setInteriorIndex}
          />

          <div className="mt-3 border border-[#b69a70]/35 bg-[#b69a70]/[0.055] p-5">
            <span className="font-mono text-[9px] tracking-[0.15em] text-[#b69a70]">
              YOUR ESTIMATED CONFIGURATION
            </span>
            <strong className="mt-3 block text-[clamp(1.8rem,3vw,2.4rem)] font-normal tracking-[-0.05em]">
              {formatPrice(estimatedPrice)}
            </strong>
            <small className="mt-2 block text-[10px] leading-relaxed text-[#92938e]">
              Illustrative concept pricing in South African Rand.
            </small>

            <button
              type="button"
              onClick={copyConfiguration}
              className="mt-6 flex min-h-12 w-full items-center justify-center gap-3 border border-[#b69a70] bg-[#b69a70] px-4 py-3 text-[9px] font-bold tracking-[0.13em] text-[#171714] transition-colors hover:bg-transparent hover:text-[#b69a70]"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "COPIED TO CLIPBOARD" : "COPY CONFIGURATION"}
            </button>
          </div>

          <p className="mt-5 text-[10px] leading-[1.8] text-[#777973]">
            AURELION is a fictional automotive concept brand. All vehicles,
            specifications, options and prices are illustrative and do not
            represent real products or offers.
          </p>
        </aside>
      </div>
    </section>
  );
}
