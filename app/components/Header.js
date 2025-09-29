'use client';

import { Fragment, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const mainNavigation = [
        { name: "Inicio", href: "/" },
        { name: "El Estudio", href: "/estudio" },
        { name: "Cuidados", href: "/cuidados" },
        { name: "Curso profesional de piercings", href: "/cursos" },
        { name: "Trabajos", href: "/trabajos" },
        { name: "Servicios Tatuajes Bodas", href: "/servicios" },
        { name: "Noticias", href: "/noticias" },
        { name: "Libro de visitas", href: "/libro-de-visitas" },
        { name: "Contacto", href: "/contacto" },
    ];

    return (
      <header className="fixed top-0 z-[999] bg-gray-950/90 backdrop-blur-md text-white shadow-lg w-full border-b border-gray-800">
        <nav
          className="flex items-center justify-between px-12 py-4"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex flex-1">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/big_naranja-02.avif" alt="Big Brother Supply Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold">Big Brother Supply</span>
            </Link>
          </div>
  
          {/* Botón hamburguesa (solo móvil) */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--foreground)]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
  
          {/* Navegación desktop */}
          <div className="hidden lg:flex lg:gap-x-10 flex-1 justify-center items-center">

            {/* Remove productCategories dropdown and iterate directly over mainNavigation */}
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium tracking-wide text-[var(--foreground)] transition-colors hover:text-[var(--primary-color)]"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[var(--primary-color)] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
  
          {/* Language Selector */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-[var(--foreground)] hover:text-[var(--primary-color)]">
              English <span aria-hidden="true">→</span>
            </a>
          </div>
        </nav>
      </header>
    );
  }
  