import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ }) => {
  return (
    <footer className="z-50 flex h-full w-full items-center justify-center bg-black px-2 py-[8.75rem]">
      <div className="flex justify-center text-center uppercase items-center h-full w-full max-w-[1300px] flex-col gap-20 tracking-widest">
        <div className="flex flex-col items-center gap-5">
          <Image
            src="/images/landing-page/logo.png"
            width={84}
            height={58}
            alt="steak house"
          />
          <h1 className="text-5xl tracking-widest pt-5">
            Subscribe to
          </h1>
          <h1 className="text-5xl tracking-widest">
            our newsletter
          </h1>
        </div>
        <div className="flex h-full flex-col gap-10">
          <div className="flex flex-col gap-2 lg:flex-row">
            <input
              placeholder="Email"
              className="min-w-[300px] border-b border-primary bg-transparent text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0"
            />
            <Button
              className="group items-center gap-[1.19rem] border border-accent bg-transparent font-semibold uppercase text-accent hover:border-primary hover:bg-primary hover:text-[#282828]"
              variant="secondary"
            >
              Subscribe
              <Icons.rightArrow className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col  gap-[1.38rem] ">
          <h3 className="font-bold uppercase tracking-widest">Contact Us</h3>
          <p className="tracking-widest">0151 245 1500</p>
          <p className="tracking-widest">Info@tiffinbox.co.uk</p>
          <p>Allerton Rd, Liverpool L25 7RE</p>
        </div>
        <div className="flex w-1/2 flex-row items-center justify-between uppercase">
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-accent uppercase"
          >
            Menu
          </Button>
          |
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-accent uppercase tracking-widest"
          >
            Order Online
          </Button>
          |
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-accent uppercase tracking-widest"
          >
            Book A Table
          </Button>
          |
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-accent uppercase tracking-widest"
          >
            About Us
          </Button>
          |
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-accent uppercase tracking-widest"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </footer >
  );
};

export default Footer;