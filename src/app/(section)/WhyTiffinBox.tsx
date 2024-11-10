import Image from "next/image";
import React from "react";

const WhyTiffinBox = () => {
  return (
    <section
      id="why-tiffin-box"
      className="relative flex min-h-screen w-full justify-center"
    >
      <div className="flex h-full w-full max-w-[1500px] flex-col items-center justify-center gap-8 pt-12 font-thin tracking-widest lg:gap-28">
        <div className="flex flex-col items-center justify-center gap-2 pt-8 font-jakarta text-xl font-thin uppercase leading-tight tracking-[0.5rem] lg:tracking-[0.9rem] sm:text-3xl lg:gap-8 lg:pt-28 lg:text-4xl 2xl:text-5xl">
          <p className="text-xs tracking-[0.4rem] text-yellow 2xl:text-sm">
            Why Tiffin Box
          </p>
          <p>Our Specialties</p>
        </div>
        <div className="relative flex h-full min-h-[90vh] w-full flex-col justify-center px-2 lg:px-0 lg:flex-row">
          <div className="flex w-full flex-col justify-around gap-8 px-4 lg:w-1/4 lg:items-end lg:gap-0 lg:px-0 lg:text-end">
            <div className="flex w-4/5 flex-col">
              <h1 className="uppercase">Authentic South</h1>
              <h1 className="uppercase">Indian Cuisine</h1>
              <p className="pt-2 text-xs lg:pt-5 2xl:text-sm">
                Our dishes are prepared using traditional recipes to bring you
                the true flavors of South India.
              </p>
            </div>
            <div className="flex w-full flex-col pl-20 lg:pl-0 lg:pr-20">
              <h1 className="uppercase">Expert Chefs</h1>
              <p className="pt-2 text-xs lg:pt-5 2xl:text-sm">
                Our chefs have years of experience crafting exquisite South
                Indian dishes, ensuring every bite is a delight.
              </p>
            </div>
            <div className="flex w-4/5 flex-col">
              <h1 className="uppercase">Fresh, Quality Ingredients</h1>
              <p className="pt-2 text-xs lg:pt-5 2xl:text-sm">
                We use only the finest, fresh ingredients to ensure the highest
                quality and authentic taste in every meal
              </p>
            </div>
          </div>
          <div className="relative flex min-h-[400px] w-full items-center lg:w-2/4">
            <Image
              src="/images/landing-page/why-tiffin-box.png"
              fill
              alt="why-tiffin-box"
              objectFit="contain"
            />
          </div>
          <div className="flex w-full flex-col justify-around gap-8 px-4 lg:w-1/4 lg:gap-0 lg:px-0">
            <div className="flex w-4/5 flex-col">
              <h1 className="uppercase">Comfortable Dining</h1>
              <h1 className="uppercase">Experience</h1>
              <p className="pt-2 text-xs lg:pt-5 2xl:text-sm">
                Our restaurant offers a warm and welcoming ambiance for a
                relaxed and enjoyable dining experience.
              </p>
            </div>
            <div className="flex flex-col pl-20">
              <h1 className="uppercase">Health-Conscious Options</h1>
              <p className="pt-2 text-xs lg:pt-5 2xl:text-sm">
                From vegetarian to gluten-free dishes, we provide healthy
                options without compromising on flavor.
              </p>
            </div>
            <div className="flex w-4/5 flex-col">
              <h1 className="uppercase">Seamless Online</h1>
              <h1 className="uppercase">Ordering & Delivery</h1>
              <p className="pt-2 text-xs lg:pt-5 2xl:text-sm">
                Enjoy your favorite dishes at home with our easy online ordering
                and fast delivery service.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/images/landing-page/spoon.png"
          width={300}
          height={300}
          alt="spoon"
        />
      </div>
    </section>
  );
};

export default WhyTiffinBox;
