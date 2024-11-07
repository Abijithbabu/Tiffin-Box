import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Chef = () => {
   return (
      <section id="chef" className="flex w-full min-h-screen h-1 items-center justify-center">
         <div className="flex h-full w-full flex-col items-center justify-center gap-28 tracking-widest font-thin">
            <div className="flex flex-col gap-8 items-center justify-center font-jakarta text-xl font-thin uppercase sm:text-8xl md:text-9xl lg:text-7xl tracking-widest leading-tight">
               <p className="text-lg text-yellow">
                  Chef
               </p>
               <span>Our Brand Chef</span>
            </div>
            <div className="relative flex w-full h-full flex-row justify-center px-2">
               <div className="w-1/2 h-full flex justify-center items-center relative">
                  <Image
                     src="/images/landing-page/chef.png"
                     fill
                     alt="chef"
                     objectFit="cover"
                  />
                  <p className="font-corinthia absolute bottom-10 right-[-9%] text-7xl text-white p-2 rounded-md">
                     Chef<br/>Jomon
                  </p>
               </div>
               <div className="z-10 flex w-1/2 h-full flex-col gap-8 px-28 py-16 font-jakarta tracking-widest">
                  <p className="text-lg uppercase flex flex-col">
                     Chef Jomon
                     <span className="text-lg w-full lowercase">
                        senior chef at tiffin Box
                     </span>
                  </p>
                  <p className="text-md">
                     Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time
                  </p>
                  <p className="text-md">
                     Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Chef;