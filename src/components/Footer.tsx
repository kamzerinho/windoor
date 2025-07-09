import Navbarfooter from '@/components/navbar-footer';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-6">
      <div className="flex container mx-auto justify-between items-center">
              <Link href="home" className="">
        <p className="text-2xl font-bold">WinDoor<span>Vision</span></p>
      </Link>
    <Navbarfooter></Navbarfooter></div>
        <div className="flex justify-center my-2"><p>&copy; {new Date().getFullYear()} WinDoorVision Wszelkie prawa zastrzeżone.</p></div>
    </footer>
  )
}