// import { sanityFetch } from "@/sanity/lib/fetch";
// import { fourcupleproduct} from "@/sanity/lib/queries";
// import Image from "next/image";
// import Link from "next/link";

// type Product = {
//   productName: string;
//   price: number;
//   imageUrl: string;
//   slug: {
//     current: string;
//   };
// }

// export default async function CupleWatchCollection() {
//   const products: Product[] = await sanityFetch({ query: fourcupleproduct});

//   const isScrollable = products.length > 3;

//   return (
//     <div>
//       <h2 className="text-2xl px-10 py-5 underline font-bold mb-2 mt-2">
//        Cuple Watches Collections :-
//       </h2>

//       <div
//         className={`px-10 ${
//           isScrollable
//             ? "flex overflow-x-auto space-x-6 pb-4"
//             : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//         }`}
//       >
//         {products.map((product) => (
//           <Link href={`/cuplewatches/${product.slug.current}`} key={product.slug.current}>
//           <div
//             key={product.productName}
//             className={`${
//               isScrollable ? "min-w-[250px] max-w-[250px] flex-shrink-0" : ""
//             } bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200`}
//           >
//             <div className="p-4">
//               <Image
//                 src={product.imageUrl}
//                 alt={product.productName}
//                 width={400}
//                 height={300}
//                 className="w-full h-60 object-cover"
//               />
//               <h3 className="text-md text-black font-semibold mt-2">
//                 {product.productName}
//               </h3>
//               <p className="text-gray-600 text-sm mt-1">
//                 Rs. {product.price}
//               </p>
//               <button className="flex-1 sm:flex-none w-full font-extrabold px-6 py-2 text-black border border-black hover:bg-black hover:text-white rounded-lg transition duration-200" >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//           </Link>
//         ))}

// {/* See More card */}
// <div className="min-w-[250px] max-w-[250px] my-14 flex items-center justify-center h-[280px]">
//   <div className="w-28 h-28 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center shadow-md">
//    <Link href={"/cuplewatches"}>
//     <button className="text-blue-600 hover:text-blue-800 font-semibold">
//       See More →
//     </button>
//    </Link>
//   </div>
// </div>

//       </div>
//     </div>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import { useCart } from '../../app/context/CartContext';
import { sanityFetch } from '@/sanity/lib/fetch';
import { fourcupleproduct} from "@/sanity/lib/queries";
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  _id?: string;
  productName: string;
  price: number;
  imageUrl: string;
  slug: {
    current: string;
  };
};

export default function MenWatchCollection() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchData() {
      const data = await sanityFetch({ query: fourcupleproduct });
      setProducts(data);
    }
    fetchData();
  }, []);

  const isScrollable = products.length > 3;

  return (
    <div>
      <h2 className="text-2xl px-10 py-5 underline font-bold mb-2 mt-2">
      Cuple Watches Collections :-
      </h2>

      <div
        className={`px-10 ${
          isScrollable
            ? 'flex overflow-x-auto space-x-6 pb-4'
            : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
        }`}
      >
        {products.map((product) => (
          <div
            key={product.slug.current}
            className={`${
              isScrollable ? 'min-w-[250px] max-w-[250px] flex-shrink-0' : ''
            } bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200`}
          >
            <div className="p-4">
              <Link href={`/cuplewatches/${product.slug.current}`}>
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
                <p className="text-gray-600 text-sm mt-1">
                  Rs. {product.price}
                </p>
              </Link>

              <button
                onClick={() =>
                  addToCart({
                    ...product,
                    _id: product.slug.current,
                  })
                }
                className="mt-2 w-full font-extrabold px-6 py-2 text-black border border-black hover:bg-black hover:text-white rounded-lg transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}

        {/* See More Card */}
        <div className="min-w-[250px] max-w-[250px] my-14 flex items-center justify-center h-[280px]">
          <div className="w-28 h-28 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center shadow-md">
            <Link href="/cuplewatches">
              <button className="text-blue-600 hover:text-blue-800 font-semibold">
                See More →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}