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

const Reviews = ({ }) => {
  return (
    <section className="relative flex h-full w-full justify-center bg-[#070707] py-6">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-start justify-center gap-4 py-12 md:py-44">
        <div className="flex h-full w-full flex-col items-start justify-center gap-4">
          <h1 className="max-w-[700px] text-center md:text-start font-playfair text-5xl sm:text-6xl">
            What Our Customers Say
          </h1>
        </div>
        <div className="flex w-full items-center justify-center p-4">
          <Carousel className="w-full px-4">
            <CarouselContent className="ml-4 flex w-full justify-center gap-4">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="flex w-full basis-full flex-col gap-6 rounded-sm border border-[#2C2A28] bg-[#0B0B0B] px-6 py-8 md:basis-1/3"
                >
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
                  <div className="flex w-full">
                    {Array.from({ length: review.stars }).map((_, index) => (
                      <Icons.star key={index} className="text-primary" />
                    ))}
                  </div>
                  <div className="">
                    <p className="text-[#FBEAD2]">{review.review}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
              <CarouselPrevious className="transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
              <CarouselNext className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
