import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
const playfair=Playfair_Display({variable:"--font-display",subsets:["latin"],weight:["400","500","600","700"]});
const dmSans=DM_Sans({variable:"--font-sans",subsets:["latin"]});
const dmMono=DM_Mono({variable:"--font-mono",subsets:["latin"],weight:"400"});
export const metadata:Metadata={title:{default:"AURELION | The Art of Motion",template:"%s | AURELION"},description:"Discover AURELION. A fictional automotive marque exploring the intersection of performance, precision and design."};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}>{children}</body></html>;
}