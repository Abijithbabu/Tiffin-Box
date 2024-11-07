import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Locations = ({ }) => {
   return (
      <section id="locations" className="flex w-full justify-center pt-10 md:pt-0">
         <div className="flex flex-col md:flex-row md:min-h-[90vh] md:h-1 w-full justify-center">
            <div className="z-10 flex w-full md:w-1/2 h-full flex-col gap-2 md:gap-8 md:pl-32 items-center md:items-start justify-center font-jakarta tracking-widest">
               <p className="text-xs md:text-lg text-yellow uppercase">
                  Our Locations
               </p>
               <div className="hidden md:flex flex-col gap-8 text-xl font-thin sm:text-3xl md:text-5xl lg:text-6xl tracking-widest leading-tight uppercase">
                  <p>Find Us</p>
                  <p>At These</p>
                  <p>Convenient</p>
                  <p>Locations</p>
               </div>
               <div className="md:hidden text-center text-xl font-thin tracking-widest leading-normal md:leading-tight uppercase px-8">
                  <p>Find Us At These Convenient Locations</p>
               </div>
            </div>
            <div className="w-full md:w-1/2 h-full min-h-[400px] flex justify-center relative">
               <Image
                  src="/images/landing-page/locations.png"
                  fill
                  alt="locations"
                  objectFit="contain"
               />
               <div className="absolute top-12 md:top-36 right-2 md:right-4 xl:right-8 text-xs md:text-base bg-white bg-opacity-5 backdrop-blur-lg text-white p-4 md:p-10 rounded-md tracking-widest uppercase">
                  <p className="flex flex-col pb-2 md:pb-8">
                     <span className="w-full">
                        tiffin box
                     </span>
                     <span className="w-full">
                        Allerton Rd,
                     </span>
                     <span className="w-full">
                        Liverpool L25 7RE
                     </span>
                  </p>
                  <p className="">
                     Get Directions
                  </p>
                  <hr className="border-yellow border-t-2" />
               </div>
               {/* <div className="absolute bottom-40 left-4 text-white p-2 rounded-md">
                  Bottom Left Label
               </div> */}
            </div>

         </div>
      </section>
   );
};

export default Locations;
