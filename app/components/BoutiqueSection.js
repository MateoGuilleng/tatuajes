import Image from "next/image";

export default function BoutiqueSection() {
  const boutiqueLogos = [
    { src: "/images/big_naranja-02.avif", alt: "Logo-dga" }, // Placeholder, replace with actual logo if available
    { src: "/images/big_naranja-023.avif", alt: "Logo-fido" }, // Placeholder
    { src: "/images/Critical-Full-Kit.png", alt: "Logo-inkadict" }, // Placeholder
    { src: "/images/maquina.webp", alt: "Logo-liquor" }, // Placeholder
    { src: "/images/MaquinaparatatuarrotativainalambricaFKIronsFluxMaxGold.png", alt: "Logo-minute" }, // Placeholder
    { src: "/images/MaquinarotativainalambricaFKIronsOne4.0mmgris.png", alt: "Logo-shiroi" }, // Placeholder
    { src: "/images/tatuaje_white_1.png", alt: "Logo-sixbunnies" }, // Placeholder
    { src: "/images/Yomico.png", alt: "Logo-sullen" }, // Placeholder
  ];

  return (
    <div className="bg-[var(--card-bg)] py-16 sm:py-24 lg:py-32 rounded-lg shadow-xl mb-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-16">
        
        <p className="mt-4 text-lg leading-8 text-[var(--secondary-color)]">
          Visita nuestro estudio con la mejor ropa y complementos
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-center">
        {boutiqueLogos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center p-4 bg-black rounded-lg h-24">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={100}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

