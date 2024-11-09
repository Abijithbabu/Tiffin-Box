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

const Community = ({}) => {
  return (
    <section
      id="testimonials"
      className="relative flex w-full justify-center lg:min-h-screen"
    >
      <div className="flex h-full w-full max-w-[1500px] flex-col items-center justify-center gap-8 font-thin tracking-[0.5rem] lg:tracking-[0.9rem] lg:gap-28">
        <div className="flex flex-col items-center justify-center gap-2 pt-8 font-jakarta text-xl font-thin uppercase leading-tight tracking-[0.5rem] lg:tracking-[0.9rem] sm:text-3xl lg:gap-4 lg:pt-24 lg:text-4xl 2xl:gap-8 2xl:text-6xl">
          <p className="text-xs tracking-[0.3rem] text-yellow 2xl:text-sm">
            Instagram
          </p>
          <p>Join Our</p>
          <p>Community</p>
        </div>
        <div className="flex h-full w-full flex-col items-start justify-center">
          <div className="grid w-full grid-cols-2 items-center gap-2 lg:grid-cols-4 lg:gap-8">
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
