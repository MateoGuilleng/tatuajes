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
                Big Brother Supply es un estudio artístico de tatuajes y piercing fundado en 2005 bajo el pseudónimo de su fundador, Alberto Ramírez «Fido». Desde sus comienzos como tatuador, y desde la fecha de la apertura de el estudio, Big Brother Supply se ha posicionado en la provincia de Málaga como un referente gracias a la calidad artística y técnica de sus tatuajes y piercings.
              </p>
              <p className="mt-6 text-xl leading-8 text-white">
                El equipo humano de Big Brother Supply cuenta con artistas y profesionales con amplia experiencia en todo tipo de estilos, desde lo más vintage a lo más rompedor y contemporáneo. Desde nuestra web, y en nombre de todos los que formamos Big Brother Supply, esperamos que descubras la inspiración en nuestros trabajos y te animes a visitarnos para contarnos que te gustaría hacerte.
              </p>
              <div className="mt-10 flex">
                <Link href="/estudio" className="btn-primary">
                  Ver página
                </Link>
              </div>
            </div>
          </div>
          <Image
            src="/images/big_naranja-023.avif"
            alt="Big Brother Supply Studio"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

