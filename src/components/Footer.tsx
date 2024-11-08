import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ }) => {
  return (
    <footer className="z-50 flex h-full w-full items-center justify-center bg-black px-2 py-[8.75rem]">
      <div className="flex justify-center text-center uppercase items-center h-full w-full max-w-[1300px] flex-col gap-10 md:gap-20 tracking-widest">
        <div className="flex flex-col items-center gap-2 md:gap-5">
          <Image
            src="/images/landing-page/logo.png"
            width={84}
            height={58}
            alt="steak house"
          />
          <h1 className="text-2xl md:text-5xl tracking-widest pt-5">
            Subscribe to
          </h1>
          <h1 className="text-2xl md:text-5xl tracking-widest">
            our newsletter
          </h1>
        </div>
        <div className="flex h-full flex-col gap-10">
          <div className="flex flex-col gap-4 md:gap-2 lg:flex-row">
            <input
              placeholder="Email"
              className="min-w-[300px] border-b border-yellow bg-transparent text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0"
            />
            <Button
              className="group items-center gap-[1.19rem] border border-yellow bg-transparent font-semibold uppercase text-yellow hover:border-primary hover:bg-primary hover:text-[#282828]"
              variant="secondary"
            >
              Subscribe
              <Icons.rightArrow className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:gap-[1.38rem] text-sm md:text-base">
          <h3 className="font-bold uppercase tracking-widest">Contact Us</h3>
          <p className="tracking-widest">0151 245 1500</p>
          <p className="tracking-widest">Info@tiffinbox.co.uk</p>
          <p>Allerton Rd, Liverpool L25 7RE</p>
        </div>
        <div className="flex w-full md:w-1/2 gap-3 md:gap-0 flex-row flex-wrap items-center justify-center md:justify-between uppercase text-center">
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-white uppercase tracking-widest"
          >
            Menu
          </Button>
          |
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-white uppercase tracking-widest"
          >
            Order Online
          </Button>
          |
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-white uppercase tracking-widest"
          >
            Book A Table
          </Button>
          |
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-white uppercase tracking-widest"
          >
            About Us
          </Button>
          |
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-white uppercase tracking-widest"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </footer >
  );
};

export default Footer;