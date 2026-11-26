
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { vehicles } from "@/data/vehicles";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";
import { Eyebrow } from "@/components/ui/eyebrow";

interface VehiclePageProps {
  params: Promise<{ slug: string }>;
}

// Generate static pages for our three known vehicles.
export function generateStaticParams() {
  return vehicles.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export async function generateMetadata({
  params,
}: VehiclePageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = vehicles.find((item) => item.slug === slug);

  return {
    title: vehicle ? vehicle.name : "Vehicle Not Found",
    description: vehicle?.description,
  };
}

export default async function VehiclePage({
  params,
}: VehiclePageProps) {
  const { slug } = await params;
  const vehicle = vehicles.find((item) => item.slug === slug);

  // Return the standard 404 page for unknown vehicle slugs.
  if (!vehicle) notFound();

  return (
    <>
      <Navbar />

      <main className="vehicle-detail">
        <section
          className="vehicle-detail-hero"
          style={{ backgroundImage: `url("${vehicle.image}")` }}
        >
          <div className="vehicle-detail-overlay" />

          <div className="container vehicle-detail-content">
            <Link href="/collection" className="back-link">
              <ArrowLeft size={15} />
              BACK TO COLLECTION
            </Link>

            <Eyebrow>{vehicle.category} / AURELION AUTOMOTIVE</Eyebrow>

            <h1>{vehicle.name}</h1>

            <p>{vehicle.tagline}</p>

            <span className="vehicle-price">
              FROM {vehicle.price}
            </span>
          </div>
        </section>

        <section className="vehicle-specifications section-padding">
          <div className="container">
            <div className="vehicle-description">
              <Eyebrow>THE MACHINE / 0{vehicles.indexOf(vehicle) + 1}</Eyebrow>
              <h2>{vehicle.description}</h2>
            </div>

            <div className="spec-grid">
              <div className="spec-item">
                <span>MAXIMUM POWER</span>
                <strong>{vehicle.horsepower.toLocaleString()}</strong>
                <small>HORSEPOWER</small>
              </div>

              <div className="spec-item">
                <span>0–100 KM/H</span>
                <strong>{vehicle.acceleration}</strong>
                <small>SECONDS</small>
              </div>

              <div className="spec-item">
                <span>TOP SPEED</span>
                <strong>{vehicle.topSpeed}</strong>
                <small>MAXIMUM SPEED</small>
              </div>

              <div className="spec-item">
                <span>POWERTRAIN</span>
                <strong className="powertrain">{vehicle.powertrain}</strong>
                <small>AURELION ENGINEERING</small>
              </div>
            </div>

            <Link href="/configurator" className="configure-link">
              CONFIGURE YOUR AURELION
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
