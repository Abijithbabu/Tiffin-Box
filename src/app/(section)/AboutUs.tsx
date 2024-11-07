import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const AboutUs = ({ }) => {
  return (
    <section id="about-us" className="flex flex-col md:flex-row w-full md:min-h-[100vh] md:h-1 pt-8 items-center justify-center">
      <div className="w-full md:w-1/2 h-full min-h-[400px] flex justify-center items-center relative">
        <Image
          src="/images/landing-page/about.png"
          fill
          alt="about"
          objectFit="cover"
          className=""
        />
      </div>
      <div className="flex w-full md:w-1/2 h-full flex-col gap-8 p-12 md:p-28 items-center md:items-start justify-center text-black font-jakarta tracking-widest bg-yellow">
        <p className="text-xs md:text-lg uppercase">
          About Us
        </p>
        <div className="hidden md:flex flex-col gap-8 text-xl font-thin sm:text-8xl md:text-9xl lg:text-6xl tracking-widest leading-tight uppercase">
          <p>Experience</p>
          <p>Authentic</p>
          <p>South Indian</p>
          <p>Flavors at The</p>
          <p>Tiffin Box</p>
        </div>
        <div className="md:hidden text-center text-xl font-thin tracking-widest leading-tight uppercase">
          <p>Experience Authentic South Indian Flavors at The Tiffin Box</p>
        </div>
        <Button
          className="group items-center gap-[1.19rem] font-semibold text-black hover:text-[#282828] bg-transparent border border-black hover:bg-primary"
          variant="secondary"
          asChild
        >
          <Link href="/menu">
            Know More
            <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;


// import { Icons } from "@/components/Icon";
// import ModelBox from "@/components/ModelBox";
// import { Button } from "@/components/ui/button";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Link from "next/link";

// const slideData: {
//   ModelUrl: string;
// }[] = [
//     {
//       ModelUrl: "/models/albondigas.glb",
//     },
//     {
//       ModelUrl: "/models/steak-tartare.glb",
//     },
//     {
//       ModelUrl: "/models/king-prawns.glb",
//     },
//   ];

// const AboutUs = () => {
//   return (
//     <section className="relative flex h-full w-full items-center justify-center bg-[#070707]">
//       <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 pb-32 pt-32">
//         <h3 className="font-playfair uppercase italic">About Us</h3>
//         <h1 className="text-center font-playfair text-4xl sm:text-6xl">
//           Step into Bavette.
//           <br />
//           Where the art of steak becomes an experience.
//           <br />
//           Your gateway to absolute perfection.
//         </h1>
//         <Button
//           variant="outline"
//           className="group mt-8 items-center gap-[1.19rem] border-primary font-semibold uppercase text-white hover:bg-primary md:mt-[5.6rem] lg:z-40 py-7"
//         >
//           <Link
//             href="/table-booking"
//             className="flex items-center gap-[1.19rem]"
//           >
//             Book Table{" "}
//             <Icons.rightArrow className="text-primary duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
//           </Link>
//         </Button>
//         <div className="hidden lg:flex lg:w-full lg:justify-center">
//           <Carousel className="z-40 h-full w-full">
//             <CarouselContent className="w-full">
//               {slideData.map((item) => {
//                 return (
//                   <CarouselItem
//                     className="flex w-full justify-center"
//                     key={item.ModelUrl}
//                   >
//                     <ModelBox
//                       src={item.ModelUrl}
//                       width="80%"
//                       height="500px"
//                       Top="0px"
//                       Bottom="10px"
//                       cameraOrbit="0deg 50deg 0deg 5m"
//                       fieldOfView="35deg"
//                       cameraTarget="0m 0m 0m"
//                     />
//                   </CarouselItem>
//                 );
//               })}
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//           </Carousel>
//         </div>
//         <div className="flex w-full justify-center lg:hidden lg:w-0">
//           <Carousel className="z-50 h-full w-full">
//             <CarouselContent className="w-full">
//               {slideData.map((item) => {
//                 return (
//                   <CarouselItem
//                     className="flex w-full justify-center"
//                     key={item.ModelUrl}
//                   >
//                     <ModelBox
//                       src={item.ModelUrl}
//                       width="100%"
//                       height="500px"
//                       Top="20px"
//                       cameraOrbit="0deg 50deg 0deg 3m"
//                       fieldOfView="25deg"
//                       cameraTarget="0m 0m 0m"
//                     />
//                   </CarouselItem>
//                 );
//               })}
//             </CarouselContent>
//             <div className="flex justify-center gap-4">
//               <CarouselPrevious className="static" />
//               <CarouselNext className="static" />
//             </div>
//           </Carousel>
//         </div>
//       </div>
//       <div className="absolute bottom-0 left-0 z-0 w-full overflow-hidden">
//         <div className="scrolling-text">
//           <h1 className="font-playfair text-[10rem] uppercase text-[#151515]">
//             Discover Bavette /
//           </h1>
//           <h1 className="font-playfair text-[10rem] uppercase text-[#151515]">
//             Discover Bavette /
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;
