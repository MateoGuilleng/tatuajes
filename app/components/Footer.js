import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gray-950 text-white p-6 mt-12 border-t border-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
        {/* Big Brother Supply Info */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/images/big_naranja-02.avif" alt="Big Brother Supply Logo" width={40} height={40} />
            <span className="text-xl font-bold">Big Brother Supply</span>
          </div>
          <p className="text-sm text-gray-400">
            Big Brother Supply es un estudio artístico de tatuajes y piercing en Mijas Costa, Málaga. Miembros de la Unión Nacional de Tatutadores y Anilladores Profesionales (UNTAP) desde hace 14 años.
          </p>
        </div>

        {/* Contact Info */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4 text-[var(--primary-color)]">Datos de Contacto</h3>
          <p className="text-sm text-gray-400">Camino Viejo de Coín, 14. 29651. Mijas Costa. Málaga. <Link href="#" className="text-[var(--primary-color)] hover:underline">Ver Mapa</Link></p>
          <p className="text-sm text-gray-400">952 476 811</p>
          <p className="text-sm text-gray-400">646 835 944</p>
          <p className="text-sm text-gray-400">fido@fidotattoo.com</p>
        </div>

        {/* Web Sections */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4 text-[var(--primary-color)]">Apartados web</h3>
          <ul>
            <li><Link href="/" className="text-sm text-gray-400 hover:text-[var(--primary-color)]">Inicio</Link></li>
            <li><Link href="/estudio" className="text-sm text-gray-400 hover:text-[var(--primary-color)]">El Estudio</Link></li>
            <li><Link href="/trabajos" className="text-sm text-gray-400 hover:text-[var(--primary-color)]">Trabajos</Link></li>
            <li><Link href="/cuidados" className="text-sm text-gray-400 hover:text-[var(--primary-color)]">Cuidados tattoo</Link></li>
            <li><Link href="/cuidados-piercing" className="text-sm text-gray-400 hover:text-[var(--primary-color)]">Cuidados piercing</Link></li>
            <li><Link href="/noticias" className="text-sm text-gray-400 hover:text-[var(--primary-color)]">Noticias</Link></li>
            <li><Link href="/libro-de-visitas" className="text-sm text-gray-400 hover:text-[var(--primary-color)]">Libro de visitas</Link></li>
            <li><Link href="/contacto" className="text-sm text-gray-400 hover:text-[var(--primary-color)]">Contacto</Link></li>
            <li><Link href="/fotos-camisetas" className="text-sm text-gray-400 hover:text-[var(--primary-color)]">Fotos camisetas Big Brother Supply</Link></li>
          </ul>
        </div>

        {/* Social Media & Legal */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4 text-[var(--primary-color)]">Síguenos en</h3>
          <ul className="flex space-x-4 mb-8">
            <li><a href="#" className="text-gray-400 hover:text-[var(--primary-color)]">Facebook</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[var(--primary-color)]">Instagram</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[var(--primary-color)]">TikTok</a></li>
          </ul>
          <h3 className="text-lg font-semibold mb-4 text-[var(--primary-color)]">Legal</h3>
          <ul>
            <li><Link href="#" className="text-sm text-gray-400 hover:text-[var(--primary-color)]">Aviso Legal</Link></li>
            <li><Link href="#" className="text-sm text-gray-400 hover:text-[var(--primary-color)]">Política Privacidad</Link></li>
            <li><Link href="#" className="text-sm text-gray-400 hover:text-[var(--primary-color)]">Política Cookies</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 pt-4 border-t border-gray-800 text-sm text-gray-500">
        Big Brother Supply 2025 | Aviso Legal | Política Privacidad | Política Cookies
      </div>
      <div className="text-center text-sm text-gray-500 mt-2">
        WhatsApp <Link href="#" className="text-[var(--primary-color)] hover:underline">Reserva tu cita</Link> | <Link href="#" className="text-[var(--primary-color)] hover:underline">Book your appointment</Link>
      </div>
    </footer>
  );
}
