export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-[var(--primary-color)] mb-8">Agenda tu Cita</h1>
        <p className="text-lg mb-12">Reserva tu próxima sesión de tatuaje con nosotros.</p>
        {/* Future booking form/integration will go here */}
        <button className="btn-primary">Contactar para Agendar</button>
      </div>
    </div>
  );
}
