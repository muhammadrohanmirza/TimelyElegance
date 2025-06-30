'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Send } from 'react-feather';
import Login from './login'; // ✅ Adjust if needed
import Newsletter from './Newsletter';

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menwatches', label: "Men's Watches" },
    { href: '/womenwatches', label: "Women's Watches" },
    { href: '/cuplewatches', label: 'Couple Watches' },
    { href: '/smartwatches', label: 'Smart Watches' },
    { href: '/luxurywatches', label: 'Luxury Watches' },
  ];

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="text-white hover:text-gray-400 transition"
        aria-label="Open Menu"
      >
        <Menu size={24} />
      </button>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-[64px] left-0 w-80 h-[calc(100vh-64px)] bg-black text-gray-400 z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
      >
        <div className="p-4">
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-gray-400"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-white hover:underline font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <hr className="my-4 border-gray-600" />

          {/* Login */}
          <div className="bg-black p-4">
            <Login />
          </div>

          {/* Newsletter */}
          <Newsletter/>
        </div>
      </div>
    </div>
  );
}
