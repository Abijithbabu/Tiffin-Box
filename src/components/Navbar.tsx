"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import CartSheet from "@/components/cart/CartSheet";
import { BetaMenuActive } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = ({ position = "static" }: { position?: "static" | "fixed" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "absolute top-0 z-50 px-4 md:px-40 pt-10 flex w-full items-center transition-all duration-300 ease-in-out",
        isScrolled && "max-w-[1300px]",
      )}
    >
      <div className="flex h-full w-full items-center justify-between">
        <Sidebar>
          <Button
            variant="ghost"
            className="order-2 md:order-1 flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
          >
            <span className="sr-only">Menu</span>
            <svg className="order-2 md:order-1" width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="41" cy="41" r="41" fill="#0D0D0D" />
              <path d="M24 32H59" stroke="#E8B756" stroke-width="2" />
              <path d="M24 50H59" stroke="#E8B756" stroke-width="2" />
            </svg>
          </Button>
        </Sidebar>
        <Image
          src="/images/landing-page/logo.png"
          width={50}
          height={50}
          alt="steak house"
          className="md:hidden pl-2"
        />
        {!isScrolled && pathname !== "/" && (
          <div className="hidden order-2 items-center justify-center gap-[2.5rem] md:flex">
            <CartSheet>
              <Button
                variant="ghost"
                className="px-1 py-1 hover:bg-transparent"
                disabled={!BetaMenuActive}
              >
                <span className="sr-only">Shopping Cart</span>
                <Icons.shoppingCart />
              </Button>
            </CartSheet>
          </div>
        )}

        <Button
          className="group hidden md:flex order-2 text-xs md:text-sm bg-yellow items-center gap-[1.19rem] font-semibold text-black hover:text-[#282828] border border-black hover:bg-primary"
          variant="secondary"
          asChild
        >
          <Link href="/menu">
            View Menu
            <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
