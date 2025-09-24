export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] p-6 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[var(--primary-color)]">Big Brother Supply Tattoo</h3>
          <p className="text-sm">Todo lo que necesitas para tu estudio de tatuaje en un solo lugar.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[var(--primary-color)]">Categorías</h3>
          <ul>
            <li><a href="#" className="text-sm hover:text-[var(--primary-color)]">Maquinas para Tatuar</a></li>
            <li><a href="#" className="text-sm hover:text-[var(--primary-color)]">Pigmentos</a></li>
            <li><a href="#" className="text-sm hover:text-[var(--primary-color)]">Cartuchos Agujas Grips</a></li>
            <li><a href="#" className="text-sm hover:text-[var(--primary-color)]">Fuentes</a></li>
            <li><a href="#" className="text-sm hover:text-[var(--primary-color)]">Mobiliario</a></li>
            <li><a href="#" className="text-sm hover:text-[var(--primary-color)]">Descartables</a></li>
            <li><a href="#" className="text-sm hover:text-[var(--primary-color)]">Asepsia y Cuidado</a></li>
            <li><a href="#" className="text-sm hover:text-[var(--primary-color)]">Procesos</a></li>
            <li><a href="#" className="text-sm hover:text-[var(--primary-color)]">PMU</a></li>
            <li><a href="#" className="text-sm hover:text-[var(--primary-color)]">Piercing place</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[var(--primary-color)]">Contacto</h3>
          <p className="text-sm">**Supply Chapinero**</p>
          <p className="text-sm">Cra 7 # 54a -55 Bogotá, Colombia</p>
          <p className="text-sm">L- S: 10 am a 8 pm</p>
          <p className="text-sm">Cel y Whatsapp +57 323 784 1372 - (601) 3226891</p>

          <p className="text-sm mt-4">**Centro Comercial Vía libre**</p>
          <p className="text-sm">Cra. 5 #18 -83 Local 303 Bogotá, Colombia</p>
          <p className="text-sm">L- V: 10 am a 7 pm</p>
          <p className="text-sm">S: 10 am a 6 pm</p>
          <p className="text-sm">Cel y Whatsapp +57 310 697 4405</p>

          <p className="text-sm mt-4">**Metro Centro Piercing Place**</p>
          <p className="text-sm">Local 311 Cra 10 # 11-71</p>
          <p className="text-sm">L- V: 8:30 am a 6 pm</p>
          <p className="text-sm">S: 9 am a 5 pm</p>
          <p className="text-sm">Cel y Whatsapp +57 319 572 8591</p>

          <p className="text-sm mt-4">**Metro Centro Local 211**</p>
          <p className="text-sm">Local 211 Cra 10 # 11-71</p>
          <p className="text-sm">L- V: 8:30 am a 6 pm</p>
          <p className="text-sm">S: 9 am a 5 pm</p>
          <p className="text-sm">Cel y Whatsapp +57 310 697 9056</p>

          <p className="text-sm mt-4">**Tienda móvil - Van Bogotá**</p>
          <p className="text-sm">Horario: L-V: 9:00 a.m. a 6:00 p.m. S: 9:00a.m. a 5:00 p.m</p>
          <p className="text-sm">Domicilios gratis 3237841351</p>

          <p className="text-sm mt-4">**Domicilio Bogotá**</p>
          <p className="text-sm">Sin costo para pedidos con monto a partir de $ 70.000 3237841351</p>

          <p className="text-sm mt-4">**Línea envíos nacionales**</p>
          <p className="text-sm">Horario de Lunes a Sábado : 8:00 a.m. a 6:00 p.m. 314 8444512</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[var(--primary-color)]">Legal</h3>
          <ul>
            <li><a href="#" className="text-sm hover:text-[var(--primary-color)]">Política de Privacidad</a></li>
            <li><a href="#" className="text-sm hover:text-[var(--primary-color)]">Garantía y devoluciones</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        © 2025, Big Brother Supply Tattoo. Esta tienda es proporcionada por Shopify.
      </div>
    </footer>
  );
}
