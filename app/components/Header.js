export default function Header() {
    return (
      <header className="fixed top-0 z-[100] bg-gray-950/90 backdrop-blur-md text-white shadow-lg w-full border-b border-gray-800">
        <nav
          className="flex items-center justify-between px-12 py-4"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex flex-1">
            <a href="#" className="flex items-center gap-2">
              <h1 className="text-3xl font-extrabold tracking-widest text-[var(--primary-color)]">
                TATUAJES
              </h1>
            </a>
          </div>
  
          {/* Botón hamburguesa (solo móvil) */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="rounded-md p-2.5 text-[var(--foreground)] hover:bg-gray-800"
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
  
          {/* Navegación desktop */}
          <div className="hidden lg:flex lg:gap-x-10 flex-1 justify-center">
            {[
              "Maquinas para Tatuar",
              "Pigmentos",
              "Cartuchos Agujas Grips",
              "Fuentes",
              "Mobiliario",
              "Descartables",
              "Asepsia y Cuidado",
              "Procesos",
              "PMU",
              "Piercing place",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-sm font-medium tracking-wide text-[var(--foreground)] transition-colors hover:text-[var(--primary-color)]"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[var(--primary-color)] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
  
          {/* Login */}
          <div className="hidden lg:flex flex-1 justify-end">
            <a
              href="#"
              className="rounded-lg border border-[var(--primary-color)] px-4 py-2 text-sm font-semibold text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-gray-900 transition-colors"
            >
              Log in →
            </a>
          </div>
        </nav>
      </header>
    );
  }
  