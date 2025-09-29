export default function CursosPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl uppercase text-[var(--primary-color)] mb-6">
          Curso Profesional de Piercings
        </h1>
        <p className="mt-4 text-lg leading-8 text-[var(--secondary-color)] mb-12">
          ¡Conviértete en un profesional del piercing con nuestro curso especializado!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl mb-6">
              Aprende de los Mejores
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nuestro curso profesional de piercings está diseñado para proporcionarte los conocimientos y habilidades necesarios para destacar en la industria. Aprenderás de artistas con años de experiencia, en un entorno seguro y profesional.
            </p>
            <ul className="list-disc list-inside mt-6 space-y-3 text-lg leading-8 text-gray-300">
              <li><strong className="text-[var(--primary-color)]">Técnicas Avanzadas:</strong> Dominarás las últimas técnicas en perforación.</li>
              <li><strong className="text-[var(--primary-color)]">Higiene y Esterilización:</strong> Fundamentos cruciales para la seguridad del cliente.</li>
              <li><strong className="text-[var(--primary-color)]">Anatomía y Joyería:</strong> Conocimiento profundo de la anatomía humana y selección de materiales.</li>
              <li><strong className="text-[var(--primary-color)]">Prácticas Supervisadas:</strong> Experiencia real bajo la tutela de expertos.</li>
            </ul>
          </div>
          <div className="relative h-96 w-full">
            <img
              src="/images/Camillahidraulica.png" // Placeholder image for courses
              alt="Curso de Piercings"
              className="rounded-xl shadow-xl object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl mb-6">
            Detalles del Curso
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Nuestro programa incluye teoría y práctica, cubriendo todos los aspectos esenciales desde la preparación del cliente hasta el seguimiento post-perforación.
          </p>
          <div className="mt-10 flex justify-center">
            <a href="/contacto" className="btn-primary inline-block">Inscríbete ahora</a>
          </div>
        </div>
      </div>
    </div>
  );
}
