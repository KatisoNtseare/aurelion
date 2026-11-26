
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { vehicles } from "@/data/vehicles";

export function FeaturedCollection() {
  return (
    <section className="featured-collection">
      <div className="container">
        <div className="featured-heading">
          <div>
            <span className="eyebrow">02 / THE COLLECTION</span>
            <h2>
              Three expressions.
              <br />
              <em>One philosophy.</em>
            </h2>
          </div>

          <Link href="/collection" className="featured-all-link">
            EXPLORE ALL VEHICLES <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="featured-grid">
          {vehicles.map((vehicle, index) => (
            <article className="featured-card" key={vehicle.slug}>
              <Link
                href={`/vehicles/${vehicle.slug}`}
                className="featured-image"
                style={{ backgroundImage: `url("${vehicle.image}")` }}
                aria-label={`Discover ${vehicle.name}`}
              >
                <span className="featured-number">
                  0{index + 1} / 0{vehicles.length}
                </span>

                <span className="featured-image-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </Link>

              <div className="featured-card-content">
                <div>
                  <span className="eyebrow">{vehicle.category}</span>
                  <h3>{vehicle.name}</h3>
                  <p>{vehicle.tagline}</p>
                </div>

                <div className="featured-card-bottom">
                  <span>{vehicle.horsepower.toLocaleString()} HP</span>
                  <span>{vehicle.powertrain}</span>
                  <Link href={`/vehicles/${vehicle.slug}`}>
                    DISCOVER <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
