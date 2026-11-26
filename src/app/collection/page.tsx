
import type { Metadata } from "next";
import { vehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/vehicles/vehicle-card";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "The Collection",
  description: "Explore the AURELION automotive collection.",
};

export default function CollectionPage() {
  return (
    <>
      <Navbar />

      <main className="collection-page">
        <section className="collection-heading container">
          <Eyebrow>THE AURELION COLLECTION / 2026</Eyebrow>

          <h1>
            Machines of
            <br />
            <span>distinction.</span>
          </h1>

          <p>
            Three expressions of performance.
            One uncompromising philosophy.
          </p>

          <div className="collection-count">
            <span>01 — 03</span>
            <span>THE CURRENT COLLECTION</span>
          </div>
        </section>

        <section className="collection-grid container">
          {vehicles.map((vehicle, index) => (
            <VehicleCard
              key={vehicle.slug}
              vehicle={vehicle}
              index={index}
            />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
