'use client';
import Image from 'next/image';
import Link from 'next/link';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold">TimelyElegance</span>
          </div>
          <p className="text-gray-400 hover:text-white">
            Discover timeless style with our exclusive collection of watches for every occasion.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/menwatches" className="hover:text-white hover:underline">Men&apos;s Watches</Link></li>
            <li><Link href="/womenwatches" className="hover:text-white hover:underline">Women&apos;s Watches</Link></li>
            <li><Link href="/cuplewatches" className="hover:text-white hover:underline">Couple Watches</Link></li>
            <li><Link href="/smartwatches" className="hover:text-white hover:underline">Smart Watches</Link></li>
            <li><Link href="/luxurywatches" className="hover:text-white hover:underline">luxury Watches</Link></li>

          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400">
            
            <li><Link href="https://wa.me/923221469115" target='_blank' className="hover:text-white hover:underline">Contact Us</Link> </li>
            <li><Link href="/termsandconditions" target='_blank' className="hover:text-white hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/return" target='_blank' className="hover:text-white hover:underline">Returns</Link></li>
            <li><Link href="/shipping" target='_blank' className="hover:text-white hover:underline">Shipping</Link></li>
          <li>Feel Free To Contact With Us</li>
          </ul>
        </div>

        {/* Newsletter + Social */}

        <Newsletter/>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TimelyElegance. All rights reserved.
      </div>
    </footer>
  );
};



export default Footer;




