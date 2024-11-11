"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Hero = ({}) => {
  const { scrollYProgress } = useViewportScroll();
  const Rotate = useTransform(scrollYProgress, [0, 1], [0, 502]);

  return (
    <section
      id="hero"
      className="flex min-h-[40rem] w-full justify-center p-4 lg:min-h-screen lg:pl-40"
    >
      <div className="flex min-h-[40rem] w-full flex-col justify-center lg:h-1 lg:min-h-screen lg:flex-row">
        <div className="z-10 order-2 flex h-full w-full items-center justify-around gap-16 text-stone-400 lg:order-1 lg:w-1/3 lg:flex-col lg:items-start lg:justify-start lg:pt-40">
          <Image
            src="/images/landing-page/logo.png"
            width={84}
            height={58}
            alt="steak house"
            className="hidden lg:block"
          />
          <div className="hidden lg:flex flex-col gap-4">
            <p className="font-thin uppercase tracking-[0.5rem] lg:tracking-[0.9rem] text-4xl 2xl:text-5xl">
              Authentic
              <br />
            </p>
            <p className="font-thin uppercase tracking-[0.5rem] lg:tracking-[0.9rem] text-4xl 2xl:text-5xl">
              south&nbsp;Indian
            </p>
            <p className="font-thin uppercase tracking-[0.5rem] lg:tracking-[0.9rem] text-4xl 2xl:text-5xl">
              Cuisine
            </p>
          </div>
          <Button
            className="group items-center gap-[1.19rem] border border-stone-400 bg-transparent hover:bg-yellow"
            variant="secondary"
            asChild
          >
            <Link href="/menu" className="group flex items-center space-x-2">
              <p className="text-stone-400 duration-300 group-hover:text-black">
                Order Now
              </p>
              <Icons.rightArrow className="transform text-yellow duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-black" />
            </Link>
          </Button>
        </div>
        <motion.div className="relative order-1 flex h-full min-h-[500px] w-full items-center justify-center overflow-hidden lg:order-2 lg:w-2/3">
          <motion.div
            className="relative h-full w-full"
            style={{ rotate: Rotate }}
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{
              ease: [0.65, 0, 0.35, 1],
              delay: 0.1,
              duration: 0.9,
            }}
          >
            <Image
              src="/images/landing-page/hero.png"
              fill
              alt="hero"
              objectFit="contain"
            />
          </motion.div>
          <div className="absolute bottom-0 flex w-full flex-col items-center text-center rounded-md p-2 font-thin uppercase tracking-[0.5rem] lg:tracking-[0.9rem] text-stone-800 lg:hidden">
            <p>Authentic South Indian Cuisine</p>
            <p className="text-white">Authentic South Indian Cuisine</p>
            <p>Authentic South Indian Cuisine</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
