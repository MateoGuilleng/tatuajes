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
  title: "Big Brother Supply Tattoo",
  description: "Todo para tu estudio de tatuaje",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cinzelDecorative.variable} antialiased`}>
        <ParallaxImages />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
