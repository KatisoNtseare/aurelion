
export interface Vehicle {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  horsepower: number;
  acceleration: string;
  topSpeed: string;
  powertrain: string;
  price: string;
  image: string;
  accent: string;
}

export const vehicles: Vehicle[] = [
  {
    slug: "apex",
    name: "APEX",
    category: "HYPERSPORT",
    tagline: "Defy the impossible.",
    description:
      "An uncompromising expression of automotive engineering. APEX exists at the intersection of extreme performance, precision and design.",
    horsepower: 1001,
    acceleration: "2.1 SEC",
    topSpeed: "385 KM/H",
    powertrain: "6.5L V12 HYBRID",
    price: "R 28,500,000",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=90",
    accent: "#A88B62",
  },
  {
    slug: "veyra",
    name: "VEYRA",
    category: "GRAND TOURER",
    tagline: "Distance, redefined.",
    description:
      "Designed for those who find freedom in the journey. VEYRA combines effortless power with sophisticated long-distance comfort.",
    horsepower: 720,
    acceleration: "3.0 SEC",
    topSpeed: "340 KM/H",
    powertrain: "4.0L TWIN-TURBO V8",
    price: "R 14,800,000",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1800&q=90",
    accent: "#B4B9C0",
  },
  {
    slug: "solis",
    name: "SOLIS",
    category: "ELECTRIC GT",
    tagline: "Tomorrow, accelerated.",
    description:
      "A bold vision of electric performance. SOLIS delivers instantaneous power, intelligent technology and a completely new driving experience.",
    horsepower: 850,
    acceleration: "2.4 SEC",
    topSpeed: "320 KM/H",
    powertrain: "TRI-MOTOR ELECTRIC",
    price: "R 18,200,000",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1800&q=90",
    accent: "#C7C7C7",
  },
];
