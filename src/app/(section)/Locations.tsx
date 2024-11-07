import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Locations = ({ }) => {
   return (
      <section id="locations" className="flex w-full justify-center">
         <div className="flex flex-row min-h-[90vh] h-1 w-full justify-center">
            <div className="z-10 flex w-1/2 h-full flex-col gap-8 pl-32 items-start justify-center font-jakarta tracking-widest">
               <p className="text-lg text-yellow uppercase">
                  Our Locations
               </p>
               <div className="flex flex-col gap-8 text-xl font-thin sm:text-8xl md:text-9xl lg:text-7xl tracking-widest leading-tight uppercase">
                  <p>Find Us</p>
                  <p>At These</p>
                  <p>Convenient</p>
                  <p>Locations</p>
               </div>
            </div>
            <div className="w-1/2 h-full flex justify-center relative">
               <Image
                  src="/images/landing-page/locations.png"
                  fill
                  alt="locations"
                  objectFit="contain"
               />
               <div className="absolute top-32 right-4 bg-[rgba(7,7,7,0.26)] backdrop-blur-lg text-white p-12 rounded-md tracking-widest uppercase">
                  <p className="text-md flex flex-col pb-8">
                     <span className="text-md w-full">
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
