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

    // Split navigation between visible items and overflow items for a cleaner navbar
    const visibleItems = mainNavigation.filter(item => [
      'Inicio',
      'El Estudio',
      'Trabajos',
      'Servicios Tatuajes Bodas',
      'Contacto'
    ].includes(item.name))

    const overflowItems = mainNavigation.filter(item => !visibleItems.includes(item))

    return (
      <header className="fixed top-0 z-[999] bg-red-950/90 backdrop-blur-md text-white shadow-lg w-full border-b border-red-600/50">
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

            {/* Primary visible navigation */}
            {visibleItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium tracking-wide text-[var(--foreground)] transition-colors hover:text-[var(--primary-color)]"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[var(--primary-color)] transition-all group-hover:w-full"></span>
              </Link>
            ))}

            {/* Overflow menu */}
            {overflowItems.length > 0 && (
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium tracking-wide text-[var(--foreground)] hover:text-[var(--primary-color)] focus:outline-none">
                    Más
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                    </svg>
                  </MenuButton>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 mt-2 w-64 origin-top-right rounded-md bg-white text-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-900 dark:text-gray-100">
                    <div className="py-1">
                      {overflowItems.map((item) => (
                        <MenuItem key={item.name}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100' : 'text-gray-700 dark:text-gray-200',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>
            )}
          </div>
  
     
          
        </nav>
      </header>
    );
  }
  