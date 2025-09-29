import GuestbookSection from "../components/GuestbookSection";

export default function LibroDeVisitasPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl uppercase text-[var(--primary-color)] mb-6">
            Libro de Visitas
          </h1>
          <p className="mt-4 text-lg leading-8 text-[var(--secondary-color)] mb-12">
            Lee lo que nuestros clientes tienen que decir sobre su experiencia en Big Brother Supply.
          </p>
        </div>
        <GuestbookSection />
      </div>
    </div>
  );
}
