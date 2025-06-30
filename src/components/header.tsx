'use client';
import HeaderSlider from "@/components/header_slider";

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag } from 'react-feather';
import MobileMenu from './mobileMenue'; // ✅ Adjust path as needed
import Login from './login'; // ✅ Adjust path
import { useCart } from '../app/context/CartContext';

export default function Header() {
   const { cartCount, toggleCart } = useCart();
  return (
    <header className=" sticky z-50 top-0 w-full bg-black text-white shadow-md">
      <HeaderSlider/>

      <div className="flex items-center justify-between px-4 py-3 md:px-8">

        {/* MOBILE LEFT: Hamburger Menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>

        {/* LEFT (Desktop): Logo */}
        <div className="hidden md:flex md:flex-1">
          <Link href="/">
            <Image
              src="/logo.png"
              width={60}
              height={60}
              alt="TimelyElegance"
              className="rounded-full"
            />
          </Link>
        </div>

        {/* CENTER: Logo (Mobile) */}
        <div className="mx-auto md:hidden">
          <Link href="/">
            <Image
              src="/logo.png"
              width={60}
              height={60}
              alt="TimelyElegance"
              className="rounded-full"
            />
          </Link>
        </div>

        {/* CENTER (Desktop): Navigation Links */}
        <nav className="hidden md:flex justify-center space-x-6">
          {[
            { href: '/', label: 'Home' },
            { href: '/menwatches', label: "Men's Watches" },
            { href: '/womenwatches', label: "Women's Watches" },
            { href: '/cuplewatches', label: 'Cuple Watches' },
            { href: '/smartwatches', label: 'Smart Watches' },
            { href: '/luxurywatches', label: 'Luxury Watches' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-400 hover:text-white hover:underline font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT: Cart + Login */}
        <div className="flex items-center space-x-4 md:flex-1 md:justify-end">
          <button onClick={toggleCart} className="relative">
        <ShoppingBag size={20} />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
            {cartCount}
          </span>
        )}
      </button>

          <div className="hidden md:block">
            <Login />
          </div>
        </div>
      </div>
    </header>
  );
}
