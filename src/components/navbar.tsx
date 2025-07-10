'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  return (
    <nav className="flex items-center justify-between py-4 bg-dark shadow-md container mx-auto max-sm:p-5">
      <Link href="/" className="">
        <p className="flex flex-col text-center text-2xl text-white font-medium leading-6">WinDoor<span>Vision</span></p>
      </Link>

      <ul className="flex items-center space-x-15 text-white-700 transition ease-in">
      <li className="relative">
        
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onMouseEnter={() => setIsDropdownOpen(!isDropdownOpen)}
           
            className="hover:text-gray-400 transition-colors focus:outline-none"
          >
          <Link href="/angebot" className="">  Angebot▾</Link>
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
          <Link href="/uber" className="hover:text-gray-600 transition-colors">
            Über
          </Link>
        </li>
      </ul>
    </nav>
  );
}