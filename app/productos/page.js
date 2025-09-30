import CategorySection from "../components/CategorySection";
import SectionDivider from "../components/SectionDivider";
import AnimateOnScroll from "../components/AnimateOnScroll";

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
        price: '$5.000,00',
        imageSrc: '/images/pepax_Mesa_de_trabajo_1.png',
        imageAlt: 'Cartuchos Pepax',
    },
    {
        id: 2,
        name: 'Cartuchos EZ',
        href: '#',
        price: '$40.000,00',
        imageSrc: '/images/Termo-EZ.png',
        imageAlt: 'Cartuchos EZ',
    },
];

export default function Productos() {
    return (
        <main className="bg-[var(--background)] pt-24">
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
