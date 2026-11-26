import type { Metadata } from "next";
import { vehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/vehicles/vehicle-card";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";
import { Eyebrow } from "@/components/ui/eyebrow";
export const metadata: Metadata = { title:"The Collection", description:"Explore the AURELION automotive collection." };
export default function CollectionPage() {
 return <><Navbar/><main className="bg-[#090909] pb-24 pt-36 sm:pt-40 md:pb-32">
  <section className="mx-auto w-full max-w-[1440px] px-5 sm:px-8"><Eyebrow>THE AURELION COLLECTION / 2026</Eyebrow>
   <h1 className="mt-8 text-[clamp(4rem,10vw,8.5rem)] leading-[0.9] tracking-[-0.07em] text-[#eae6df]">Machines of<br/><em className="font-normal text-[#a88b62]">distinction.</em></h1>
   <p className="mt-7 max-w-[460px] text-sm leading-7 text-[#a9a49d]">Three expressions of performance.<br/>One uncompromising philosophy.</p>
   <div className="mt-14 flex items-center justify-between gap-4 border-t border-white/15 pt-5 font-mono text-[9px] tracking-[0.14em] text-[#a9a49d] sm:mt-20 sm:text-[10px]"><span>01 — 03</span><span>THE CURRENT COLLECTION</span></div>
  </section>
  <section className="mx-auto mt-12 grid w-full max-w-[1440px] grid-cols-1 gap-x-8 gap-y-16 px-5 sm:px-8 md:mt-16 md:grid-cols-2 md:gap-y-24">{vehicles.map((vehicle,index)=><VehicleCard key={vehicle.slug} vehicle={vehicle} index={index}/>)}</section>
 </main><Footer/></>;
}