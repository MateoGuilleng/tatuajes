import Image from 'next/image';
import Link from 'next/link';

export default function StudioInfo() {
  return (
    <div className="bg-[var(--background)] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl uppercase">
            Estudio Artístico de Tatuajes & Piercing
          </h2>
          <p className="mt-4 text-lg leading-8 text-white">
            Conoce a Big Brother Supply y su equipo
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-[var(--primary-color)]">Nuestra Historia</p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                Big Brother Supply, un referente en Málaga
              </p>
              <p className="mt-6 text-xl leading-8 text-white">
                Tenemos las mejores marcas del mercado y somos distribuidores autorizados en Colombia. Te ofrecemos productos 100% originales con garantía y respaldo de servicio técnico especializado. Aquí encontrarás todo lo que necesitas para tu estudio de tatuaje en un solo lugar, con la confianza y seguridad que tu arte merece.              </p>

              <div className="mt-10 flex">
                <Link href="/estudio" className="btn-primary">
                  Ver página
                </Link>
              </div>
            </div>
          </div>
          <Image
            src="/images/decoracion2.jpg"
            alt="Big Brother Supply Studio"
            className="w-full max-w-lg rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:max-w-none mx-auto"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

