import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";
import { Configurator } from "@/components/configurator/configurator";

export const metadata: Metadata = {
  title: "Personal Configurator",
  description:
    "Compose your AURELION. Explore exterior finishes, wheel designs and interior materials in the AURELION Atelier.",
};

export default function ConfiguratorPage() {
  return (
    <>
      <Navbar />
      <Configurator />
      <Footer />
    </>
  );
}
