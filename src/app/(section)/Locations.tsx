import Image from "next/image";

const Locations = ({}) => {
  return (
    <section
      id="locations"
      className="flex w-full justify-center pt-10 lg:pt-0"
    >
      <div className="flex w-full flex-col justify-center lg:h-1 lg:min-h-[90vh] lg:flex-row">
        <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-2 font-jakarta tracking-widest lg:w-1/2 lg:items-start lg:gap-8 lg:pl-32">
          <p className="text-xs uppercase tracking-[0.3rem] text-yellow 2xl:text-base">
            Our Locations
          </p>
          <div className="hidden flex-col gap-6 text-xl font-thin uppercase leading-tight tracking-[0.5rem] lg:tracking-[0.9rem] sm:text-3xl lg:flex lg:text-4xl 2xl:text-5xl">
            <p>Find Us</p>
            <p>At These</p>
            <p>Convenient</p>
            <p>Locations</p>
          </div>
          <div className="px-8 text-center text-xl font-thin uppercase leading-normal tracking-[0.5rem] lg:tracking-[0.9rem] lg:hidden lg:leading-tight">
            <p>Find Us At These Convenient Locations</p>
          </div>
        </div>
        <div className="relative flex h-full min-h-[400px] w-full justify-center lg:w-1/2">
          <Image
            src="/images/landing-page/locations.png"
            fill
            alt="locations"
            objectFit="contain"
          />
          <div className="absolute right-2 top-12 rounded-md bg-white bg-opacity-5 p-4 text-xs uppercase tracking-[0.4rem] text-white backdrop-blur-lg lg:right-0 lg:top-[20%] lg:p-6">
            <p className="flex flex-col pb-2 lg:pb-4 2xl:pb-8">
              <span className="w-full">tiffin box</span>
              <span className="w-full">Allerton Rd,</span>
              <span className="w-full">Liverpool L25 7RE</span>
            </p>
            <p className="h-7 border-b-2 border-yellow">Get Directions</p>
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
