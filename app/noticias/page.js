import Link from 'next/link';

const newsItems = [
  {
    date: "11/11/2018",
    title: "Vuestras fotos con las camisetas de Big Brother Supply",
    href: "#", // Update with actual links if available
  },
  {
    date: "11/11/2018",
    title: "Big Brother Supply ya tiene nueva página web!!",
    href: "#", // Update with actual links if available
  },
  {
    date: "10/11/2018",
    title: "Próximo lanzamiento nueva web Big Brother Supply",
    href: "#", // Update with actual links if available
  },
  {
    date: "05/03/2019",
    title: "Nuevos artistas se unen al equipo",
    href: "#",
  },
  {
    date: "20/07/2019",
    title: "Eventos y convenciones de tatuajes",
    href: "#",
  },
  {
    date: "15/01/2020",
    title: "Tendencias en tatuajes para el nuevo año",
    href: "#",
  },
];

export default function NoticiasPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl uppercase text-[var(--primary-color)] mb-6">
            Últimas Noticias
          </h1>
          <p className="mt-4 text-lg leading-8 text-[var(--secondary-color)] mb-12">
            Mantente al día con las novedades y eventos de Big Brother Supply.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-400 mb-2">{item.date}</p>
              <Link href={item.href} className="text-xl font-semibold text-white hover:text-[var(--primary-color)]">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="#" className="btn-primary inline-block">Cargar más noticias</Link>
        </div>
      </div>
    </div>
  );
}
