
// import { sanityFetch } from "@/sanity/lib/fetch";
// import { allsmartproduct } from "@/sanity/lib/queries";
// import Image from "next/image";
// import Link from "next/link";

// type Product = {
//   productName: string;
//   price: number;
//   imageUrl: string;
//   slug: string;
// };

// export default async function SmartWatchCollection() {
//   const products: Product[] = await sanityFetch({ query: allsmartproduct });

//   return (

    

//     <div>
//       <h2 className="text-2xl px-10 py-5 underline font-bold">
//         Smart Watches Collection
//       </h2>


//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
//         {products.map((product) => (
//           <Link href={`/smartwatches/${product.slug}`} key={product.slug}>
//             <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 cursor-pointer">
//               <div className="p-4">
//                 <Image
//                   src={product.imageUrl}
//                   alt={product.productName}
//                   width={400}
//                   height={300}
//                   className="w-full h-60"
//                 />
//                 <h3 className="text-md text-black font-semibold mt-2">
//                   {product.productName}
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-1">Rs. {product.price}</p>
//                 <button className="mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-800 transition">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }



import { sanityFetch } from '@/sanity/lib/fetch';
import { allsmartproduct } from "@/sanity/lib/queries";
import ProductCardWithAddToCart from '../../components/cart-component/smartProductCardWithAddToCart';

type Product = {
  productName: string;
  price: number;
  imageUrl: string;
  slug: string;
};

export default async function SmartWatchCollection() {
  const products: Product[] = await sanityFetch({ query: allsmartproduct });

  return (
    <div>
      <h2 className="text-2xl px-10 py-5 underline font-bold">
        Smart&apos;s Watches Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
        {products.map((product) => (
          <ProductCardWithAddToCart
            key={product.slug}
            product={{ ...product, _id: product.slug }} // add fallback _id
          />
        ))}
      </div>
    </div>
  );
}