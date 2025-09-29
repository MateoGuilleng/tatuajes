export default function EstudioPage() {
    return (
      <div className="bg-[var(--background)] text-[var(--foreground)] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl uppercase text-[var(--primary-color)]">
              Nuestro Estudio
            </h1>
            <p className="mt-4 text-lg leading-8 text-[var(--secondary-color)]">
              Conoce más sobre Big Brother Supply, nuestra historia, nuestra pasión y nuestro equipo de artistas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Sección de Historia */}
            <div className="lg:pr-8">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl mb-6">
                Información y Precios
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--foreground)]">
                Big Brother Supply es tu destino principal para todo lo relacionado con el arte del tatuaje. Somos una tienda dedicada a ofrecer una amplia gama de productos de alta calidad para artistas del tatuaje, desde máquinas y pigmentos hasta agujas, grips, mobiliario y equipos de asepsia.
              </p>
              <p className="mt-4 text-lg leading-8 text-[var(--foreground)]">
                Nos comprometemos a proporcionar a nuestros clientes las mejores herramientas y suministros del mercado, garantizando que cada artista tenga lo necesario para crear obras de arte excepcionales. También ofrecemos servicio técnico especializado y asesoramiento experto para apoyar a la comunidad de tatuadores en su crecimiento y éxito.
              </p>
            </div>
            <div className="relative h-96 w-full">
              <img
                src="/images/tatto2.jpg" // Reemplaza con una imagen relevante si tienes una mejor
                alt="Big Brother Supply Studio"
                className="rounded-xl shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-24">
            {/* Sección de Filosofía */}
            <div className="relative h-96 w-full lg:order-2">
              <img
                src="/images/tatto.jpg" // Reemplaza con una imagen relevante
                alt="Filosofía de Big Brother Supply"
                className="rounded-xl shadow-xl object-cover w-full h-full"
              />
            </div>
            <div className="lg:pl-8 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl mb-6">
                Nuestra Filosofía
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--foreground)]">
                En Big Brother Supply, creemos que cada tatuaje es una historia, un sentimiento, una obra de arte personal. Nos esforzamos por crear diseños únicos que reflejen la individualidad de cada cliente, utilizando técnicas avanzadas y los más altos estándares de higiene.
              </p>
              <p className="mt-4 text-lg leading-8 text-[var(--foreground)]">
                Nuestro objetivo es transformar tus ideas en una realidad vibrante y duradera, proporcionando una experiencia cómoda y memorable en un ambiente profesional y acogedor.
              </p>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl mb-6">
              Ubicación y horarios
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--foreground)] mb-12">
              Encuéntranos o recibe nuestros productos y servicios:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {/* Domicilio Bogotá */}
              <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md flex items-start space-x-4">
                <img src="/images/Moto.png" alt="Domicilio" className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">Domicilio Bogotá</h3>
                  <p className="text-gray-300">Sin costo para pedidos con monto a partir de $ 70.000</p>
                  <p className="text-gray-300">3237841351</p>
                </div>
              </div>
              {/* Tienda móvil - Van Bogotá */}
              <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md flex items-start space-x-4">
                <img src="/images/camion_Mesa_de_trabajo_1.png" alt="Tienda móvil" className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">Tienda móvil - Van Bogotá</h3>
                  <p className="text-gray-300">Horario de Lunes a Viernes 9:00 a.m. a 6:00 p.m.</p>
                  <p className="text-gray-300">Sábados: 9:00a.m. a 5:00 p.m Domicilios gratis</p>
                  <p className="text-gray-300">3237841351</p>
                </div>
              </div>
              {/* Línea envíos nacionales */}
              <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md flex items-start space-x-4">
                <img src="/images/Col.png" alt="Envíos nacionales" className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">Línea envíos nacionales</h3>
                  <p className="text-gray-300">Horario de Lunes a Sábado : 8:00 a.m. a 6:00 p.m.</p>
                  <p className="text-gray-300">314 8444512</p>
                </div>
              </div>
              {/* Tattoo Studio */}
              <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md flex items-start space-x-4">
                <img src="/images/Store.png" alt="Tattoo Studio" className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">Tattoo Studio</h3>
                  <p className="text-gray-300">Carrera 7 #54a-55</p>
                  <p className="text-gray-300">Horario de Lunes a Sábado : 10:00 a.m. a 8:00 p.m.</p>
                  <p className="text-gray-300">323 7841372</p>
                  <p className="text-gray-300">Fijo 6013226891</p>
                </div>
              </div>
              {/* Supply Chapinero */}
              <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md flex items-start space-x-4">
                <img src="/images/location_Mesa_de_trabajo_1.png" alt="Supply Chapinero" className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">Supply Chapinero</h3>
                  <p className="text-gray-300">Cra 7 # 54a -55 Bogotá, Colombia</p>
                  <p className="text-gray-300">L- S: 10 am a 8 pm</p>
                  <p className="text-gray-300">D - F: Cerrado.</p>
                  <p className="text-gray-300">Cel y Whatsapp +57 323 784 1372 - (601) 3226891</p>
                </div>
              </div>
              {/* Centro Comercial Vía libre */}
              <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md flex items-start space-x-4">
                <img src="/images/location_Mesa_de_trabajo_1.png" alt="Centro Comercial Vía libre" className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">Centro Comercial Vía libre</h3>
                  <p className="text-gray-300">Cra. 5 #18 -83 Local 303 Bogotá, Colombia</p>
                  <p className="text-gray-300">L- V: 10 am a 7 pm</p>
                  <p className="text-gray-300">S: 10 am a 6 pm</p>
                  <p className="text-gray-300">D - F: Cerrado.</p>
                  <p className="text-gray-300">Cel y Whatsapp +57 310 697 4405</p>
                </div>
              </div>
              {/* Metro Centro Piercing Place */}
              <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md flex items-start space-x-4">
                <img src="/images/location_Mesa_de_trabajo_1.png" alt="Metro Centro Piercing Place" className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">Metro Centro Piercing Place</h3>
                  <p className="text-gray-300">Local 311 Cra 10 # 11-71</p>
                  <p className="text-gray-300">L- V: 8:30 am a 6 pm</p>
                  <p className="text-gray-300">S: 9 am a 5 pm</p>
                  <p className="text-gray-300">D - F: Cerrado.</p>
                  <p className="text-gray-300">Cel y Whatsapp +57 319 572 8591</p>
                </div>
              </div>
              {/* Metro Centro Local 211 */}
              <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md flex items-start space-x-4">
                <img src="/images/location_Mesa_de_trabajo_1.png" alt="Metro Centro Local 211" className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">Metro Centro Local 211 Cra 10 # 11-71</h3>
                  <p className="text-gray-300">Local 211 Cra 10 # 11-71</p>
                  <p className="text-gray-300">L- V: 8:30 am a 6 pm</p>
                  <p className="text-gray-300">S: 9 am a 5 pm</p>
                  <p className="text-gray-300">D - F: Cerrado.</p>
                  <p className="text-gray-300">Cel y Whatsapp +57 310 697 9056</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl mb-6">
              Big Brother Supply Tattoo
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--foreground)] mb-12">
              Productos y Servicios
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
              <span className="bg-[var(--card-bg)] px-4 py-2 rounded-md">Maquinas para Tatuar</span>
              <span className="bg-[var(--card-bg)] px-4 py-2 rounded-md">Cartuchos Agujas Grips</span>
              <span className="bg-[var(--card-bg)] px-4 py-2 rounded-md">Fuentes</span>
              <span className="bg-[var(--card-bg)] px-4 py-2 rounded-md">Mobiliario</span>
              <span className="bg-[var(--card-bg)] px-4 py-2 rounded-md">Descartables</span>
              <span className="bg-[var(--card-bg)] px-4 py-2 rounded-md">Asepsia y Cuidado</span>
              <span className="bg-[var(--card-bg)] px-4 py-2 rounded-md">Procesos</span>
              <span className="bg-[var(--card-bg)] px-4 py-2 rounded-md">PMU</span>
              <span className="bg-[var(--card-bg)] px-4 py-2 rounded-md">Servicio Técnico</span>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl mb-6">
              Conoce a Nuestro Equipo
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--foreground)] mb-12">
              Un grupo de artistas apasionados y dedicados a su oficio.
            </p>
            {/* Placeholder para equipo - podrías expandir esto con tarjetas de cada artista */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="w-64 bg-[var(--card-bg)] rounded-lg shadow-lg p-6 text-center">
                <img src="/images/Yomico.webp" alt="Artista 1" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold text-[var(--foreground)]">Fido</h3>
                <p className="text-md text-[var(--primary-color)]">Fundador y Artista Principal</p>
                <p className="text-sm text-gray-400 mt-2">Especialidad: Realismo, Neotradicional</p>
              </div>
              <div className="w-64 bg-[var(--card-bg)] rounded-lg shadow-lg p-6 text-center">
                <img src="/images/tatuaje_white_2.png" alt="Artista 2" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold text-[var(--foreground)]">Nina</h3>
                <p className="text-md text-[var(--primary-color)]">Artista Senior</p>
                <p className="text-sm text-gray-400 mt-2">Especialidad: Línea fina, Acuarela</p>
              </div>
              {/* Agrega más artistas si es necesario */}
            </div>
          </div>
        </div>
      </div>
    );
  }
