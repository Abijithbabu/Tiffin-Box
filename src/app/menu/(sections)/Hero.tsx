const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="hidden h-full min-h-[400px] w-full flex-col items-center justify-center gap-[1.38rem] text-[1.5rem] leading-[110%] md:flex tracking-[0.5rem]"
      style={{
        background:
          "linear-gradient(170deg, rgba(0, 0, 0, 0.00) 7.51%, rgba(0, 0, 0, 0.80) 92.93%), url(/images/menu/hero.png) lightgray 50% / cover no-repeat",
      }}
    >
      <h1 className="tracking-[0.8rem] text-[4.75rem] leading-[80%]">Our Menu</h1>
      <p>Chose & taste what you like</p>
    </section>
  );
};

export default Hero;
