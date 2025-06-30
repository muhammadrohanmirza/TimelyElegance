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

export default function SmartProductCardWithAddToCart({ product }: { product: Product }) {
  const { addToCart } = useCart();


  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 cursor-pointer">
      <div className="p-4">
        <Link href={`/smartwatches/${product.slug}`}>
          <Image
            src={product.imageUrl}
            alt={product.productName}
            width={400}
            height={300}
            className="w-full h-60 object-cover"
          />
          <h3 className="text-md text-black font-semibold mt-2">
            {product.productName}
          </h3>
          <p className="text-gray-600 text-sm mt-1">Rs. {product.price}</p>
        </Link>

        <button
          className="mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-800 transition"
          onClick={() =>
            addToCart({
              ...product,
              _id: product.slug, // fallback if you don’t have actual _id
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}


