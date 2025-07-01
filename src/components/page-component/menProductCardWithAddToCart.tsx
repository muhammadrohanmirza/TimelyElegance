"use client";
import { useCart } from '../../app/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  _id: string;
  productName: string;
  price: number;
  imageUrl: string;
  slug: string;
};

export default function MenProductCardWithAddToCart({ product }: { product: Product }) {
  const { addToCart } = useCart();


  return (
<div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
  <div className="p-4">
    <Link href={`/menwatches/${product.slug}`}>
      <div className="w-full h-48 sm:h-60 md:h-64 relative">
        <Image
          src={product.imageUrl}
          alt={product.productName}
          fill
          className="object-cover rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <h3 className="text-xs sm:text-sm text-black font-semibold mt-2 line-clamp-1">
        {product.productName}
      </h3>
      <p className="text-gray-600 text-xs sm:text-sm mt-1">
        Rs. {product.price}
      </p>
    </Link>

    <button
      className="mt-4 w-full bg-black text-white text-xs sm:text-sm font-medium py-2 rounded-md hover:bg-gray-800 transition"
      onClick={() =>
        addToCart({
          ...product,
          _id: product.slug,
        })
      }
    >
      Add to Cart
    </button>
  </div>
</div>

  );
}


