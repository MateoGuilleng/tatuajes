import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ParallaxImages from "./components/ParallaxImages";
import StudioInfo from "./components/StudioInfo";
import WorkGallery from "./components/WorkGallery";
import GuestbookSection from "./components/GuestbookSection";
import NewsSection from "./components/NewsSection";
import BoutiqueSection from "./components/BoutiqueSection";
import SectionDivider from "./components/SectionDivider"; // Import the new component
import AnimateOnScroll from "./components/AnimateOnScroll"; // Import the new component

const productsMaquinas = [
  {
    id: 1,
    name: 'Maquina para tatuar Bishop Power Wand Full Kit',
    href: '#',
    price: '$5.850.000,00',
    imageSrc: '/images/Critical-Full-Kit.webp',
    imageAlt: 'Bishop Power Wand Full Kit',
  },
  {
    id: 2,
    name: 'Maquina para Tatuar rotativa inalambrica FK Irons Flux Max Yomico',
    href: '#',
    price: '$5.600.000,00',
    imageSrc: '/images/Yomico.webp',
    imageAlt: 'FK Irons Flux Max Yomico',
  },
  {
    id: 3,
    name: 'Máquina para tatuar rotativa inalámbrica FK Irons Flux Max Gold',
    href: '#',
    price: 'Desde $4.300.000,00',
    imageSrc: '/images/MaquinaparatatuarrotativainalambricaFKIronsFluxMaxGold.webp',
    imageAlt: 'FK Irons Flux Max Gold',
  },
  {
    id: 4,
    name: 'Máquina rotativa inalámbrica FK Irons One 4.0mm',
    href: '#',
    price: 'Precio no especificado',
    imageSrc: '/images/MaquinarotativainalambricaFKIronsOne4.0mmgris.webp',
    imageAlt: 'FK Irons One 4.0mm',
  },
];

const productsPigmentos = [
  {
    id: 1,
    name: 'Pigmento Panthera Black Gold',
    href: '#',
    price: '$1.115.000,00',
    imageSrc: '/images/SetPigmentosparaTatuarPantheraxKindamox6150ml.webp',
    imageAlt: 'Panthera Black Gold',
  },
];

const productsMobiliario = [
  {
    id: 1,
    name: 'Camilla Para Tatuar Inktop Eléctrica Ajustable con 2 Motores',
    href: '#',
    price: '$4.500.000,00',
    imageSrc: '/images/CamillaInktopelectricaajustable2motores.png',
    imageAlt: 'Camilla Inktop Eléctrica',
  },
  {
    id: 2,
    name: 'Camilla Hidráulica Para Tatuar',
    href: '#',
    price: '$2.990.000,00',
    imageSrc: '/images/Camillahidraulica.png',
    imageAlt: 'Camilla Hidráulica',
  },
  {
    id: 3,
    name: 'Camilla Inktop Eléctrica Ajustable Para Tatuar (1motor)',
    href: '#',
    price: '$2.100.000,00',
    imageSrc: '/images/CamillaInktopelectricaajustable_1motor.png',
    imageAlt: 'Camilla Inktop Eléctrica 1 motor',
  },
  {
    id: 4,
    name: 'Camilla Portable Para Tatuar Rosada',
    href: '#',
    price: '$850.000,00',
    imageSrc: '/images/CamillaPortableRosada.png',
    imageAlt: 'Camilla Portable Rosada',
  },
  {
    id: 5,
    name: 'Estacion de Trabajo Para Tatuar Pro 7 Cajones + Locker Lateral',
    href: '#',
    price: '$1.700.000,00',
    imageSrc: '/images/Estacion_de_Trabajo_Pro_7_Cajones_Locker_Lateral.png',
    imageAlt: 'Estacion de Trabajo Pro 7 Cajones + Locker Lateral',
  },
  {
    id: 6,
    name: 'Estacion de Trabajo Para Tatuar Pro 7 Cajones',
    href: '#',
    price: '$1.500.000,00',
    imageSrc: '/images/EstaciondeTrabajoPro7Cajones.png',
    imageAlt: 'Estacion de Trabajo Pro 7 Cajones',
  },
  {
    id: 7,
    name: 'Estación de Trabajo 7 Cajones',
    href: '#',
    price: '$1.200.000,00',
    imageSrc: '/images/EstaciondeTrabajo7Cajonesnegro.jpg',
    imageAlt: 'Estación de Trabajo 7 Cajones Negra',
  },
  {
    id: 8,
    name: 'Estación de Trabajo Para Tatuar con 5 Cajones',
    href: '#',
    price: '$980.000,00',
    imageSrc: '/images/Estacion_de_trabajo_con_cajones_negro.png',
    imageAlt: 'Estación de Trabajo Para Tatuar con 5 Cajones Negra',
  },
  {
    id: 9,
    name: 'Estacion de Trabajo para tatuar con 2 Puertas y 2 Cajones',
    href: '#',
    price: '$980.000,00',
    imageSrc: '/images/estacion-con-puertas-negra.png',
    imageAlt: 'Estacion de Trabajo para tatuar con 2 Puertas y 2 Cajones Negra',
  },
  {
    id: 10,
    name: 'Lampara Led Luna',
    href: '#',
    price: '$940.000,00',
    imageSrc: '/images/LamparaLedLuna.png',
    imageAlt: 'Lampara Led Luna',
  },
  {
    id: 11,
    name: 'Lámpara LED de 12 Brazos',
    href: '#',
    price: '$1.100.000,00',
    imageSrc: '/images/Lampara-led-12-brazos.png',
    imageAlt: 'Lámpara LED de 12 Brazos',
  },
  {
    id: 12,
    name: 'Lámpara LED de 6 Brazos',
    href: '#',
    price: '$650.000,00',
    imageSrc: '/images/Lampara-led-6-Brazos.png',
    imageAlt: 'Lámpara LED de 6 Brazos',
  },
];

const productsCartuchosAgujasGrips = [
  {
    id: 1,
    name: 'Cartuchos Pepax',
    href: '#',
    price: 'N/A',
    imageSrc: '/images/pepax_Mesa_de_trabajo_1.jpg',
    imageAlt: 'Cartuchos Pepax',
  },
  {
    id: 2,
    name: 'Cartuchos EZ',
    href: '#',
    price: 'N/A',
    imageSrc: '/images/Termo-EZ.png',
    imageAlt: 'Cartuchos EZ',
  },
];

const galleries = [
  {
    title: "Fido",
    description: "Artista Tattoo",
    linkHref: "/trabajos/fido",
    imageSrc: "/images/tatuaje_white_1.png",
    imageAlt: "Big Brother Supply Artist",
  },
  {
    title: "Carolina",
    description: "Artista Tattoo",
    linkHref: "/trabajos/carolina",
    imageSrc: "/images/tatuaje_white_2.png",
    imageAlt: "Carolina Tattoo Artist",
  },
  {
    title: "Raul",
    description: "Artista Tattoo",
    linkHref: "/trabajos/raul",
    imageSrc: "/images/tatuaje_white_1.png",
    imageAlt: "Raul Tattoo Artist",
  },
  {
    title: "Niki",
    description: "Artista Tattoo",
    linkHref: "/trabajos/niki",
    imageSrc: "/images/tatuaje_white_2.png",
    imageAlt: "Niki Tattoo Artist",
  },
  {
    title: "Piercings",
    description: "Variedad de piercings",
    linkHref: "/trabajos/piercings",
    imageSrc: "/images/tatuaje_white_1.png",
    imageAlt: "Piercings Gallery",
  },
  {
    title: "Cover Ups",
    description: "Transforma tus viejos tatuajes",
    linkHref: "/trabajos/coverups",
    imageSrc: "/images/tatuaje_white_2.png",
    imageAlt: "Cover Ups Gallery",
  },
  {
    title: "Eliminacion Laser",
    description: "Borrado de tatuajes",
    linkHref: "/trabajos/laser",
    imageSrc: "/images/tatuaje_white_1.png",
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

      <AnimateOnScroll>
        <SectionDivider title="PRODUCTOS" backgroundImage="/images/decoracion2.jpg" />
        
      </AnimateOnScroll>

      <AnimateOnScroll>
        <CategorySection 
          id="products"
          title="Maquinas para Tatuar"
          products={productsMaquinas}
          bgColor="bg-[var(--card-bg)]"
          description="Tenemos las mejores marcas, somos los distribuidores autorizados para Colombia contamos con garantía y servicio técnico."
        />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CategorySection 
          title="Pigmentos para tatuar"
          products={productsPigmentos}
          bgColor="bg-[var(--background)]"
          description="Descubre una gran variedad de pigmentos de las mejores marcas para todos tus estilos."
        />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CategorySection 
          title="Cartuchos Agujas Grips"
          products={productsCartuchosAgujasGrips}
          bgColor="bg-[var(--card-bg)]"
          description="Encuentra la precisión y seguridad que necesitas con nuestra selección de cartuchos, agujas y grips."
        />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CategorySection 
          title="Mobiliario"
          products={productsMobiliario}
          bgColor="bg-[var(--background)]"
          description="Renueva tu estudio con mobiliario profesional, tu espacio merece lo mejor."
        />
      </AnimateOnScroll>
    </main>
  );
}
