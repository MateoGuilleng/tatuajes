import Hero from "./components/Hero";
import ParallaxImages from "./components/ParallaxImages";
import StudioInfo from "./components/StudioInfo";
import WorkGallery from "./components/WorkGallery";
import GuestbookSection from "./components/GuestbookSection";
import NewsSection from "./components/NewsSection";
import SectionDivider from "./components/SectionDivider"; // Import the new component
import AnimateOnScroll from "./components/AnimateOnScroll"; // Import the new component

const galleries = [
  // {
  //   title: "Carolina",
  //   description: "Artista Tattoo",
  //   linkHref: "/trabajos/carolina",
  //   imageSrc: "/images/tatuaje_white_2.png",
  //   imageAlt: "Carolina Tattoo Artist",
  // },
  // {
  //   title: "Raul",
  //   description: "Artista Tattoo",
  //   linkHref: "/trabajos/raul",
  //   imageSrc: "/images/tatuaje_white_1.png",
  //   imageAlt: "Raul Tattoo Artist",
  // },
  // {
  //   title: "Niki",
  //   description: "Artista Tattoo",
  //   linkHref: "/trabajos/niki",
  //   imageSrc: "/images/tatuaje_white_2.png",
  //   imageAlt: "Niki Tattoo Artist",
  // },
  {
    title: "Piercings",
    description: "Variedad de piercings",
    linkHref: "/trabajos/piercings",
    imageSrc: "/images/piercings.jpg",
    imageAlt: "Piercings Gallery",
  },
  {
    title: "Cover Ups",
    description: "Transforma tus viejos tatuajes",
    linkHref: "/trabajos/coverups",
    imageSrc: "/images/coverups.webp",
    imageAlt: "Cover Ups Gallery",
  },
  {
    title: "Eliminacion Laser",
    description: "Borrado de tatuajes",
    linkHref: "/trabajos/laser",
    imageSrc: "/images/laser.jpg",
    imageAlt: "Laser Removal Gallery",
  },
];

export default function Home() {
  return (
    <main className="bg-[var(--background)]">
      <ParallaxImages />
      <Hero />

      <AnimateOnScroll>
        <SectionDivider title="ESTUDIO ARTISTICO DE TATUAJES & PIERCING" backgroundImage="/images/decoracion2.jpg" />
        <StudioInfo />
      </AnimateOnScroll>

      {/* Trabajos Section */}
      <AnimateOnScroll>
        <SectionDivider title="TRABAJOS" backgroundImage="/images/decoracion3.jpg" />
        <div className="bg-[var(--background)] py-16 sm:py-24 lg:py-32 rounded-lg shadow-xl mb-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl uppercase">
              Mira algunos de nuestros trabajos
            </h2>

            <p className="mt-4 text-lg leading-8 text-[var(--foreground)]">
              Visita nuestras galerías de trabajos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleries.map((gallery, index) => (
              <WorkGallery
                key={index}
                title={gallery.title}
                description={gallery.description}
                linkHref={gallery.linkHref}
                imageSrc={gallery.imageSrc}
                imageAlt={gallery.imageAlt}
              />
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <SectionDivider title="LIBRO DE VISITAS" backgroundImage="/images/Dragon-fondo.jpg" />
        <GuestbookSection />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <SectionDivider title="NOTICIAS" backgroundImage="/images/decoracion.jpg" />
        <NewsSection />
      </AnimateOnScroll>

      
    </main>
  );
}
