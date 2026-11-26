
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
}

export function VehicleCard({ vehicle, index }: VehicleCardProps) {
  return (
    <article className="vehicle-card">
      {/* Vehicle photography */}
      <Link
        href={`/vehicles/${vehicle.slug}`}
        className="vehicle-image"
        style={{ backgroundImage: `url("${vehicle.image}")` }}
        aria-label={`Discover the AURELION ${vehicle.name}`}
      >
        <span className="vehicle-number">
          0{index + 1}
        </span>

        <span className="vehicle-image-link">
          <ArrowUpRight size={19} />
        </span>
      </Link>

      <div className="vehicle-card-content">
        <div>
          <span className="eyebrow">{vehicle.category}</span>
          <h3>{vehicle.name}</h3>
          <p>{vehicle.tagline}</p>
        </div>

        <div className="vehicle-card-bottom">
          <span>{vehicle.horsepower.toLocaleString()} HP</span>
          <Link href={`/vehicles/${vehicle.slug}`}>
            EXPLORE MODEL
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
