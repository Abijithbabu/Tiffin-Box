import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { type FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { BookCheck, Dock, Gift, Phone, ShieldQuestion } from "lucide-react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <Image src="/images/landing-page/logo.png" width={60} height={60} alt="Foodo" />
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-start justify-start pt-6">
            <Button
              variant="link"
              className={cn("w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800")}
              asChild
            >
              <Link href="/menu" className="flex gap-2 py-6"><Dock /> <span>View Menu</span></Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
            >
              <Link href="#" className="flex gap-2 py-6"><Gift /> <span>Order Online</span> </Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="w-full flex justify-start px-1 p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
            >
              <Link href="/table-booking" className="flex gap-2 py-6"><BookCheck /> <span>Book A Table</span> </Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
            >
              <Link href="#" className="flex gap-2 py-6" ><ShieldQuestion /><span>About Us</span></Link>
            </Button>
            <Button
              variant="link"
              className="w-full flex justify-start p-0 uppercase text-accent text-white"
              asChild
            >
              <Link href="#" className="flex gap-2 py-6"><Phone /> <span>Contact Us</span></Link>
            </Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
