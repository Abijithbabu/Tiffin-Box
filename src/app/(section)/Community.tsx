import { Icons } from "@/components/Icon";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images: {
   name: string;
   imageUrl: string;
}[] = [
      {
         name: "community_1",
         imageUrl: "/images/landing-page/about.png",
      },
      {
         name: "community_2",
         imageUrl: "/images/landing-page/community-2.png",
      },
      {
         name: "community_3",
         imageUrl: "/images/landing-page/community-3.png",
      },
      {
         name: "community_4",
         imageUrl: "/images/landing-page/community-4.png",
      },
   ];

const Community = ({ }) => {
   return (
      <section id="testimonials" className="relative flex md:min-h-screen w-full justify-center">
         <div className="flex h-full w-full flex-col max-w-[1500px] items-center justify-center gap-8 md:gap-28 tracking-widest font-thin">
            <div className="flex flex-col gap-2 md:gap-8 pt-8 md:pt-24 items-center justify-center font-jakarta text-xl font-thin uppercase sm:text-3xl md:text-5xl lg:text-6xl tracking-widest leading-tight">
               <p className="text-xs md:text-lg text-yellow">
                  Instagram
               </p>
               <p>Join Our</p>
               <p>Community</p>
            </div>
            <div className="flex h-full w-full flex-col items-start justify-center">
               <div className="grid grid-cols-2 md:grid-cols-4 w-full items-center gap-2 md:gap-8">
                  {images.map((item, index) => (
                     <div key={index} className="flex flex-col items-center gap-2">
                        <Image
                           src={item.imageUrl}
                           width={500}
                           height={500}
                           objectFit="contain"
                           alt={item.name}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Community;
