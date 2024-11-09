import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <footer className="z-50 flex h-full w-full items-center justify-center bg-black px-2 py-[8.75rem]">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-10 text-center uppercase tracking-[0.3rem] md:gap-20">
        <div className="flex flex-col items-center gap-2 md:gap-5">
          <Image
            src="/images/landing-page/logo.png"
            width={84}
            height={58}
            alt="steak house"
          />
          <h1 className="pt-5 text-xl md:text-2xl tracking-[0.5rem] lg:tracking-[0.9rem] 2xl:text-4xl">
            Subscribe to
          </h1>
          <h1 className="text-xl md:text-2xl tracking-[0.5rem] lg:tracking-[0.9rem] 2xl:text-4xl">
            our newsletter
          </h1>
        </div>
        <div className="flex h-full flex-col gap-10">
          <div className="flex flex-col gap-4 md:gap-2 lg:flex-row">
            <input
              placeholder="EMAIL ADDRESS"
              className="min-w-[300px] border-b bg-transparent tracking-[0.2rem] md:tracking-[0.3rem] text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0"
            />
            <Button
              className="group items-center gap-[1.19rem] border bg-transparent font-semibold tracking-wide text-white hover:border-yellow hover:bg-yellow hover:text-[#282828]"
              variant="secondary"
            >
              Subscribe
              <Icons.rightArrow className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-sm md:gap-2 2xl:gap-[1.38rem] 2xl:text-base">
          <h3 className="font-bold uppercase tracking-widest">Contact Us</h3>
          <p className="tracking-widest">0151 245 1500</p>
          <p className="tracking-widest">Info@tiffinbox.co.uk</p>
          <p>Allerton Rd, Liverpool L25 7RE</p>
        </div>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-3 text-center uppercase md:w-1/2 md:justify-between md:gap-0">
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start uppercase tracking-widest text-white"
          >
            Menu
          </Button>
          |
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start uppercase tracking-widest text-white"
          >
            Order Online
          </Button>
          |
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start uppercase tracking-widest text-white"
          >
            Book A Table
          </Button>
          |
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start uppercase tracking-widest text-white"
          >
            About Us
          </Button>
          |
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start uppercase tracking-widest text-white"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
