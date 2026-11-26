import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import { Eyebrow } from "@/components/ui/eyebrow";
interface VehicleCardProps { vehicle: Vehicle; index: number; }
export function VehicleCard({ vehicle, index }: VehicleCardProps) {
 return <article className={index % 2 === 1 ? "md:mt-24" : ""}>
  <Link href={`/vehicles/${vehicle.slug}`} className="group relative block aspect-[1.35] overflow-hidden bg-[#242424]" style={{backgroundImage:`url("${vehicle.image}")`,backgroundSize:"cover",backgroundPosition:"center"}} aria-label={`Discover the AURELION ${vehicle.name}`}>
   <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent transition-colors duration-500 group-hover:from-black/75"/>
   <span className="absolute left-5 top-5 z-10 font-mono text-[10px] tracking-wider text-white sm:left-6 sm:top-6">0{index+1}</span>
   <span className="absolute bottom-5 right-5 z-10 grid size-11 place-items-center rounded-full border border-white/60 text-white transition-all duration-300 group-hover:border-[#eae6df] group-hover:bg-[#eae6df] group-hover:text-[#090909] sm:bottom-6 sm:right-6"><ArrowUpRight size={19}/></span>
  </Link>
  <div className="pt-6"><Eyebrow>{vehicle.category}</Eyebrow><h3 className="mt-2 text-[clamp(2.4rem,5vw,3.2rem)] tracking-[-0.05em] text-[#eae6df]">{vehicle.name}</h3><p className="mt-1 text-[13px] text-[#a9a49d]">{vehicle.tagline}</p>
   <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5 font-mono text-[9px] tracking-[0.1em] text-[#a9a49d]"><span>{vehicle.horsepower.toLocaleString("en-ZA")} HP</span><Link href={`/vehicles/${vehicle.slug}`} className="inline-flex items-center gap-2 text-[#eae6df] transition-colors hover:text-[#a88b62]">EXPLORE MODEL <ArrowUpRight size={14}/></Link></div>
  </div>
 </article>;
}