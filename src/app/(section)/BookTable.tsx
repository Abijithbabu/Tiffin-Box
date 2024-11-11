import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const BookTable = ({}) => {
  return (
    <section
      id="book-table"
      className="flex h-1 min-h-[100vh] w-full flex-col items-center justify-center pt-10 lg:pt-40 lg:flex-row"
    >
      <div className="relative flex h-full min-h-[400px] w-full items-center justify-center lg:w-1/2">
        <Image
          src="/images/landing-page/book-table.png"
          fill
          alt="book-table"
          objectFit="cover"
          className=""
        />
      </div>
      <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-4 p-2 font-jakarta tracking-widest lg:w-1/2 lg:items-start lg:gap-8 lg:p-28">
        <p className="text-xs uppercase tracking-[0.3rem] text-yellow 2xl:text-sm">
          Book Table
        </p>
        <div className="hidden flex-col gap-4 text-xl font-thin uppercase leading-tight tracking-[0.5rem] lg:tracking-[0.9rem] sm:text-3xl lg:flex lg:text-4xl 2xl:gap-8 2xl:text-5xl">
          <p>Planning a</p>
          <p>Meal At The</p>
          <p>Tiffin Box</p>
        </div>
        <div className="px-12 text-center text-xl font-thin uppercase leading-normal tracking-[0.5rem] lg:tracking-[0.9rem] lg:hidden lg:leading-tight">
          <p>Planning a Meal At The Tiffin Box</p>
        </div>
        <p className="text-center text-sm lg:text-start lg:text-base 2xl:w-4/5">
          Craving your favorite South Indian dishes? Enjoy the rich, authentic
          flavors of The Tiffin Box from the comfort of your home. Order online
          for a quick and easy delivery straight to your doorstep. Our dishes
          are prepared fresh and delivered fast, ensuring a delicious experience
          every time
        </p>
        <Button
          className="group items-center gap-[1.19rem] border border-white bg-transparent hover:bg-yellow"
          variant="secondary"
          asChild
        >
          <Link href="/menu" className="group flex items-center space-x-2">
            <p className="text-white duration-300 group-hover:text-black">
              Book Table
            </p>
            <Icons.rightArrow className="transform text-yellow duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-black" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default BookTable;
