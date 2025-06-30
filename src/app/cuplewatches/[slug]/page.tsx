
"use client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { cupleProductBySlug } from "@/sanity/lib/queries";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Define product type
interface Product {
  _id: string;
  productName: string;
  description: string;
  imageUrl: string;
  inventory: number;
  price: number;
}

type Params = {
  params: {
    slug: string;
  };
};

export default function ProductDetail({ params }: Params) {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct = await sanityFetch({
        query: cupleProductBySlug,
        params: { slug: params.slug },
      });
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, [params.slug]);

  

  const buyNow = () => {
    if (!product) return;
    sessionStorage.setItem("checkoutItems", JSON.stringify([{ ...product, quantity: 1 }]));
    router.push("/checkout");
  };

  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            src={product.imageUrl}
            alt={product.productName}
            width={300}
            height={200}
            className="rounded-lg mb-6"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              TimelyElegance
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.productName}
            </h1>

            <p className="leading-relaxed">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3 font-bold">Stock Available:</span>
                {product.inventory}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6">
              <span className="text-2xl font-bold text-gray-900">
                Rs. {product.price}
              </span>

              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={buyNow}
                  className="flex-1 sm:flex-none px-6 py-2 text-white border border-black hover:text-black bg-black hover:bg-white rounded-lg transition duration-200"
                >
                  Buy Now
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
