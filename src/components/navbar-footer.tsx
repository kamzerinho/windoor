'use client';

import Link from 'next/link';

export default function Navbarfooter() {


  return (
    <nav className="py-4 bg-dark">


      <ul className="flex items-center space-x-6 text-white-700 transition ease-in">
      <li className="relative">
          <Link href="angebot" className="">Angebot</Link>
        </li>
        <li>
          <Link href="/" className="hover:text-gray-600 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-600 transition-colors">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}