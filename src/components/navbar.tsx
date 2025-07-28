'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hamburger SVG
  const Hamburger = (
    <button
      className="sm:hidden flex flex-col justify-center items-center w-10 h-10 text-white focus:outline-none"
      aria-label="Open menu"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <span className="block w-6 h-0.5 bg-white mb-1"></span>
      <span className="block w-6 h-0.5 bg-white mb-1"></span>
      <span className="block w-6 h-0.5 bg-white"></span>
    </button>
  );

  return (
    <nav className="flex items-center justify-between py-4 bg-dark shadow-md container mx-auto max-sm:p-5 relative">
      <Link href="/" className="z-20">
        <p className="flex flex-col text-center text-2xl text-white font-medium leading-6">WinDoor<span>Vision</span></p>
      </Link>

      {/* Hamburger for mobile */}
      {Hamburger}

      {/* Desktop menu */}
      <ul className="sm:flex hidden items-center space-x-15 text-white-700 transition ease-in">
        <li className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onMouseEnter={() => setIsDropdownOpen(!isDropdownOpen)}
            className="hover:text-gray-400 transition-colors focus:outline-none"
          >
            <Link href="/angebot" className="">Angebot▾</Link>
          </button>
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-black text-white border border-color-black shadow-lg rounded-lg z-10">
              <li>
                <Link
                  href="/angebot/kunststoffenster"
                  className="block px-4 py-2 hover:bg-white hover:text-black rounded-t-lg"
                >
                  Kunststofffenster
                </Link>
              </li>
              <li>
                <Link
                  href="/angebot/aluminiumfenster"
                  className="block px-4 py-2 hover:bg-white hover:text-black"
                >
                  Aluminiumfenster
                </Link>
              </li>
              <li>
                <Link
                  href="/angebot/schiebeturen"
                  className="block px-4 py-2 hover:bg-white hover:text-black"
                >
                  Schiebetüren
                </Link>
              </li>
              <li>
                <Link
                  href="/angebot/hausturen"
                  className="block px-4 py-2 hover:bg-white hover:text-black rounded-b-lg"
                >
                  Haustüren
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/informationen" className="hover:text-gray-600 transition-colors">
            Informationen
          </Link>
        </li>
        <li>
          <Link href="/fenstertyp" className="hover:text-gray-600 transition-colors">
            Fenstertyp
          </Link>
        </li>
        <li>
          <Link href="/uber" className="hover:text-gray-600 transition-colors">
            Über
          </Link>
        </li>
      </ul>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-30 flex flex-col items-center justify-center sm:hidden">
          <button
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ×
          </button>
          <ul className="flex flex-col space-y-8 text-white text-2xl">
          <li>
              <Link href="/angebot" className="block hover:bg-white hover:text-black rounded-t-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Angebot
              </Link>
            </li>
            <li>
              <Link href="/angebot/kunststoffenster" className="block hover:bg-white hover:text-black rounded-t-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Kunststofffenster
              </Link>
            </li>
            <li>
              <Link href="/angebot/aluminiumfenster" className="block hover:bg-white hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
                Aluminiumfenster
              </Link>
            </li>
            <li>
              <Link href="/angebot/schiebeturen" className="block hover:bg-white hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
                Schiebetüren
              </Link>
            </li>
            <li>
              <Link href="/angebot/hausturen" className="block hover:bg-white hover:text-black rounded-b-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Haustüren
              </Link>
            </li>
            <li>
              <Link href="/informationen" className="hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Informationen
              </Link>
            </li>
            <li>
              <Link href="/fenstertyp" className="hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Fenstertyp
              </Link>
            </li>
            <li>
              <Link href="/uber" className="hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Über
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}