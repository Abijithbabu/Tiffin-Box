import Image from 'next/image'
import React from 'react'

const WhyTiffinBox = () => {
   return (
      <section id="why-tiffin-box" className="relative flex min-h-screen w-full justify-center">
         <div className="flex h-full w-full flex-col max-w-[1500px] items-center justify-center gap-28 pt-12 tracking-widest font-thin">
            <div className="flex flex-col gap-8 pt-28 items-center justify-center font-jakarta text-xl font-thin uppercase sm:text-8xl md:text-9xl lg:text-7xl tracking-widest leading-tight">
               <p className="text-lg text-yellow">
                  Why Tiffin Box
               </p>
               <p>Our Specialties</p>
            </div>
            <div className="relative flex w-full h-full min-h-[90vh] flex-row justify-center px-2">
               <div className='w-1/4 flex flex-col justify-around items-end'>
                  <div className='flex flex-col text-end w-4/5'>
                     <h1 className='uppercase'>Authentic South</h1>
                     <h1 className='uppercase'>Indian Cuisine</h1>
                     <p className='pt-5'>Our dishes are prepared using traditional recipes to bring you the true flavors of South India.</p>
                  </div>
                  <div className='flex flex-col text-end pr-20'>
                     <h1 className='uppercase'>Expert Chefs</h1>
                     <p className='pt-5'>Our chefs have years of experience crafting exquisite South Indian dishes, ensuring every bite is a delight.</p>
                  </div>
                  <div className='flex flex-col text-end w-4/5'>
                     <h1 className='uppercase'>Fresh, Quality Ingredients</h1>
                     <p className='pt-5'>We use only the finest, fresh ingredients to ensure the highest quality and authentic taste
                        in every meal</p>
                  </div>
               </div>
               <div className='w-2/4 flex items-center relative'>
                  <Image
                     src="/images/landing-page/why-tiffin-box.png"
                     fill
                     alt="why-tiffin-box"
                     objectFit="contain"
                  />
               </div>
               <div className='w-1/4 flex flex-col justify-around'>
                  <div className='flex flex-col w-4/5'>
                     <h1 className='uppercase'>Comfortable Dining</h1>
                     <h1 className='uppercase'>Experience</h1>
                     <p className='pt-5'>Our restaurant offers a warm and welcoming ambiance for a relaxed
                        and enjoyable dining experience.</p>
                  </div>
                  <div className='flex flex-col pl-20'>
                     <h1 className='uppercase'>Health-Conscious Options</h1>
                     <p className='pt-5'>From vegetarian to gluten-free
                        dishes, we provide healthy options without compromising on flavor.</p>
                  </div>
                  <div className='flex flex-col w-4/5'>
                     <h1 className='uppercase'>Seamless Online</h1>
                     <h1 className='uppercase'>Ordering & Delivery</h1>
                     <p className='pt-5'>Enjoy your favorite dishes at home
                        with our easy online ordering and fast delivery service.</p>
                  </div>
               </div>
            </div>
            <Image
               src="/images/landing-page/spoon.png"
               width={500}
               height={500}
               alt="spoon"
            />
         </div>
      </section>
   )
}

export default WhyTiffinBox