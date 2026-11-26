import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";
import { Eyebrow } from "@/components/ui/eyebrow";
interface VehiclePageProps { params: Promise<{slug:string}>; }
export function generateStaticParams(){return vehicles.map(vehicle=>({slug:vehicle.slug}));}
export async function generateMetadata({params}:VehiclePageProps):Promise<Metadata>{
 const {slug}=await params; const vehicle=vehicles.find(item=>item.slug===slug);
 return {title:vehicle?vehicle.name:"Vehicle Not Found",description:vehicle?.description};
}
export default async function VehiclePage({params}:VehiclePageProps){
 const {slug}=await params; const vehicle=vehicles.find(item=>item.slug===slug); if(!vehicle) notFound();
 const specs=[
  {label:"MAXIMUM POWER",value:vehicle.horsepower.toLocaleString("en-ZA"),detail:"HORSEPOWER"},
  {label:"0–100 KM/H",value:vehicle.acceleration,detail:"SECONDS"},
  {label:"TOP SPEED",value:vehicle.topSpeed,detail:"MAXIMUM SPEED"},
  {label:"POWERTRAIN",value:vehicle.powertrain,detail:"AURELION ENGINEERING"}
 ];
 return <><Navbar/><main>
  <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-cover bg-center pt-36" style={{backgroundImage:`url("${vehicle.image}")`}}>
   <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.96),rgba(0,0,0,0.12)_88%)]"/>
   <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-20 sm:px-8 md:pb-28">
    <Link href="/collection" className="mb-16 inline-flex items-center gap-3 font-mono text-[9px] tracking-[0.13em] text-white/75 transition-colors hover:text-[#a88b62] sm:mb-24"><ArrowLeft size={15}/> BACK TO COLLECTION</Link>
    <Eyebrow className="text-[#eae6df]">{vehicle.category} / AURELION AUTOMOTIVE</Eyebrow>
    <h1 className="mt-5 text-[clamp(5rem,15vw,12rem)] leading-[0.82] tracking-[-0.085em] text-[#eae6df]">{vehicle.name}</h1>
    <p className="mt-5 font-[family-name:var(--font-display)] text-xl italic text-[#eae6df] sm:text-2xl">{vehicle.tagline}</p>
    <span className="mt-9 inline-block font-mono text-[10px] tracking-[0.14em] text-white/75">FROM {vehicle.price}</span>
   </div>
  </section>
  <section className="bg-[#eae6df] py-20 text-[#090909] sm:py-28 md:py-36"><div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8">
   <div className="max-w-[850px]"><Eyebrow className="text-[#94734e]">THE MACHINE / 0{vehicles.indexOf(vehicle)+1}</Eyebrow><h2 className="mt-7 text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.12] tracking-[-0.045em]">{vehicle.description}</h2></div>
   <div className="mt-16 grid grid-cols-2 border-y border-black/20 sm:mt-24 lg:grid-cols-4">{specs.map((spec,index)=><div key={spec.label} className={`flex min-w-0 flex-col gap-3 border-black/20 px-4 py-7 sm:px-6 sm:py-9 lg:px-7 ${index%2===0?"border-r":"lg:border-r"} ${index>1?"border-t lg:border-t-0":""} ${index===3?"lg:border-r-0":""} ${index===0?"lg:pl-0":""}`}><span className="font-mono text-[8px] tracking-[0.1em] text-[#777] sm:text-[9px]">{spec.label}</span><strong className="break-words font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.6rem)] font-normal leading-tight tracking-[-0.04em]">{spec.value}</strong><small className="font-mono text-[8px] tracking-[0.08em] text-[#777]">{spec.detail}</small></div>)}</div>
   <Link href="/configurator" className="group mt-12 inline-flex items-center gap-4 border-b border-[#94734e] pb-3 font-mono text-[9px] tracking-[0.12em] transition-all duration-300 hover:gap-6 sm:mt-14">CONFIGURE YOUR AURELION <ArrowUpRight size={16}/></Link>
  </div></section>
 </main><Footer/></>;
}