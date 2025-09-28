'use client';

import { Fragment, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const productCategories = [
        { name: "Maquinas para Tatuar", href: "#" },
        { name: "Pigmentos", href: "#" },
        { name: "Cartuchos Agujas Grips", href: "#" },
        { name: "Fuentes", href: "#" },
        { name: "Mobiliario", href: "#" },
        { name: "Descartables", href: "#" },
        { name: "Asepsia y Cuidado", href: "#" },
        { name: "Procesos", href: "#" },
        { name: "PMU", href: "#" },
        { name: "Piercing place", href: "#" },
    ];

    const mainNavigation = [
      { name: "Galería de Tatuajes", href: "/gallery" },
      { name: "Agenda tu Cita", href: "/booking" },
      { name: "Blog", href: "/blog" },
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
              <img src="/images/big_naranja-02.avif" alt="Big Brother Tattoo Logo" className="h-10 w-auto" />
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

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-[var(--foreground)] shadow-sm hover:text-[var(--primary-color)]">
                  Productos
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
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
                <MenuItems className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {productCategories.map((item) => (
                      <MenuItem key={item.name}>
                        {({ focus }) => (
                          <Link
                            href={item.href}
                            className={classNames(
                              focus ? 'bg-gray-700 text-[var(--primary-color)]' : 'text-[var(--foreground)]',
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
  
          {/* Login */}
          <div className="hidden lg:flex flex-1 justify-end">
            <Link
              href="#"
              className="rounded-lg border border-[var(--primary-color)] px-4 py-2 text-sm font-semibold text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-gray-900 transition-colors"
            >
              Log in →
            </Link>
          </div>
        </nav>
      </header>
    );
  }
  