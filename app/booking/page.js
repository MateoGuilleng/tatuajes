export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center">
      <div className="max-w-md p-8 rounded-lg shadow-lg bg-[var(--card-bg)]">
        <h1 className="text-3xl font-bold mb-6 text-center">Agenda tu Cita</h1>
        <p className="text-lg text-center mb-8">
          ¡Estamos emocionados de ayudarte a crear tu próximo tatuaje!
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm bg-[var(--background)] text-[var(--foreground)]"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm bg-[var(--background)] text-[var(--foreground)]"
              placeholder="tu.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)]">
              Número de Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm bg-[var(--background)] text-[var(--foreground)]"
              placeholder="(123) 456-7890"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-[var(--foreground)]">
              Fecha Preferida
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm bg-[var(--background)] text-[var(--foreground)]"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-[var(--foreground)]">
              Describe tu idea de tatuaje
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm bg-[var(--background)] text-[var(--foreground)]"
              placeholder="Describe tu idea, tamaño, ubicación y estilo preferido."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--primary-color)] hover:bg-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)]"
          >
            Solicitar Cita
          </button>
        </form>
      </div>
    </div>
  );
}
