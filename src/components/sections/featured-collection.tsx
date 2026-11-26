import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { vehicles } from "@/data/vehicles";

export function FeaturedCollection() {
  return (
    <section className="bg-[#111211] py-24 md:py-[140px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-[75px] md:flex-row md:items-end">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a88b62]">
              02 / THE COLLECTION
            </span>
            <h2 className="mt-7 text-[clamp(3rem,6.5vw,5.3rem)] leading-[0.98] tracking-[-0.06em] text-[#eae6df]">
              Three expressions.
              <br />
              <em className="font-normal text-[#a88b62]">One philosophy.</em>
            </h2>
          </div>

          <Link
            href="/collection"
            className="group inline-flex items-center gap-3 border-b border-[#a88b62] pb-3 font-mono text-[10px] tracking-[0.12em] transition-all duration-300 hover:gap-5"
          >
            EXPLORE ALL VEHICLES
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-20">
          {vehicles.map((vehicle, index) => (
            <article
              className={index === 1 ? "md:mt-24" : index === 2 ? "md:col-span-2 md:mx-auto md:w-1/2" : ""}
              key={vehicle.slug}
            >
              <Link
                href={`/vehicles/${vehicle.slug}`}
                className="group relative block aspect-[1.25] overflow-hidden bg-[#242424]"
                style={{ backgroundImage: `url("${vehicle.image}")`, backgroundSize: "cover", backgroundPosition: "center" }}
                aria-label={`Discover ${vehicle.name}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent transition-colors duration-500 group-hover:from-black/70" />
                <span className="absolute left-6 top-6 z-10 font-mono text-[10px] tracking-[0.12em] text-white/80">
                  0{index + 1} / 0{vehicles.length}
                </span>
                <span className="absolute bottom-6 right-6 z-10 grid size-11 place-items-center rounded-full border border-white/60 text-white transition-all duration-300 group-hover:border-[#eae6df] group-hover:bg-[#eae6df] group-hover:text-[#090909]">
                  <ArrowUpRight size={20} />
                </span>
              </Link>

              <div className="pt-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#a88b62]">
                  {vehicle.category}
                </span>
                <h3 className="mt-2 text-[clamp(2.5rem,5vw,3.6rem)] tracking-[-0.05em] text-[#eae6df]">
                  {vehicle.name}
                </h3>
                <p className="mt-2 text-[13px] text-[#a9a49d]">
                  {vehicle.tagline}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 font-mono text-[9px] tracking-[0.08em] text-[#a9a49d]">
                  <span>{vehicle.horsepower.toLocaleString()} HP</span>
                  <span>{vehicle.powertrain}</span>
                  <Link
                    href={`/vehicles/${vehicle.slug}`}
                    className="inline-flex items-center gap-2 text-[#eae6df] transition-colors hover:text-[#a88b62]"
                  >
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
