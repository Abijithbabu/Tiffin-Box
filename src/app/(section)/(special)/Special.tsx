"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import type { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const slideData: {
  modelUrl: string;
  price: string;
  name: string;
}[] = [
    {
      name: "Curry Leaves & Fennel Tawa Prawns",
      price: "9.99",
      modelUrl: "/models/model-1.glb",
    },
    {
      name: "Tellicherry Black Pepper Chicken",
      price: "6.99",
      modelUrl: "/models/model-2.glb",
    },
    {
      name: "Purani Dilli Ka Lamb Seekh Kebab",
      price: "8.49",
      modelUrl: "/models/model-3.glb",
    },
    {
      name: "Tandoori Lamb Chops",
      price: "9.99",
      modelUrl: "/models/model-4.glb",
    },
    {
      name: "Mini TB Mix Kebab",
      price: "5.99",
      modelUrl: "/models/model-5.glb",
    },
    {
      name: "Alleppey Kozhi Curry",
      price: "10.99",
      modelUrl: "/models/model-6.glb",
    },
  ];

const Special = ({ }) => {
  return (
    <section className="relative flex h-full w-full justify-center">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12 tracking-widest font-thin">
        <div className="flex flex-col gap-2 md:gap-8 pt-8 md:pt-28 items-center justify-center font-jakarta text-xl font-thin uppercase sm:text-8xl md:text-9xl lg:text-6xl tracking-widest leading-tight">
          <p className="text-xs md:text-lg text-yellow">
            Featured Menu
          </p>
          <p>Discover our most</p>
          <p>popular dishes</p>
        </div>
        <div className="relative z-20 flex w-full flex-col justify-center px-2">
          <EmblaCarousel slides={slideData} options={OPTIONS} />
        </div>
      </div>
    </section>
  );
};

export default Special;
