import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ }) => {
  return (
    <section id="hero" className="flex p-4 w-full min-h-[50vh] md:min-h-screen md:pl-40 justify-center">
      <div className="flex flex-col md:flex-row min-h-[50vh] md:min-h-screen md:h-1 w-full justify-center">
        <div className="flex w-full order-2 md:order-1 md:w-1/3 h-full md:flex-col gap-8 items-center md:items-start justify-around md:justify-start text-stone-400 md:pt-40 z-10">
          <Image
            src="/images/landing-page/logo.png"
            width={84}
            height={58}
            alt="steak house"
          />
          <p className="hidden md:block text-xl font-thin uppercase sm:text-3xl md:text-5xl lg:text-6xl tracking-widest">
            Authentic<br />
          </p>
          <p className="hidden md:block text-xl font-thin uppercase sm:text-3xl md:text-5xl lg:text-6xl tracking-widest">
            south&nbsp;Indian
          </p>
          <p className="hidden md:block text-xl font-thin uppercase sm:text-3xl md:text-5xl lg:text-6xl tracking-widest">
            Cusine
          </p>
          <Button
            className="group items-center gap-[1.19rem] bg-transparent border border-stone-400 hover:bg-primary"
            variant="secondary"
            asChild
          >
            <Link href="/menu" className="group flex items-center space-x-2">
              <p className="text-stone-400 group-hover:text-black duration-300">Order Now</p>
              <Icons.rightArrow className="text-yellow group-hover:text-black duration-300 ease-in-out transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="w-full order-1 md:order-2 md:w-2/3 h-full min-h-[500px] flex items-center justify-center relative">
          <Image
            src="/images/landing-page/hero.png"
            fill
            alt="hero"
            objectFit="contain"
          />
          <div className="md:hidden absolute flex flex-col w-full items-center bottom-0 text-stone-900 p-2 rounded-md uppercase tracking-widest font-thin">
            <p>Authentic South Indian Cusine</p>
            <p>Authentic South Indian Cusine</p>
            <p className="text-stone-400">Authentic South Indian Cusine</p>
            <p>Authentic South Indian Cusine</p>
            <p>Authentic South Indian Cusine</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
