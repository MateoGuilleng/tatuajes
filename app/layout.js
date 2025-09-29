import { Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ParallaxImages from "./components/ParallaxImages";

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

export const metadata = {
  title: "Big Brother Supply - Estudio de Tatuajes y Piercing",
  description: "Estudio de tatuajes y piercing profesional en Mijas Costa, Málaga. Realismo, tradicional, piercing y más. ¡Visítanos!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cinzelDecorative.variable} antialiased`}
        style={{
          "--background": "#000000", /* Deep Reddish Black */
          "--foreground": "#FFFFFF", /* White for main text */
          "--primary-color": "#BF0000", /* Deep Red */
          "--secondary-color": "#800000", /* Even Darker Red for accents/hover */
          "--card-bg": "#0A0A0A", /* Slightly lighter reddish dark for cards */
          "--hover-color": "#FF0000", /* Bright Red for hover states */
          "--btn-primary-bg": "#0A0A0A", /* Very dark background for primary button */
          "--btn-primary-border": "#BF0000", /* Red border for primary button */
          "--btn-primary-text": "#FFFFFF", /* White text for primary button */
          "--btn-primary-hover-bg": "#1A0000", /* Darker red on hover */
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        {/* Global Diffused Background Element */}
        <div
          className="fixed inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative h-full w-full bg-gradient-to-tr from-[var(--primary-color)] to-[var(--background)] opacity-50"
            style={{
              clipPath:
                `polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%,
                 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%,
                 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%,
                 74.1% 44.1%)`,
            }}
          />
        </div>
        <ParallaxImages />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
