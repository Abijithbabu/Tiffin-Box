import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Corinthia, Manrope, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title:
    "The Tiffin Box",
  description:
    "Experience Authentic South Indian Flavors at The Tiffin Box",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: "Tiffin Box, Authentic South Indian Cusine, Comfortable Dining Experience, Expert Chefs, Health-Conscious Options, Fresh Quality Ingredients, Seamless Online Ordering & Delivery"
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--plus-jakarta-sans",
  weight: ["300"]
})

const corinthia = Corinthia({
  subsets: ["latin"],
  variable: "--corinthia",
  weight: ["400"]
})
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen bg-[#070707] font-manrope text-[#FBEAD2] antialiased",
          manrope.variable,
          playfair.variable,
          plusJakarta.variable,
          corinthia.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
