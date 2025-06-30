"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/banner/1.jpeg",
  "/banner/2.jpg",
  "/banner/3.webp",
  "/banner/4.webp",
  "/banner/5.webp",
  "/banner/6.png",
  "/banner/7.jpg",
//   "/banners/8.jpg",
//   "/banners/9.jpg",
//   "/banners/10.jpg",
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className=" relative w-full h-[200px] md:h-[400px] overflow-hidden">
      <div className=" relative w-full h-full ">
        <Image
          src={images[current]}
          alt={`Banner ${current + 1}`}
          fill
          className=" transition-opacity duration-700"
        />
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default BannerSlider;
