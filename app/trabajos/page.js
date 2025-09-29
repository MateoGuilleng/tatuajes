import WorkGallery from "../components/WorkGallery";

const galleries = [
  {
    title: "Tatuajes de Realismo",
    description: "Explora nuestra colección de tatuajes realistas, capturando detalles increíbles.",
    linkHref: "/trabajos/realismo",
    imageSrc: "/images/Yomico.webp",
    imageAlt: "Tatuaje de realismo",
  },
  {
    title: "Estilo Tradicional",
    description: "Diseños clásicos con líneas audaces y colores vibrantes.",
    linkHref: "/trabajos/tradicional",
    imageSrc: "/images/dragon-center.png",
    imageAlt: "Tatuaje tradicional",
  },
  {
    title: "Neo Tradicional",
    description: "Una mezcla de lo antiguo y lo nuevo con un toque moderno.",
    linkHref: "/trabajos/neo-tradicional",
    imageSrc: "/images/dragon-right2.png",
    imageAlt: "Tatuaje neo-tradicional",
  },
  {
    title: "Tatuajes de Fantasía",
    description: "Creaciones mágicas y épicas que dan vida a tus sueños.",
    linkHref: "/trabajos/fantasia",
    imageSrc: "/images/dragon-left.png",
    imageAlt: "Tatuaje de fantasía",
  },
  {
    title: "Trabajos en Blanco y Negro",
    description: "La belleza y el contraste del arte en blanco y negro.",
    linkHref: "/trabajos/bn",
    imageSrc: "/images/tatuaje_white_1.png",
    imageAlt: "Tatuaje en blanco y negro",
  },
  {
    title: "Otros Estilos",
    description: "Descubre la diversidad de estilos que ofrecemos en nuestro estudio.",
    linkHref: "/trabajos/otros",
    imageSrc: "/images/tatuaje_white_2.png",
    imageAlt: "Otros estilos de tatuajes",
  },
];

export default function TrabajosPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl uppercase text-[var(--primary-color)] mb-6">
            Nuestros Trabajos
          </h1>
          <p className="mt-4 text-lg leading-8 text-[var(--secondary-color)] mb-12">
            Explora nuestras galerías de tatuajes por estilo y déjate inspirar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.map((gallery, index) => (
            <WorkGallery key={index} {...gallery} />
          ))}
        </div>
      </div>
    </div>
  );
}
