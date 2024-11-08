import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const BookTable = ({ }) => {
  return (
    <section id="book-table" className="flex flex-col md:flex-row w-full min-h-[100vh] h-1 items-center justify-center">
      <div className="w-full md:w-1/2 h-full flex min-h-[400px] justify-center items-center relative">
        <Image
          src="/images/landing-page/book-table.png"
          fill
          alt="book-table"
          objectFit="cover"
          className=""
        />
      </div>
      <div className="z-10 flex w-full md:w-1/2 h-full flex-col gap-4 md:gap-8 p-2 md:p-28 items-center md:items-start justify-center font-jakarta tracking-widest">
        <p className="text-xs md:text-lg text-yellow uppercase">
          Book Table
        </p>
        <div className="hidden md:flex flex-col gap-8 text-xl font-thin sm:text-3xl md:text-5xl lg:text-6xl tracking-widest leading-tight uppercase">
          <p>Planning a</p>
          <p>Meal At The</p>
          <p>Tiffin Box</p>
        </div>
        <div className="md:hidden text-center text-xl font-thin tracking-widest leading-normal md:leading-tight uppercase px-12">
          <p>Planning a Meal At The Tiffin Box</p>
        </div>
        <p className="text-sm md:text-lg w-4/5 text-center md:text-start">
          Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time
        </p>
        <Button
          className="group items-center gap-[1.19rem] bg-transparent border border-white hover:bg-primary"
          variant="secondary"
          asChild
        >
          <Link href="/menu" className="group flex items-center space-x-2">
            <p className="text-white group-hover:text-black duration-300">Book Table</p>
            <Icons.rightArrow className="text-yellow group-hover:text-black duration-300 ease-in-out transform group-hover:translate-x-1" />
          </Link>
        </Button>

      </div>
    </section>
  );
};

export default BookTable;