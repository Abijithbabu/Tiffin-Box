import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ }) => {
  return (
    <section id="hero" className="flex w-full pl-40 justify-center">
      <div className="flex flex-row min-h-screen h-1 w-full justify-center">
        <div className="flex w-1/3 h-full flex-col gap-8 items-start justify-start pt-40 z-10">
          <Image
            src="/images/landing-page/logo.png"
            width={84}
            height={58}
            alt="steak house"
          />
          <p className="font-jakarta text-xl font-thin uppercase sm:text-8xl md:text-9xl lg:text-7xl tracking-widest leading-tight text-stone-400">
            Authentic<br />
          </p>
          <p className="font-jakarta text-xl font-thin uppercase sm:text-8xl md:text-9xl lg:text-7xl tracking-widest leading-tight text-stone-400">
            south&nbsp;Indian
          </p>
          <p className="font-jakarta text-xl font-thin uppercase sm:text-8xl md:text-9xl lg:text-7xl tracking-widest leading-tight text-stone-400">
            Cusine
          </p>
          <Button
            className="group items-center gap-[1.19rem] bg-transparent border border-white hover:bg-primary"
            variant="secondary"
            asChild
          >
            <Link href="/menu" className="group flex items-center space-x-2">
              <p className="text-white group-hover:text-black duration-300">Order Now</p>
              <Icons.rightArrow className="text-yellow group-hover:text-black duration-300 ease-in-out transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="w-2/3 h-full flex justify-center relative">
          {/* <div className="w-full pt-[100%] flex justify-center relative"> */}
            <Image
              src="/images/landing-page/hero.png"
              fill
              alt="hero"
              objectFit="contain"
            />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
