import Image from "next/image";

const HeroText = () => {
  return (
    <div className="mx-auto max-w-2xl text-white z-10 relative text-center">
      <h1 className="text-5xl font-bold tracking-tight sm:text-7xl uppercase mb-4">
        Todo lo que necesitas para tu estudio de tatuaje
      </h1>
      <h2 className="text-xl sm:text-2xl mt-4 uppercase text-white">
        En un solo lugar
      </h2>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a href="/productos"
          className="inline-flex items-center justify-center rounded-md border text-base font-medium shadow-sm transition-colors"
          style={{
            backgroundColor: "var(--btn-primary-bg)",
            borderColor: "var(--btn-primary-border)",
            color: "var(--btn-primary-text)",
            padding: "0.75rem 1.5rem",
            borderWidth: "2px", // Add a visible border
          }}>
          Ver nuestros productos
        </a>
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-24 lg:px-8 min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url('/images/Dragon-fondo.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)', // Darken the image slightly
        }}
      ></div>
      {/* Removed blur effects and dragon images as per fidotattoo.com design */}
      <div className="mx-auto max-w-7xl py-10 sm:py-20 lg:py-24 z-10">
        <div className="text-center">
          <HeroText />
        </div>
      </div>
    </div>
  );
}
