export default function ServiciosPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl uppercase text-[var(--primary-color)] mb-6">
          Nuestros Servicios
        </h1>
        <p className="mt-4 text-lg leading-8 text-[var(--secondary-color)] mb-12">
          Descubre la amplia gama de servicios profesionales que ofrecemos en Big Brother Supply.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Servicio de Tatuajes */}
          <div className="bg-[var(--card-bg)] p-8 rounded-lg shadow-lg text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] mb-4">
              Tatuajes Artísticos
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              En Big Brother Supply, convertimos tus ideas en obras de arte permanentes. Ofrecemos una variedad de estilos, desde realismo hasta tradicional, neo-tradicional, fantasía, blackwork y mucho más. Nuestros artistas trabajan contigo para crear un diseño único y personalizado que refleje tu visión.
            </p>
            <ul className="list-disc list-inside mt-6 space-y-2 text-lg leading-8 text-gray-300">
              <li>Diseños personalizados</li>
              <li>Amplia gama de estilos</li>
              <li>Materiales de alta calidad</li>
              <li>Ambiente higiénico y seguro</li>
            </ul>
            <a href="/booking" className="btn-primary mt-8 inline-block">Agenda tu Cita</a>
          </div>

          {/* Servicio de Tatuajes para Bodas */}
          <div className="bg-[var(--card-bg)] p-8 rounded-lg shadow-lg text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] mb-4">
              Tatuajes para Bodas y Eventos
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              ¿Buscas algo único para tu boda o evento especial? Ofrecemos un servicio exclusivo de tatuajes temporales o pequeños tatuajes permanentes en vivo, para que tus invitados se lleven un recuerdo inolvidable. ¡Una forma original y divertida de celebrar!
            </p>
            <ul className="list-disc list-inside mt-6 space-y-2 text-lg leading-8 text-gray-300">
              <li>Tatuajes temporales personalizados</li>
              <li>Mini tatuajes permanentes en vivo</li>
              <li>Diseños temáticos para eventos</li>
              <li>Experiencia interactiva para invitados</li>
            </ul>
            <a href="/contacto" className="btn-primary mt-8 inline-block">Consulta disponibilidad</a>
          </div>

          {/* Servicio de Piercings */}
          <div className="bg-[var(--card-bg)] p-8 rounded-lg shadow-lg text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] mb-4">
              Piercings Profesionales
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nuestro estudio cuenta con piercers experimentados que realizan perforaciones con la máxima seguridad e higiene. Ofrecemos una amplia selección de joyería de alta calidad y te asesoramos sobre los cuidados post-perforación para una curación óptima.
            </p>
            <ul className="list-disc list-inside mt-6 space-y-2 text-lg leading-8 text-gray-300">
              <li>Perforaciones seguras y estériles</li>
              <li>Amplia selección de joyería</li>
              <li>Asesoramiento personalizado</li>
              <li>Seguimiento post-perforación</li>
            </ul>
            <a href="/booking" className="btn-primary mt-8 inline-block">Reserva tu Piercing</a>
          </div>
        </div>
      </div>
    </div>
  );
}
