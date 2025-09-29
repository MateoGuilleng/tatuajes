import Link from 'next/link';

export default function NewsSection() {
  const newsItems = [
    {
      date: "11/11/2018",
      title: "Vuestras fotos con las camisetas de Big Brother Supply",
      href: "#",
    },
    {
      date: "11/11/2018",
      title: "Big Brother Supply ya tiene nueva página web!!",
      href: "#",
    },
    {
      date: "10/11/2018",
      title: "Próximo lanzamiento nueva web Big Brother Supply",
      href: "#",
    },
  ];

  return (
    <div className="bg-[var(--background)] py-16 sm:py-24 lg:py-32 rounded-lg shadow-xl mb-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-16">
      
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md">
            <p className="text-sm text-[var(--foreground)] mb-2">{item.date}</p>
            <Link href={item.href} className="text-xl font-semibold text-[var(--foreground)] hover:text-[var(--primary-color)]">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/noticias" className="btn-primary inline-block">
          Más Noticias
        </Link>
      </div>
    </div>
  );
}
