import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const reviews: {
  name: string;
  date: string;
  imageUrl: string;
  review: string;
  stars: number;
}[] = [
  {
    name: "Anna Mathew",
    review:
      "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back We booked private dining for our",
    stars: 5,
    date: "one day ago",
    imageUrl: "/images/home/reviews/pictures/anna-mathew.svg",
  },
  {
    name: "Gerrin Tom",
    review:
      "We booked private dining for our anniversary, and everything was perfect. The steak was melt-in-your-mouth delicious, and the staff was amazing!",
    stars: 5,
    date: "one day ago",
    imageUrl: "/images/home/reviews/pictures/gerrin-tom.svg",
  },
  {
    name: "Mery Elza",
    review:
      "Best steak I've ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!",
    stars: 5,
    date: "one day ago",
    imageUrl: "/images/home/reviews/pictures/mery-elza.svg",
  },
];

const Reviews = ({}) => {
  return (
    <section id="testimonials" className="relative flex min-h-screen w-full justify-center">
    <div className="flex h-full w-full flex-col max-w-[1500px] items-center justify-center gap-28 pt-12 tracking-widest font-thin">
       <div className="flex flex-col gap-8 pt-28 items-center justify-center font-jakarta text-xl font-thin uppercase sm:text-8xl md:text-9xl lg:text-7xl tracking-widest leading-tight">
          <p className="text-lg text-yellow">
             Testimonial
          </p>
          <p>What Our </p>
          <p>Customers Says</p>
       </div>
      <div className="flex h-full w-full flex-col items-start justify-center gap-4">
        <div className="flex w-full items-center justify-center p-4">
          <Carousel className="w-full px-4">
            <CarouselContent className="ml-4 flex w-full justify-center gap-4">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="flex w-full basis-full flex-col gap-6 rounded-sm px-6 py-8 md:basis-1/3"
                >
                  <div className="flex w-full">
                    {Array.from({ length: review.stars }).map((_, index) => (
                      <Icons.star key={index} className="text-yellow" />
                    ))}
                  </div>
                  <div className="">
                    <p className="text-[#FBEAD2]">{review.review}</p>
                  </div>
                  <hr/>
                  <div className="flex w-full items-center gap-2">
                    <Image
                      src={review.imageUrl}
                      width={64}
                      height={64}
                      alt={review.name}
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-[#FBEAD2]">{review.name}</p>
                      <span className="text-[#9C9995]">{review.date}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
              <CarouselPrevious className="transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
              <CarouselNext className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </div> */}
          </Carousel>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
