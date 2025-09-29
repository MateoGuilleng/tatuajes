export default function ContactoPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl uppercase text-[var(--primary-color)] mb-6">
            Contáctanos
          </h1>
          <p className="mt-4 text-lg leading-8 text-[var(--secondary-color)] mb-12">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta o para agendar tu cita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Información de Contacto */}
          <div className="bg-[var(--card-bg)] p-8 rounded-lg shadow-lg text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] mb-4">
              Nuestros Datos
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              <strong className="text-[var(--primary-color)]">Dirección:</strong> Camino Viejo de Coín, 14. 29651. Mijas Costa. Málaga.
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              <strong className="text-[var(--primary-color)]">Teléfono Fijo:</strong> 952 476 811
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              <strong className="text-[var(--primary-color)]">Móvil / WhatsApp:</strong> 646 835 944
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              <strong className="text-[var(--primary-color)]">Email:</strong> fido@fidotattoo.com
            </p>
            <div className="mt-8">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Camino+Viejo+de+Coín,+14.+29651.+Mijas+Costa.+Málaga."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-[var(--card-bg)] p-8 rounded-lg shadow-lg text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] mb-4">
              Envíanos un Mensaje
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]">Nombre Completo</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm bg-[var(--background)] text-[var(--foreground)]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">Correo Electrónico</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm bg-[var(--background)] text-[var(--foreground)]" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)]">Mensaje</label>
                <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm bg-[var(--background)] text-[var(--foreground)]"></textarea>
              </div>
              <button type="submit" className="w-full btn-primary">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
