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

const Special = ({}) => {
  return (
    <section className="relative flex h-full w-full justify-center">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 2xl:gap-24 py-12 font-thin tracking-widest">
        <div className="flex flex-col items-center justify-center gap-2 pt-8 font-jakarta text-xl font-thin uppercase leading-tight tracking-[0.5rem] lg:tracking-[0.9rem] sm:text-3xl lg:gap-8 lg:pt-28 lg:text-4xl 2xl:text-6xl">
          <p className="text-xs tracking-[0.3rem] text-yellow 2xl:text-sm">
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
