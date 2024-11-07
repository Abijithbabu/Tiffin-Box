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
      name: "Albondigas",
      price: "30",
      modelUrl: "/models/albondigas.glb",
    },
    {
      name: "Bavette Special Burger",
      price: "40",
      modelUrl: "/models/bavette-special-burger.glb",
    },
    {
      name: "Crispy Steak (asado)",
      price: "50",
      modelUrl: "/models/crispy-steak-(asado).glb",
    },
    {
      name: "King Prawns",
      price: "60",
      modelUrl: "/models/king-prawns.glb",
    },
    {
      name: "Padron Peppers",
      price: "80",
      modelUrl: "/models/padron-peppers.glb",
    },
    {
      name: "Potato And Leek Gratin",
      price: "100",
      modelUrl: "/models/potato-and-leek-gratin.glb",
    },
    {
      name: "Steak Tartare",
      price: "100",
      modelUrl: "/models/steak-tartare.glb",
    },
  ];

const Special = ({ }) => {
  return (
    <section className="relative flex h-full w-full justify-center">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12 tracking-widest font-thin">
        <div className="flex flex-col gap-8 pt-28 items-center justify-center font-jakarta text-xl font-thin uppercase sm:text-8xl md:text-9xl lg:text-7xl tracking-widest leading-tight">
          <p className="text-lg text-yellow">
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
