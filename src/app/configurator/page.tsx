
import type { Metadata } from "next";

import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";
import { Configurator } from "./configurator";

export const metadata: Metadata = {
  title: "AURELION Atelier | Configure Your Vehicle",
  description:
    "Enter the AURELION Atelier. Personalise your vehicle with considered finishes, distinctive wheels and refined interior materials.",
};

export default function ConfiguratorPage() {
  return (
    <>
      <Navbar />
      <main>
        <Configurator />
      </main>
      <Footer />
    </>
  );
}
