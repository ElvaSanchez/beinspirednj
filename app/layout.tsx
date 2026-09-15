import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { description } from "@/lib/content";
import "./globals.css";
const serif = localFont({ src: "./fonts/playfair.woff2", variable: "--font-serif", weight: "400 900", display: "swap" });
const sans = localFont({ src: "./fonts/source-sans.woff2", variable: "--font-sans", weight: "200 900", display: "swap" });
const script = localFont({ src: "./fonts/allura.woff2", variable: "--font-script", weight: "400", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL("https://beinspirednj.org"),
  title: { default: "Be Inspired NJ", template: "%s | Be Inspired NJ" },
  description,
  openGraph: { title: "Be Inspired NJ", description, type: "website", locale: "en_US", siteName: "Be Inspired NJ" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${serif.variable} ${sans.variable} ${script.variable}`}><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main" tabIndex={-1}>{children}</main><Footer/></body></html>;
}
