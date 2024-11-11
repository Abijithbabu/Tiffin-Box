import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Chef = () => {
  return (
    <section
      id="chef"
      className="flex w-full items-center justify-center lg:h-1 min-h-[56rem] lg:min-h-screen"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 font-thin tracking-widest lg:gap-28">
        <div className="flex flex-col items-center justify-center gap-2 font-jakarta text-xl font-thin uppercase leading-tight tracking-[0.5rem] lg:tracking-[0.9rem] sm:text-3xl lg:gap-4 lg:text-4xl 2xl:gap-8 2xl:text-5xl">
          <p className="text-xs tracking-[0.3rem] text-yellow 2xl:text-sm">
            Chef
          </p>
          <span>Our Brand Chef</span>
        </div>
        <div className="relative flex h-full w-full flex-col justify-center pr-10 lg:flex-row lg:px-2">
          <div className="relative flex h-full min-h-[400px] w-full items-center justify-center lg:w-1/2">
            <Image
              src="/images/landing-page/chef.png"
              fill
              alt="chef"
              objectFit="cover"
            />
            <p className="absolute bottom-10 right-[-9%] rounded-md p-2 font-corinthia text-5xl text-white lg:text-7xl">
              Chef
              <br />
              Jomon
            </p>
          </div>
          <div className="z-10 flex h-full w-full flex-col gap-8 py-4 pl-10 font-jakarta tracking-widest lg:w-1/2 lg:px-28 lg:py-16">
            <p className="flex flex-col text-lg uppercase">
              Chef Jomon
              <span className="w-full text-sm lowercase lg:text-lg">
                senior chef at tiffin Box
              </span>
            </p>
            <p className="text-sm 2xl:text-base">
              Craving your favorite South Indian dishes? Enjoy the rich,
              authentic flavors of The Tiffin Box from the comfort of your home.
              Order online for a quick and easy delivery straight to your
              doorstep. Our dishes are prepared fresh and delivered fast,
              ensuring a delicious experience every time
            </p>
            <p className="hidden text-sm lg:block 2xl:text-base">
              Craving your favorite South Indian dishes? Enjoy the rich,
              authentic flavors of The Tiffin Box from the comfort of your home.
              Order online for a quick and easy delivery straight to your
              doorstep. Our dishes are prepared fresh and delivered fast,
              ensuring a delicious experience every time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
